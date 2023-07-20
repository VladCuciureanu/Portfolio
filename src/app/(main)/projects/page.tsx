import Link from "next/link";
import styles from "./page.module.scss";
import LinkArrow from "@/assets/graphics/LinkArrow";
import { generateMetadata } from "@/libs/seo";
import { Metadata } from "next";
import { allProjects } from "contentlayer/generated";
import ProjectsTable from "@/features/Projects/Table";

export const metadata: Metadata = generateMetadata({
  title: "All Projects",
  description: "It's not much but it's honest work",
});

const projects = allProjects.sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export default function ProjectsArchive() {
  return (
    <div className={styles.Container}>
      <Link href={"/"} className={styles.HomePageLink}>
        <LinkArrow />
        Vlad Cuciureanu
      </Link>
      <h1 className={styles.Title}>All Projects</h1>
      <ProjectsTable data={projects} />
    </div>
  );
}
