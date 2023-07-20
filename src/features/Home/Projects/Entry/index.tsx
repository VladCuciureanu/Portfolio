import Link from "next/link";
import styles from "./index.module.scss";
import { useMDXComponent } from "next-contentlayer/hooks";
import ExternalLinkArrow from "@/assets/graphics/ExternalLinkArrow";
import DownloadsIcon from "@/assets/graphics/DownloadsIcon";
import StarsIcon from "@/assets/graphics/StarsIcon";
import ForksIcon from "@/assets/graphics/ForksIcon";
import { Project } from "contentlayer/generated";

export default function HomeProjectsListEntry({ data }: { data: Project }) {
  const Description = useMDXComponent(data.body.code);

  return (
    <li className={styles.Container}>
      <div className={styles.Glass} />
      {/* <header className={styles.Date}>{dateString}</header> */}
      <section className={styles.InfoWrapper}>
        <h3 className={styles.ProjectTitle}>
          <Link href={data.github.url} target="_blank">
            {`${data.title ?? data.github.title}`}
            <ExternalLinkArrow />
            <div className={styles.LinkExpander} />
          </Link>
        </h3>
        <div className={styles.ProjectDescription}>
          <Description />
        </div>
        {data.additionalMetadata && data.additionalMetadata.length > 0 && (
          <ul className={styles.AdditionalMetadataList}>
            {data.additionalMetadata.map((md, index) => (
              <li key={index} className={styles.Metadata}>
                {md.dataType === "downloads" && (
                  <>
                    <DownloadsIcon /> {md.label}
                  </>
                )}
                {md.dataType === "stars" && (
                  <>
                    <StarsIcon /> {data.github.stars ?? 0}
                  </>
                )}
                {md.dataType === "forks" && (
                  <>
                    <ForksIcon /> {data.github.forks ?? 0}
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
        {data.builtWith && data.builtWith.length > 0 && (
          <ul className={styles.TagsList}>
            {data.builtWith.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        )}
      </section>
    </li>
  );
}
