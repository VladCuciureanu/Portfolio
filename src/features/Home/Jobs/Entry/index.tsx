import Link from "next/link";
import styles from "./index.module.scss";
import LinkIcon from "@/assets/graphics/LinkIcon";
import { useMDXComponent } from "next-contentlayer/hooks";
import ExternalLinkArrow from "@/assets/graphics/ExternalLinkArrow";
import { Job } from "contentlayer/generated";

export default function HomeJobsListEntry({ data }: { data: Job }) {
  const dateString = getJobDateString(data);

  const Description = useMDXComponent(data.body.code);

  return (
    <li className={styles.Container}>
      <div className={styles.Glass} />
      <header className={styles.Date}>{dateString}</header>
      <section className={styles.InfoWrapper}>
        <h3 className={styles.JobTitle}>
          <Link href={data.company.href} target="_blank">
            {`${data.title} · ${data.company.name}`}
            <ExternalLinkArrow />
            <div className={styles.LinkExpander} />
          </Link>
          {data.previousTitles?.map((title, index) => (
            <div key={index}>{title}</div>
          ))}
        </h3>
        <div className={styles.JobDescription}>
          <Description />
        </div>
        {data.links && data.links.length > 0 && (
          <ul className={styles.LinksList}>
            {data.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className={styles.EntryLink}>
                  <LinkIcon />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {data.tags && data.tags.length > 0 && (
          <ul className={styles.TagsList}>
            {data.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        )}
      </section>
    </li>
  );
}

function getJobDateString(job: Job) {
  let dateString;

  const startDate = new Date(job.startDate);
  const startYear = startDate.getFullYear();

  if (job.endDate) {
    const endDate = new Date(job.endDate);
    const endYear = endDate.getFullYear();

    dateString = `${startYear} — ${endYear}`;

    if (startYear === endYear) {
      const startMonth = new Intl.DateTimeFormat("en", {
        month: "short",
      }).format(startDate);
      const endMonth = new Intl.DateTimeFormat("en", { month: "short" }).format(
        endDate
      );
      dateString = `${startMonth} — ${endMonth} ${startDate.getFullYear()}`;
    }
  } else {
    dateString = `${startYear} — Present`;
  }

  return dateString;
}
