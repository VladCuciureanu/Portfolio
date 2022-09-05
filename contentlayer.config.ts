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
    creationYear: {
      type: "number",
      required: true,
    },
    thumbnailUrl: {
      type: "string",
      required: false,
    },
    homePageSlot: {
      type: "number",
      required: false,
    },
    status: {
      type: "enum",
      required: true,
      options: [
        "unreleased",
        "work-in-progress",
        "released",
        "discontinued",
        "private",
      ],
    },
  },
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project],
})
