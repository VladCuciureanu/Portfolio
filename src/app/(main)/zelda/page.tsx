import LinkArrow from "@/assets/graphics/LinkArrow";
import EasterEgg from "@/features/EasterEgg";
import ProjectsTable from "@/features/Projects/Table";
import ThemeSwitcher from "@/features/Shared/Shell/ThemeSwitcher";
import { generateMetadata } from "@/libs/seo";
import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.scss";

export const metadata: Metadata = generateMetadata({
  title: "???",
  description: "I'm so hungry, I could eat an octorock!",
  meta: "Yahaha! You found me!",
});

export default function ZeldaPage() {
  return (
    <div className={styles.Container}>
      <Link href={"/"} className={styles.HomePageLink}>
        <LinkArrow />
        Vlad Cuciureanu
      </Link>
      <h1 className={styles.Title}>Easter Egg</h1>
      <EasterEgg />
      <ThemeSwitcher
        style={{ position: "fixed", zIndex: 30, bottom: "1rem", left: "1rem" }}
      />
    </div>
  );
}
