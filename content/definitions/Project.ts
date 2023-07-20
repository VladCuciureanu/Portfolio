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
    highlightOrderId: {
      type: "number",
      description:
        "If not null, the project will be displayed on the home page and sorted by this number",
      required: false,
    },
    imageUrl: {
      type: "string",
      description: "Used in home page presentation",
      required: false,
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
    additionalMetadata: {
      type: "list",
      of: defineNestedType(() => ({
        name: "ProjectAdditionalMetadata",
        fields: {
          dataType: {
            type: "enum",
            options: ["stars", "forks", "downloads"],
            required: true,
          },
          label: {
            type: "string",
            required: true,
          },
        },
      })),
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
