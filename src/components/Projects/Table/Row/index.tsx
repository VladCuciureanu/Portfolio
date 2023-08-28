import { Project } from "contentlayer/generated";
import styles from "./index.module.scss";
import PillsList from "@/components/Shared/PillsList";
import Link from "next/link";
import GitHubIcon from "@/assets/graphics/GitHubIcon";
import DownloadsIcon from "@/assets/graphics/DownloadsIcon";
import ForksIcon from "@/assets/graphics/ForksIcon";
import StarsIcon from "@/assets/graphics/StarsIcon";

export default function ProjectsTableRow({ data }: { data: Project }) {
  return (
    <tr className={styles.Row}>
      <td>{new Date(data.publishedAt).getFullYear()}</td>
      <td>
        <div>{data.title ?? data.github.title}</div>
        <Link href={data.github.url} target="_blank">
          {data.title ?? data.github.title}
        </Link>
      </td>
      <td>
        {" "}
        {data.additionalMetadata && data.additionalMetadata.length > 0 && (
          <ul className={styles.AdditionalMetadataList}>
            {data.additionalMetadata.map((md, index) => (
              <li key={index} className={styles.Metadata}>
                {md.dataType === "downloads" && (
                  <>
                    <DownloadsIcon />
                    {md.label}
                  </>
                )}
                {md.dataType === "stars" && (
                  <>
                    <StarsIcon />
                    {data.github.stars ?? 0}
                  </>
                )}
                {md.dataType === "forks" && (
                  <>
                    <ForksIcon />
                    {data.github.forks ?? 0}
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </td>
      <td>
        {data.builtWith && data.builtWith.length > 0 && (
          <PillsList data={data.builtWith} />
        )}
      </td>
      <td>
        <Link className={styles.Link} href={data.github.url} target="_blank">
          GitHub <GitHubIcon />
        </Link>
      </td>
    </tr>
  );
}
