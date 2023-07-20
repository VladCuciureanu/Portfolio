import { allProjects } from "contentlayer/generated";
import HomeContentProjectsEntry from "./Entry";
import styles from "./index.module.scss";

const projects = allProjects
  .filter((it) => it.highlightOrderId !== undefined)
  .sort((a, b) => a.highlightOrderId! - b.highlightOrderId!);

export default function HomeContentProjects() {
  return (
    <div>
      <ol className={styles.Container}>
        {projects.map((project, index) => (
          <HomeContentProjectsEntry
            key={index}
            title={project.title ?? project.github.title}
            description={project.body.code}
            href={project.github.url}
            additionalMetadata={project.additionalMetadata}
            tags={project.builtWith}
            github={project.github}
          />
        ))}
      </ol>
    </div>
  );
}
