"use client";
import { useEffect, useState } from "react";
import Link from "./Link";
import cn from "@/utils/class-names";
import styles from "./index.module.scss";
import linkStyles from "./Link/index.module.scss";
import HouseIcon from "@/assets/graphics/HouseIcon";
import FlaskIcon from "@/assets/graphics/FlaskIcon";
import GitHubIcon from "@/assets/graphics/GitHubIcon";
import FaithSoftwareIcon from "@/assets/graphics/FaithSoftwareIcon";
import { useTheme } from "next-themes";
import MoonIcon from "@/assets/graphics/MoonIcon";
import SunIcon from "@/assets/graphics/SunIcon";

export default function Header() {
  const [shouldBlur, setShouldBlur] = useState(false);

  const { theme, setTheme } = useTheme();

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
        <Link href="/">
          <HouseIcon />
        </Link>
        <div className={styles.RightGroup}>
          <Link href="/projects">
            <FlaskIcon />
          </Link>
          <div />
          <Link href="https://faith.software">
            <FaithSoftwareIcon />
          </Link>
          <Link href="https://github.com/VladCuciureanu">
            <GitHubIcon />
          </Link>
          <div />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={linkStyles.Link}
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </nav>
      <div className={styles.Divider} />
    </header>
  );
}
