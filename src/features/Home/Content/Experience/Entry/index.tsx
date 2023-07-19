import Link from "next/link";
import styles from "./index.module.scss";
import LinkIcon from "@/assets/graphics/LinkIcon";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Suspense } from "react";
import ExternalLinkArrow from "@/assets/graphics/ExternalLinkArrow";

type EntryProps = {
  jobTitle: string;
  previousJobTitles?: string[];
  company: {
    name: string;
    href: string;
  };
  description: string;
  startDate: Date;
  endDate?: Date;
  tags?: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

export default function HomeContentExperienceEntry(props: EntryProps) {
  let dateString;

  const startYear = props.startDate.getFullYear();

  if (props.endDate) {
    const endYear = props.endDate.getFullYear();

    dateString = `${startYear} — ${endYear}`;

    if (startYear === endYear) {
      const startMonth = new Intl.DateTimeFormat("en", {
        month: "short",
      }).format(props.startDate);
      const endMonth = new Intl.DateTimeFormat("en", { month: "short" }).format(
        props.endDate
      );
      dateString = `${startMonth} — ${endMonth} ${props.startDate.getFullYear()}`;
    }
  } else {
    dateString = `${startYear} — Present`;
  }

  const Description = useMDXComponent(props.description);

  return (
    <li className={styles.Container}>
      <div className={styles.Glass} />
      <header className={styles.Date}>{dateString}</header>
      <section className={styles.InfoWrapper}>
        <h3 className={styles.JobTitle}>
          <Link href={props.company.href} target="_blank">
            {`${props.jobTitle} · ${props.company.name}`}
            <ExternalLinkArrow />
            <div className={styles.LinkExpander} />
          </Link>
          {props.previousJobTitles?.map((title, index) => (
            <div key={index}>{title}</div>
          ))}
        </h3>
        <div className={styles.JobDescription}>
          <Description />
        </div>
        {props.links && props.links.length > 0 && (
          <ul className={styles.LinksList}>
            {props.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className={styles.EntryLink}>
                  <LinkIcon />
                  {link.label}
                </Link>
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
