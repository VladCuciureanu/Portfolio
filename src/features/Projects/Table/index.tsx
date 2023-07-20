import { Project } from "contentlayer/generated";
import styles from "./index.module.scss";
import ProjectsTableRow from "./Row";

export default function ProjectsTable({ data }: { data: Project[] }) {
  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          <td>Year</td>
          <td>Project</td>
          <td>Notes</td>
          <td>Built with</td>
          <td>Link</td>
        </tr>
      </thead>
      <tbody>
        {data.map((project, index) => (
          <ProjectsTableRow key={index} data={project} />
        ))}
      </tbody>
    </table>
  );
}
