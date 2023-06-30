import styles from "./page.module.scss";
import ProjectsTable from "@/features/Projects/Table";
import Projects from "@/content/projects";

export default function ProjectsPage() {
  return (
    <>
      <h1 className={styles.Title}>Projects</h1>
      <p className={styles.Job}>It&apos;s not much but it&apos;s honest work</p>
      <div className={styles.Divider} />
      <ProjectsTable data={Projects} />
    </>
  );
}
