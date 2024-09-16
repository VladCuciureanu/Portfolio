"use client";

import { useEffect, useState } from "preact/hooks";
import type { CSSProperties, ComponentProps } from "react";

export function Spotlight(props: ComponentProps<"div">) {
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
      <div className="pointer-events-none fixed inset-0 -z-10 transition duration-300 bg-spotlight" />
      {props.children}
    </div>
  );
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const updateMousePosition = (ev: { clientX: any; clientY: any }) => {
      setMousePosition((last) => {
        return {
          x: ev.clientX ? ev.clientX : last.x,
          y: ev.clientY ? ev.clientY : last.y,
        };
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};
