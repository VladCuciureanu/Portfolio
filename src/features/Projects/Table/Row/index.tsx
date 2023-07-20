import { Project } from "contentlayer/generated";
import styles from "./index.module.scss";

export default function ProjectsTableRow({ data }: { data: Project }) {
  return (
    <tr className={styles.Row}>
      <td>{new Date(data.publishedAt).getFullYear()}</td>
      <td>{data.title ?? data.github.title}</td>
      <td>Yeetus</td>
      <td>
        {data.builtWith?.map((it, index) => (
          <div key={index}>{it}</div>
        ))}
      </td>
      <td>{data.github.url}</td>
    </tr>
  );
}
