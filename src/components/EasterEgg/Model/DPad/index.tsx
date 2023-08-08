import InteractiveMesh from "@/components/EasterEgg/InteractiveMesh";
import { OccludingMeshes } from "..";
import { EasterEggContext } from "@/components/EasterEgg/Context";
import { useContext } from "react";
import * as THREE from "three";
import { ThreeEvent } from "@react-three/fiber";
import { GameBoyAdvanceKey } from "@/libs/emulator/constants";

export default function DPadMesh({
  node,
  material,
}: {
  node: THREE.Mesh<any>;
  material: THREE.Material;
}) {
  node.geometry.center(); // Used for accurate D-Pad rotation

  const context = useContext(EasterEggContext);

  let xFactor = 0;
  let yFactor = 0;

  if (context.pressedKeys.includes(GameBoyAdvanceKey.Left)) {
    xFactor -= 1;
  }
  if (context.pressedKeys.includes(GameBoyAdvanceKey.Right)) {
    xFactor += 1;
  }
  if (context.pressedKeys.includes(GameBoyAdvanceKey.Up)) {
    yFactor -= 1;
  }
  if (context.pressedKeys.includes(GameBoyAdvanceKey.Down)) {
    yFactor += 1;
  }

  const dPadRotation = new THREE.Euler(
    (xFactor * -Math.PI) / 30,
    0,
    (yFactor * -Math.PI) / 30
  );

  const handleDPadClick = (e: ThreeEvent<MouseEvent>) => {
    let hoveredKey: GameBoyAdvanceKey | undefined = undefined;

    if (e.point.z > 0.297) {
      hoveredKey = GameBoyAdvanceKey.Left;
    } else {
      if (e.point.z < 0.205) {
        hoveredKey = GameBoyAdvanceKey.Right;
      } else {
        if (e.point.x < 0.3) {
          hoveredKey = GameBoyAdvanceKey.Up;
        } else {
          if (e.point.x > 0.357) {
            hoveredKey = GameBoyAdvanceKey.Down;
          }
        }
      }
    }

    if (hoveredKey !== undefined) {
      context.emulator?.simulateKeyDown(hoveredKey);
    }
    const pressedKeys =
      hoveredKey === undefined
        ? context.pressedKeys
        : [...context.pressedKeys, hoveredKey];
    context.setPressedKeys(pressedKeys);
  };

  const clearDPadKeys = () => {
    const dPadKeys = [
      GameBoyAdvanceKey.Up,
      GameBoyAdvanceKey.Down,
      GameBoyAdvanceKey.Left,
      GameBoyAdvanceKey.Right,
    ];
    dPadKeys.forEach((it) => context.emulator?.simulateKeyUp(it));

    context.setPressedKeys(
      context.pressedKeys.filter((it) => !dPadKeys.includes(it))
    );
  };

  return (
    <InteractiveMesh
      geometry={node.geometry}
      material={material}
      name="gba-dpad"
      occludingNames={OccludingMeshes}
      position={[0.285, 0.175, 0.26]}
      rotation={dPadRotation}
      onPointerDown={handleDPadClick}
      onPointerUp={clearDPadKeys}
    />
  );
}
