"use client";
import MoonIcon from "@/assets/graphics/MoonIcon";
import SunIcon from "@/assets/graphics/SunIcon";
import { useTheme } from "next-themes";
import linkStyles from "../Link/index.module.scss";
import { useEffect, useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function HeaderThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className={linkStyles.Link}></button>;
  }

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={linkStyles.Link}
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={linkStyles.Tooltip} sideOffset={5}>
            Switch Theme
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
