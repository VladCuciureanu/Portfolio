import { allJobs } from "contentlayer/generated";
import HomeContentExperienceEntry from "./Entry";
import styles from "./index.module.scss";
import LinkArrow from "@/assets/graphics/LinkArrow";
import Link from "next/link";

const jobs = allJobs.sort(
  (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
);

export default function HomeContentExperience() {
  return (
    <div>
      <ol className={styles.Container}>
        {jobs.map((job, index) => (
          <HomeContentExperienceEntry
            key={index}
            startDate={new Date(job.startDate)}
            endDate={job.endDate ? new Date(job.endDate!) : undefined}
            jobTitle={job.title}
            previousJobTitles={job.previousTitles}
            description={job.body.code}
            company={job.company}
            links={job.links}
            tags={job.tags}
          />
        ))}
      </ol>
      <Link className={styles.ViewMore} href="/resume" target="_blank">
        <span>View Full Résumé</span> <LinkArrow />
      </Link>
    </div>
  );
}
