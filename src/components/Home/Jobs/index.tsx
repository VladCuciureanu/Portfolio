import { Job, allJobs } from "contentlayer/generated";
import Entry from "./Entry";
import LinkArrow from "@/assets/graphics/LinkArrow";
import Link from "next/link";
import styles from "./index.module.scss";

export default function HomeJobsList({ data }: { data: Job[] }) {
  return (
    <div>
      <ol className={styles.Container}>
        {data.map((job, index) => (
          <Entry key={index} data={job} />
        ))}
      </ol>
      <Link className={styles.ViewMore} href="/resume" target="_blank">
        <span>View Full Résumé</span> <LinkArrow />
      </Link>
    </div>
  );
}
