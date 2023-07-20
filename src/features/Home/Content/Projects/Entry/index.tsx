import Link from "next/link";
import styles from "./index.module.scss";
import { useMDXComponent } from "next-contentlayer/hooks";
import ExternalLinkArrow from "@/assets/graphics/ExternalLinkArrow";
import DownloadsIcon from "@/assets/graphics/DownloadsIcon";
import StarsIcon from "@/assets/graphics/StarsIcon";
import ForksIcon from "@/assets/graphics/ForksIcon";

type EntryProps = {
  title: string;
  href: string;
  description: string;
  tags?: string[];
  additionalMetadata?: {
    dataType: "stars" | "forks" | "downloads";
    label: string;
  }[];
  github: {
    stars: number;
    forks: number;
  };
};

export default function HomeContentProjectEntry(props: EntryProps) {
  const Description = useMDXComponent(props.description);

  return (
    <li className={styles.Container}>
      <div className={styles.Glass} />
      {/* <header className={styles.Date}>{dateString}</header> */}
      <section className={styles.InfoWrapper}>
        <h3 className={styles.ProjectTitle}>
          <Link href={props.href} target="_blank">
            {`${props.title}`}
            <ExternalLinkArrow />
            <div className={styles.LinkExpander} />
          </Link>
        </h3>
        <div className={styles.ProjectDescription}>
          <Description />
        </div>
        {props.additionalMetadata && props.additionalMetadata.length > 0 && (
          <ul className={styles.AdditionalMetadataList}>
            {props.additionalMetadata.map((md, index) => (
              <li key={index} className={styles.Metadata}>
                {md.dataType === "downloads" && (
                  <>
                    <DownloadsIcon /> {md.label}
                  </>
                )}
                {md.dataType === "stars" && (
                  <>
                    <StarsIcon /> {props.github.stars ?? 0}
                  </>
                )}
                {md.dataType === "forks" && (
                  <>
                    <ForksIcon /> {props.github.forks ?? 0}
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
        {props.tags && props.tags.length > 0 && (
          <ul className={styles.TagsList}>
            {props.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        )}
      </section>
    </li>
  );
}
