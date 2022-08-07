import React, { Fragment, useEffect, useState, useRef } from "react"
import styled from "styled-components"

type MarqueeProps = {
  style?: React.CSSProperties
  className?: string
  play?: boolean
  pauseOnHover?: boolean
  pauseOnClick?: boolean
  direction?: "left" | "right"
  speed?: number
  delay?: number
  loop?: number
  onFinish?: () => void
  onCycleComplete?: () => void
  children?: React.ReactNode
}

export default function Marquee({
  style = {},
  className = "",
  play = true,
  pauseOnHover = false,
  pauseOnClick = false,
  direction = "left",
  speed = 20,
  delay = 0,
  loop = 0,
  onFinish,
  onCycleComplete,
  children,
}: MarqueeProps) {
  const [containerWidth, setContainerWidth] = useState(0)
  const [marqueeWidth, setMarqueeWidth] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isMounted) return

    const calculateWidth = () => {
      if (marqueeRef.current && containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width)
        setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width)
      }
    }

    calculateWidth()
    window.addEventListener("resize", calculateWidth)
    return () => {
      window.removeEventListener("resize", calculateWidth)
    }
  }, [isMounted])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const duration =
    marqueeWidth < containerWidth
      ? containerWidth / speed
      : marqueeWidth / speed

  return (
    <Fragment>
      {!isMounted ? null : (
        <Container
          ref={containerRef}
          style={{
            ...style,
            ["--pause-on-hover" as string]: pauseOnHover ? "paused" : "running",
            ["--pause-on-click" as string]: pauseOnClick ? "paused" : "running",
          }}
          className={className}
        >
          <Wrapper
            ref={marqueeRef}
            style={{
              ["--play" as string]: play ? "running" : "paused",
              ["--direction" as string]:
                direction === "left" ? "normal" : "reverse",
              ["--duration" as string]: `${duration}s`,
              ["--delay" as string]: `${delay}s`,
              ["--iteration-count" as string]: !!loop ? `${loop}` : "infinite",
            }}
            onAnimationIteration={onCycleComplete}
            onAnimationEnd={onFinish}
          >
            {children}
          </Wrapper>
          <Wrapper
            style={{
              ["--play" as string]: play ? "running" : "paused",
              ["--direction" as string]:
                direction === "left" ? "normal" : "reverse",
              ["--duration" as string]: `${duration}s`,
              ["--delay" as string]: `${delay}s`,
              ["--iteration-count" as string]: !!loop ? `${loop}` : "infinite",
            }}
            aria-hidden="true"
          >
            {children}
          </Wrapper>
        </Container>
      )}
    </Fragment>
  )
}

const Container = styled.div`
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: 100%;

  &:hover div {
    animation-play-state: var(--pause-on-hover);
  }

  &:active div {
    animation-play-state: var(--pause-on-click);
  }
`

const Wrapper = styled.div`
  flex: 0 0 auto;
  min-width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`
