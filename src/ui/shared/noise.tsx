import styled from "styled-components"

export default function NoiseFilter() {
  return (
    <Svg>
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.80"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)"></rect>
    </Svg>
  )
}

const Svg = styled.svg`
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  position: fixed;
  isolation: isolate;
  z-index: 1;
  opacity: 0.08;
  mix-blend-mode: soft-light;
`
