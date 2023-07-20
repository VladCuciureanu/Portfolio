import {
  defineDocumentType,
  defineNestedType,
} from "contentlayer/source-files";

export const Job = defineDocumentType(() => ({
  name: "Job",
  filePathPattern: "jobs/*.mdx",
  contentType: "mdx",
  fields: {
    startDate: { type: "date", required: true },
    endDate: { type: "date", required: false },
    title: {
      type: "string",
      required: true,
    },
    previousTitles: {
      type: "list",
      required: false,
      of: {
        type: "string",
      },
    },
    company: {
      type: "nested",
      required: true,
      of: defineNestedType(() => ({
        name: "Company",
        fields: {
          name: { type: "string", required: true },
          href: { type: "string", required: true },
        },
      })),
    },
    tags: { type: "list", of: { type: "string" }, required: false },
    links: {
      type: "list",
      required: false,
      of: defineNestedType(() => ({
        name: "RelevantLink",
        fields: {
          label: { type: "string", required: true },
          href: { type: "string", required: true },
        },
      })),
    },
  },
}));
