import { MeshProps, ThreeEvent } from "@react-three/fiber";
import { useState } from "react";

type InteractiveMeshProps = MeshProps & {
  occludingNames: string[];
};

export default function InteractiveMesh(props: InteractiveMeshProps) {
  const [isHovering, setIsHovering] = useState(false);

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!props.occludingNames.includes(e.intersections[0].object.name)) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
    if (props.onPointerMove) props.onPointerMove(e);
  };
  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    setIsHovering(false);
    if (props.onPointerOut) props.onPointerOut(e);
  };

  document.body.style.cursor = isHovering ? "pointer" : "auto";
  document.body.style.userSelect = isHovering ? "none" : "auto";

  return (
    <mesh
      {...props}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
    >
      {props.children}
    </mesh>
  );
}
