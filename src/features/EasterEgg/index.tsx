"use client";
import React, { Suspense, useLayoutEffect, useState } from "react";
import { Environment, OrbitControls, Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GameBoyAdvanceSP from "./Model";
import styles from "./index.module.scss";
import EasterEggProvider from "./Context";
import { Perf } from "r3f-perf";

export default function GameBoy() {
  const [, width] = useWindowSize();

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
          {/* <Bounds
            fit
            clip
            observe
            damping={6}
            margin={Math.min((width / 390) * 0.6, 1)}
          > */}
          <group rotation={[0, 0, -Math.PI / 3.5]} position={[0, 0, 0]}>
            <GameBoyAdvanceSP />
          </group>
          {/* </Bounds> */}
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
          minAzimuthAngle={-Math.PI / 8}
          maxAzimuthAngle={(Math.PI / 8) * 9}
          makeDefault
        />
        <Perf position="top-left" />
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
