import FaithSoftwareIcon from "@/assets/graphics/FaithSoftwareIcon";
import GitHubIcon from "@/assets/graphics/GitHubIcon";
import LinkedInIcon from "@/assets/graphics/LinkedInIcon";
import MailIcon from "@/assets/graphics/MailIcon";
import Link from "next/link";
import styles from "./index.module.scss";
import ThemeSwitcher from "../../Shared/Shell/ThemeSwitcher";

export default function HomePageHeader() {
  return (
    <header className={styles.Header}>
      <div className={styles.Bio}>
        <h1>
          <Link href="/">Vlad Cuciureanu</Link>
        </h1>
        <h2>
          Full-Stack Dev at{" "}
          <Link href="https://faith.software" target="_blank">
            <FaithSoftwareIcon /> Faith
          </Link>
        </h2>
        <p>I like to make things.</p>
        <nav></nav>
      </div>
      <ul className={styles.Links} aria-label="Links">
        <li>
          <Link href={"mailto:vlad.cuciureanu@pm.me"}>
            <MailIcon />
          </Link>
        </li>
        <li>
          <Link href={"https://github.com/VladCuciureanu"}>
            <GitHubIcon />
          </Link>
        </li>
        <li>
          <Link href={"https://www.linkedin.com/in/VladCuciureanu"}>
            <LinkedInIcon />
          </Link>
        </li>
        <li className={styles.LinksDivider} />
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </header>
  );
}
