"use client";
import { useEffect, useRef } from "react";
import styles from "./index.module.scss";

export default function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement>();

  const mouseOverHandler = (event: MouseEvent) => {
    if (spotlightRef.current) {
      const xCoord = (event.clientX / window.innerWidth) * 100;
      const yCoord = (event.clientY / window.innerHeight) * 100;
      console.log({ xCoord, yCoord });
      spotlightRef.current.style.setProperty("--x-coord", `${xCoord}%`);
      spotlightRef.current.style.setProperty("--y-coord", `${yCoord}%`);
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
