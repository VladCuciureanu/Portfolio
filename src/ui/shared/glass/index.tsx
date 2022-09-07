import { ReactNode } from "react"
import styled, { CSSProperties } from "styled-components"
import Noise from "../noise"

export default function Glass(props: {
  children?: ReactNode
  style?: CSSProperties
  enableStaticGlare?: boolean
}) {
  return (
    <GlassPane
      style={props.style}
      className={props.enableStaticGlare ? "glare" : ""}
    >
      <Noise opacity={0.115} />
      {props.children}
    </GlassPane>
  )
}

const GlassPane = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  backdrop-filter: blur(4px);
  border-radius: calc(var(--radii-2) + 1px);
  overflow: hidden;

  &.glare {
    background: linear-gradient(
      135deg,
      rgba(var(--colors-gray-12), 0.2),
      rgba(var(--colors-gray-11), 0.025) 85%
    );
  }

  &::before {
    position: absolute;
    padding: 2px;
    background: linear-gradient(
      135deg,
      rgba(var(--colors-gray-12), 0.3),
      rgba(var(--colors-gray-11), 0.1)
    );
    border-radius: var(--radii-2);
    content: "";
    inset: 0;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`
