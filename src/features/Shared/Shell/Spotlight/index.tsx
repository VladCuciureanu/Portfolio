"use client";
import { useEffect, useRef } from "react";
import styles from "./index.module.scss";

export default function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement>();

  const mouseOverHandler = (event: MouseEvent) => {
    if (spotlightRef.current) {
      spotlightRef.current.style.setProperty("--x-coord", `${event.pageX}px`);
      spotlightRef.current.style.setProperty("--y-coord", `${event.pageY}px`);
    }
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", mouseOverHandler);

    return () => {
      document.body.removeEventListener("mousemove", mouseOverHandler);
    };
  }, []);
  return (
    <div
      ref={spotlightRef as any}
      onPointerMove={(e) => console.log(e)}
      className={styles.Spotlight}
    />
  );
}
