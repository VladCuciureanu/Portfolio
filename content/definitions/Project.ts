import {
  defineDocumentType,
  defineNestedType,
} from "contentlayer/source-files";
import { getGithubDetails } from "../../src/libs/contentlayer/github";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "Override repo's name",
    },
    author: {
      type: "string",
      description: "Repo owner's username",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    builtWith: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
  },
  computedFields: {
    github: {
      type: "nested",
      of: defineNestedType(() => ({
        name: "GitHubRepo",
        fields: {
          id: {
            type: "string",
            required: true,
          },
          title: {
            type: "string",
            required: true,
          },
          description: {
            type: "string",
            required: true,
          },
          stars: {
            type: "number",
            required: true,
          },
          forks: {
            type: "number",
            required: true,
          },
          url: {
            type: "string",
            required: true,
          },
        },
      })),
      resolve: async (doc) => {
        const id = doc._raw.sourceFileName.replace(/\.mdx$/, "");

        const data = await getGithubDetails(`${doc.author}/${id}`);

        return {
          id,
          url: `https://github.com/${doc.author}/${id}`,
          ...data,
        };
      },
    },
  },
}));
