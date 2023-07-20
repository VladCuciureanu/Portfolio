"use client";
import { useEffect, useRef } from "react";
import styles from "./index.module.scss";

export default function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement>();

  const mouseOverHandler = (event: MouseEvent) => {
    if (spotlightRef.current) {
      const xCoord = event.pageX;
      const yCoord = event.pageY;
      spotlightRef.current.style.setProperty("--x-coord", `${xCoord}px`);
      spotlightRef.current.style.setProperty("--y-coord", `${yCoord}px`);
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
