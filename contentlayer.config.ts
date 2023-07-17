import { makeSource } from "contentlayer/source-files";
import { Project } from "./content/definitions/Project";

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
