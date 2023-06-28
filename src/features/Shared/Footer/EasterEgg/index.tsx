"use client";

import RupeeIcon from "@/assets/graphics/RupeeIcon";
import Link from "next/link";
import styles from "./index.module.scss";
import { useState } from "react";

export default function EasterEgg() {
  const [hoverColor, setHoverColor] = useState<string | undefined>(undefined);

  const handleMouseEnter = () => {
    const colors = ["red", "blue", "green", "gold", "silver"];
    setHoverColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  const handleMouseLeave = () => {
    setHoverColor(undefined);
  };

  return (
    <Link
      href="/zelda"
      className={styles.Link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ color: hoverColor }}
    >
      <RupeeIcon style={{ minHeight: 20 }} />
    </Link>
  );
}
