"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GameBoyAdvanceSP from "./model";
import styles from "./canvas.module.scss";
import { ComponentProps, Suspense } from "react";
import { twMerge } from "tailwind-merge";

export default function EasterEggCanvas(props: ComponentProps<"div">) {
  return (
    <Suspense fallback={<LoadingState />}>
      <Canvas
        className={twMerge(styles.Canvas, props.className)}
        camera={{
          position: [2, -2, 0],
        }}
      >
        <pointLight position={[10, 10, 10]} intensity={1} />
        <group rotation={[0, 0, -Math.PI / 3.5]} position={[0, 0, 0]}>
          <GameBoyAdvanceSP />
        </group>
        <Environment preset="city" />
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
    </Suspense>
  );
}

function LoadingState() {
  return <div className={styles.Loading}>Loading...</div>;
}
