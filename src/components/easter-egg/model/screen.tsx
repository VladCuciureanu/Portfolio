import * as THREE from "three";
import { EasterEggContext } from "../context";
import { useContext } from "react";
import { useFrame } from "@react-three/fiber";

export default function GameBoyAdvanceScreen({
  node,
  material,
}: {
  node: THREE.Mesh<any>;
  material: THREE.MeshStandardMaterial;
}) {
  const context = useContext(EasterEggContext);

  const screenMaterial: THREE.MeshStandardMaterial =
    new THREE.MeshStandardMaterial();

  const canvas = document.querySelector<HTMLCanvasElement>("#canvas");

  if (canvas) {
    screenMaterial.map = new THREE.CanvasTexture(canvas);
    screenMaterial.map.colorSpace = "srgb";
    screenMaterial.map.mapping = THREE.EquirectangularReflectionMapping;
    screenMaterial.emissiveMap = new THREE.CanvasTexture(canvas);
    screenMaterial.emissiveMap.colorSpace = "srgb";
    screenMaterial.normalMap = material.normalMap;
    screenMaterial.roughnessMap = material.roughnessMap;
  }

  useFrame(() => {
    if (screenMaterial.map) {
      screenMaterial.map.needsUpdate = true;
    }
    if (screenMaterial.emissiveMap) {
      screenMaterial.emissiveMap.needsUpdate = true;
    }
  });

  return (
    <mesh
      geometry={node.geometry}
      material={
        context.isPowered
          ? screenMaterial
          : new THREE.MeshStandardMaterial({ color: "#000" })
      }
      name="gba-screen"
      onPointerOver={() => {}}
    />
  );
}
