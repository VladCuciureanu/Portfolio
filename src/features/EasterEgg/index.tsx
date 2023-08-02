"use client";
import React, { Suspense, useLayoutEffect, useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GameBoyAdvanceSP from "./Model";
import styles from "./index.module.scss";
import EasterEggProvider from "./Context";
import { Box3, Vector3 } from "three";

export default function GameBoy() {
  const [, width] = useWindowSize();

  const box = new Box3();
  box.setFromCenterAndSize(new Vector3(1, 1, 1), new Vector3(2, 1, 3));

  return (
    <EasterEggProvider>
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
    </EasterEggProvider>
  );
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerHeight, window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
