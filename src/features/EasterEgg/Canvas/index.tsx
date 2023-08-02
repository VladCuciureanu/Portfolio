"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import GameBoyAdvanceSP from "../Model";
import styles from "./index.module.scss";

export default function EasterEggCanvas() {
  return (
    <>
      <Canvas
        className={styles.Canvas}
        camera={{
          position: [2, -2, 0],
        }}
      >
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <group rotation={[0, 0, -Math.PI / 3.5]} position={[0, 0, 0]}>
            <GameBoyAdvanceSP />
          </group>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
          minAzimuthAngle={-Math.PI / 8}
          maxAzimuthAngle={(Math.PI / 8) * 9}
          makeDefault
        />
        {/* <Perf position="top-left" /> */}
      </Canvas>
      <canvas id="canvas" className={styles.OffscreenCanvas} />
    </>
  );
}
