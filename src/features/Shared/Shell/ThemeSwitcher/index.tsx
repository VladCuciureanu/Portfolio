"use client";
import { useTheme } from "next-themes";
import styles from "./index.module.scss";
import MoonIcon from "@/assets/graphics/MoonIcon";
import SunIcon from "@/assets/graphics/SunIcon";
import DesktopIcon from "@/assets/graphics/DesktopIcon";
import { CSSProperties, useEffect, useState } from "react";

export default function ThemeSwitcher({ style }: { style?: CSSProperties }) {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className={styles.Button}>Loading...</button>;
  }

  return (
    <button className={styles.Button} onClick={toggleTheme} style={style}>
      {theme === "dark" && <MoonIcon />}
      {theme === "light" && <SunIcon />}
      {theme === "system" && <DesktopIcon />}
    </button>
  );
}
