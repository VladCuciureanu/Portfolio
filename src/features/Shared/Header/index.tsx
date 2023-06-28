"use client";
import { useEffect, useState } from "react";
import Link from "./Link";
import cn from "@/utils/class-names";
import styles from "./index.module.scss";
import HouseIcon from "@/assets/graphics/HouseIcon";
import FlaskIcon from "@/assets/graphics/FlaskIcon";
import GitHubIcon from "@/assets/graphics/GitHubIcon";
import FaithSoftwareIcon from "@/assets/graphics/FaithSoftwareIcon";
import ThemeSwitcher from "./ThemeSwitcher";
import DocumentIcon from "@/assets/graphics/DocumentIcon";

export default function Header() {
  const [shouldBlur, setShouldBlur] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setShouldBlur(window.scrollY > 40);
  };

  const classNames = shouldBlur
    ? cn(styles.Container, styles.BlurredContainer)
    : styles.Container;

  return (
    <header className={classNames}>
      <nav className={styles.Nav}>
        <Link href="/" tooltip="Home">
          <HouseIcon />
        </Link>
        <div className={styles.RightGroup}>
          <Link href="/projects" tooltip="Projects">
            <FlaskIcon />
          </Link>
          <Link href="/resume" tooltip="Resume">
            <DocumentIcon />
          </Link>
          <div />
          <Link href="https://faith.software" tooltip="Faith Software">
            <FaithSoftwareIcon />
          </Link>
          <Link href="https://github.com/VladCuciureanu" tooltip="GitHub">
            <GitHubIcon />
          </Link>
          <div />
          <ThemeSwitcher />
        </div>
      </nav>
      <div className={styles.Divider} />
    </header>
  );
}
