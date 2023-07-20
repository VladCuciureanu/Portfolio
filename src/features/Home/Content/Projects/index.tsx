import { allProjects } from "contentlayer/generated";
import HomeContentProjectsEntry from "./Entry";
import styles from "./index.module.scss";
import Link from "next/link";
import LinkArrow from "@/assets/graphics/LinkArrow";

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
      <Link className={styles.ViewMore} href="/projects" target="_blank">
        <span>View Full Project Archive</span> <LinkArrow />
      </Link>
    </div>
  );
}
