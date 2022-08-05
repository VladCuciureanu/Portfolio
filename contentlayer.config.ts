import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/*.md`,
  fields: {
    name: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    href: {
      type: "string",
      required: true,
    },
    year: {
      type: "string",
      required: true,
    },
    thumbnailUrl: {
      type: "string",
      required: true,
    },
  },
}))

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Project],
})
