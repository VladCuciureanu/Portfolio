import Link from "@/components/Link";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <>
      <h1 className={styles.Title}>Vlad Cuciureanu</h1>
      <p className={styles.Job}>Full Stack Developer</p>
      <div className={styles.Divider} />
      <section className={styles.Prose}>
        <p>Hey, I&apos;m Vlad! I&apos;m a christian full-stack developer.</p>
        <p>
          I&apos;m currently self-employed at{" "}
          <Link href="https://faith.software" target="_blank">
            Faith&nbsp;Software
          </Link>
          .
        </p>
        <p>
          Before self-employment, I originally cut my teeth as a web developer
          at{" "}
          <Link href="https://cloudflight.io" target="_blank">
            Cloudflight
          </Link>
          , where I spent four years building multiple distributed web
          solutions.
        </p>
        <p>On the side, I like building tools people find useful.</p>
        <p>
          <Link href="/resume">Learn more</Link>
        </p>
      </section>
    </>
  );
}
