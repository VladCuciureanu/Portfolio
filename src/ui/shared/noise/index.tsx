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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  isolation: isolate;
  mix-blend-mode: soft-light;
`
