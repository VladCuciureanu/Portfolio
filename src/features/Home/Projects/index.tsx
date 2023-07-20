import { Project, allProjects } from "contentlayer/generated";
import Entry from "./Entry";
import styles from "./index.module.scss";
import Link from "next/link";
import LinkArrow from "@/assets/graphics/LinkArrow";

export default function HomeProjectsList({ data }: { data: Project[] }) {
  return (
    <div>
      <ol className={styles.Container}>
        {data.map((project, index) => (
          <Entry key={index} data={project} />
        ))}
      </ol>
      <Link className={styles.ViewMore} href="/projects" target="_blank">
        <span>View Full Project Archive</span> <LinkArrow />
      </Link>
    </div>
  );
}
