"use client";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { CameraControls, ScrollControls } from "@react-three/drei";
import styles from "./index.module.scss";
import MacintoshEnvironment from "./environment";
import { MacintoshProvider } from "./context";

export default function MacintoshEasterEgg() {
  const cameraControlRef = useRef<CameraControls | null>(null);

  useEffect(() => {
    document.body.style.background = "white";
  }, []);

  return (
    <MacintoshProvider cameraControlRef={cameraControlRef}>
      <Canvas
        className={styles.Canvas}
        shadows
        camera={{ position: [10, 12, 12], fov: 25 }}
      >
        <ScrollControls pages={1}>
          <MacintoshEnvironment />
        </ScrollControls>
        <CameraControls
          ref={cameraControlRef}
          makeDefault
          mouseButtons={{ left: 0, right: 0, middle: 0, wheel: 0 }}
        />
      </Canvas>
    </MacintoshProvider>
  );
}
