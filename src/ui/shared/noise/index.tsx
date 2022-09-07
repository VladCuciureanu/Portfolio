import styled from "styled-components"

export default function Noise({ opacity = 0.15 }: { opacity?: number }) {
  return (
    <Svg style={{ opacity: opacity }}>
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".80"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)"></rect>
    </Svg>
  )
}

const Svg = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  isolation: isolate;
  z-index: 1;
  mix-blend-mode: overlay;
`
