"use client";
import * as THREE from "three";
import React, { useContext } from "react";
import { ThreeEvent } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";
import InteractiveMesh from "@/components/InteractiveMesh";
import { EasterEggContext } from "../Context";
import DPadMesh from "./DPad";
import GameBoyAdvanceScreen from "./Screen";
import { GameBoyAdvanceKey } from "@/libs/emulator/constants";

export const OccludingMeshes = ["gba-body", "gba-screen"];

export default function GameBoyAdvanceSP() {
  // Load model
  const { nodes, materials } = useGLTF("/assets/models/gba.glb") as GLTFResult;

  // State management
  const context = useContext(EasterEggContext);

  // Event handling
  const handlePowerButtonClick = (e: ThreeEvent<MouseEvent>) => {
    if (e.intersections[0].object.name !== "gba-body") {
      context.setIsPowered(!context.isPowered);
    }
  };
  const handleVolumeSliderClick = (e: ThreeEvent<MouseEvent>) => {
    const steps = [100, 50, 25, 0];
    context.setVolume(
      steps[(steps.indexOf(context.volume) + 1) % steps.length]
    );
  };
  const handleButtonPointerDown = (
    e: ThreeEvent<MouseEvent>,
    k: GameBoyAdvanceKey
  ) => {
    context.emulator?.simulateKeyDown(k);
    context.setPressedKeys([...context.pressedKeys, k]);
  };
  const handleButtonPointerUp = (
    e: ThreeEvent<MouseEvent>,
    k: GameBoyAdvanceKey
  ) => {
    context.emulator?.simulateKeyUp(k);
    context.setPressedKeys(context.pressedKeys.filter((it) => it !== k));
  };

  return (
    <>
      <mesh
        geometry={nodes.gbabody.geometry}
        material={materials.gba}
        name="gba-body"
        onPointerOver={() => {}}
      />
      <GameBoyAdvanceScreen
        node={nodes.gbascreen}
        material={materials.gba_screen}
      />
      <DPadMesh node={nodes.gbabuttondpad} material={materials.gba} />
      <InteractiveMesh
        geometry={nodes.gbabuttona.geometry}
        material={materials.gba}
        name="gba-a"
        occludingNames={OccludingMeshes}
        position={
          context.pressedKeys.includes(GameBoyAdvanceKey.A) ? [0, -0.015, 0] : 0
        }
        onPointerDown={(e) => handleButtonPointerDown(e, GameBoyAdvanceKey.A)}
        onPointerUp={(e) => handleButtonPointerUp(e, GameBoyAdvanceKey.A)}
      />
      <InteractiveMesh
        geometry={nodes.gbabuttonb.geometry}
        material={materials.gba}
        name="gba-b"
        occludingNames={OccludingMeshes}
        position={
          context.pressedKeys.includes(GameBoyAdvanceKey.B) ? [0, -0.015, 0] : 0
        }
        onPointerDown={(e) => handleButtonPointerDown(e, GameBoyAdvanceKey.B)}
        onPointerUp={(e) => handleButtonPointerUp(e, GameBoyAdvanceKey.B)}
      />
      <InteractiveMesh
        geometry={nodes.gbabuttonselect.geometry}
        material={materials.gba}
        name="gba-select"
        occludingNames={OccludingMeshes}
        position={
          context.pressedKeys.includes(GameBoyAdvanceKey.Select)
            ? [0, -0.0085, 0]
            : 0
        }
        onPointerDown={(e) =>
          handleButtonPointerDown(e, GameBoyAdvanceKey.Select)
        }
        onPointerUp={(e) => handleButtonPointerUp(e, GameBoyAdvanceKey.Select)}
      />
      <InteractiveMesh
        geometry={nodes.gbabuttonstart.geometry}
        material={materials.gba}
        name="gba-start"
        occludingNames={OccludingMeshes}
        position={
          context.pressedKeys.includes(GameBoyAdvanceKey.Start)
            ? [0, -0.0085, 0]
            : 0
        }
        onPointerDown={(e) =>
          handleButtonPointerDown(e, GameBoyAdvanceKey.Start)
        }
        onPointerUp={(e) => handleButtonPointerUp(e, GameBoyAdvanceKey.Start)}
      />
      <InteractiveMesh
        geometry={nodes.gbabuttonl.geometry}
        material={materials.gba}
        name="gba-l"
        occludingNames={OccludingMeshes}
        position={
          context.pressedKeys.includes(GameBoyAdvanceKey.L) ? [0.015, 0, 0] : 0
        }
        onPointerDown={(e) => handleButtonPointerDown(e, GameBoyAdvanceKey.L)}
        onPointerUp={(e) => handleButtonPointerUp(e, GameBoyAdvanceKey.L)}
      />
      <InteractiveMesh
        geometry={nodes.gbabuttonr.geometry}
        material={materials.gba}
        name="gba-r"
        occludingNames={OccludingMeshes}
        position={
          context.pressedKeys.includes(GameBoyAdvanceKey.R) ? [0.015, 0, 0] : 0
        }
        onPointerDown={(e) => handleButtonPointerDown(e, GameBoyAdvanceKey.R)}
        onPointerUp={(e) => handleButtonPointerUp(e, GameBoyAdvanceKey.R)}
      />
      <InteractiveMesh
        geometry={nodes.gbapower.geometry}
        position={context.isPowered ? [-0.04, 0, 0] : [0, 0, 0]}
        material={materials.gba}
        name={"gba-power"}
        occludingNames={OccludingMeshes}
        onClick={handlePowerButtonClick}
      />
      <InteractiveMesh
        geometry={nodes.gbavolume.geometry}
        position={[((100 - context.volume) / 100) * 0.05, 0, 0]}
        material={materials.gba}
        name={"gba-volume"}
        occludingNames={OccludingMeshes}
        onClick={handleVolumeSliderClick}
      />
      <mesh geometry={nodes.gbaled1.geometry} material={materials.gba} />
      {context.isPowered ? (
        <mesh geometry={nodes.gbaled2.geometry} material={materials.gba} />
      ) : (
        <mesh
          geometry={nodes.gbaled1.geometry}
          position={[-0.0665, 0, 0]}
          material={materials.gba}
        />
      )}
      <mesh
        geometry={nodes.cartridge.geometry}
        material={materials.cartridge}
      />
    </>
  );
}

export type GLTFResult = GLTF & {
  nodes: {
    gbabody: THREE.Mesh;
    gbascreen: THREE.Mesh;
    gbabuttondpad: THREE.Mesh;
    gbabuttona: THREE.Mesh;
    gbabuttonb: THREE.Mesh;
    gbabuttonselect: THREE.Mesh;
    gbabuttonstart: THREE.Mesh;
    gbabuttonl: THREE.Mesh;
    gbabuttonr: THREE.Mesh;
    gbapower: THREE.Mesh;
    gbavolume: THREE.Mesh;
    gbaled1: THREE.Mesh;
    gbaled2: THREE.Mesh;
    cartridge: THREE.Mesh;
  };
  materials: {
    gba: THREE.MeshStandardMaterial;
    gba_screen: THREE.MeshStandardMaterial;
    cartridge: THREE.MeshStandardMaterial;
  };
};
