import Link from "next/link";
import styles from "./index.module.scss";

export default function HomeContentBio() {
  return (
    <div className={styles.ProseBlock}>
      <p>
        Since before I can remember, I loved anything tech. I would spend hours
        exploring the depths of my father&apos;s desktop, trying to figure out
        how the games I used to play and Windows (the operating system)
        functioned. Lost count of how many times I bricked the system.
      </p>
      <p>
        Fast-forward a few years, at 16 years old, I got my first internship at{" "}
        <Link href="https://assist-software.net" target="_blank">
          a small corporation
        </Link>{" "}
        as a C++ game engine developer . Several years later, I transitioned to
        full-stack web development, working on various stacks until landing on
        React and Express, alongside Typescript.
      </p>
      <p>
        My main focus these days is building web products as a contractor at{" "}
        <Link href="https://faith.software" target="_blank">
          Faith
        </Link>
        . In my free time I&apos;m also working on various personal projects.{" "}
        <Link href="#projects">Check them out below ↓</Link>
      </p>
      <p>
        When I&apos;m not at the computer, I&apos;m usually hanging out with my
        wife, enjoying a cold brew tonic, or studying audio synthesis.
      </p>
    </div>
  );
}
