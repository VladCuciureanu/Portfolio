"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { CSSProperties, ComponentProps } from "react";

export default function Spotlight(props: ComponentProps<"div">) {
  const mousePosition = useMousePosition();

  return (
    <div
      {...props}
      className="group/spotlight relative"
      style={
        mousePosition.x && mousePosition.y
          ? ({
              "--spotlight-x": `${mousePosition.x}px`,
              "--spotlight-y": `${mousePosition.y}px`,
            } as CSSProperties)
          : undefined
      }
    >
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 bg-lightSpotlight dark:bg-darkSpotlight" />
      {props.children}
    </div>
  );
}
