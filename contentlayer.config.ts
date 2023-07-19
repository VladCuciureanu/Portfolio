import { makeSource } from "contentlayer/source-files";
import { Project } from "./content/definitions/Project";
import { Job } from "./content/definitions/Job";

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project, Job],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
