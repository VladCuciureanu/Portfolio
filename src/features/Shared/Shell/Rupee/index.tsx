import RupeeIcon from "@/assets/graphics/RupeeIcon";
import styles from "./index.module.scss";
import Link from "next/link";
import { useRef } from "react";

const RupeeColors = ["red", "blue", "green", "silver", "gold"];

export default function RupeeEasterEgg() {
  const elementRef = useRef<HTMLElement>();

  const handlePointerEnter = () => {
    const color = RupeeColors[Math.floor(Math.random() * RupeeColors.length)];
    elementRef.current?.style.setProperty("color", color);
  };

  const handlePointerLeave = () => {
    elementRef.current?.style.setProperty("color", null);
  };

  return (
    <Link
      href="/zelda"
      className={styles.Rupee}
      ref={elementRef as any}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <RupeeIcon />
    </Link>
  );
}
