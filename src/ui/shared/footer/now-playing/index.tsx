import fetcher from "@/lib/fetcher"
import { NowPlayingSong } from "@/lib/spotify/types"
import Link from "next/link"
import SpotifySvg from "public/assets/graphics/icons/spotify.svg"
import { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import useSwr from "swr"
import Marquee from "../../marquee"

export default function NowPlaying() {
  const [mounted, setMounted] = useState(false)
  const [overflowing, setOverflowing] = useState(false)
  const { data } = useSwr<NowPlayingSong>("/api/spotify/now-playing", fetcher, {
    refreshInterval: 2000,
  })

  const checkOverflowing = useCallback(() => {
    const container = document.getElementById("now-playing-container")
    const display = document.getElementById("now-playing-text")

    if (!container || !display || !mounted) {
      setOverflowing(false)
      return
    }
    setOverflowing(container.clientWidth < display.scrollWidth)
    return
  }, [mounted])

  useEffect(() => {
    setMounted(true)
    window.addEventListener("resize", checkOverflowing)
  }, [checkOverflowing])

  useEffect(() => {
    checkOverflowing()
  }, [checkOverflowing, data])

  if (data === undefined || !data.isPlaying) {
    return (
      <Container>
        <Icon />
        <Text>Currently not listening to anything.</Text>
      </Container>
    )
  }

  return (
    <>
      <InvisibleContainer>
        <Text id="now-playing-text">{`${data.title} - ${data.artist}`}</Text>
      </InvisibleContainer>
      <Link href={data.url} passHref>
        <Container as="a" target="_blank" id="now-playing-container">
          <Icon />
          {overflowing ? (
            <Marquee>
              <Text>{`${data.title} - ${data.artist}`}</Text>
            </Marquee>
          ) : (
            <Text>{`${data.title} - ${data.artist}`}</Text>
          )}
        </Container>
      </Link>
    </>
  )
}

const Container = styled.div`
  max-height: 1rem;
  max-width: max-content;
  margin-right: 3rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    color: var(--colors-highContrast);
    & svg path {
      fill: #1ed760;
    }
  }
`

const Icon = styled(SpotifySvg)`
  min-height: 0.9rem;
  min-width: 0.9rem;
  max-height: 0.9rem;
  max-width: 0.9rem;
  margin-right: 0.5rem;
  & path {
    transition: all 0.2s ease;
    fill: var(--colors-gray8);
  }
`

const Text = styled.p`
  max-height: 1rem;
  text-decoration: none;
  margin-bottom: 0.05rem;
`

const InvisibleContainer = styled.div`
  position: absolute;
  left: -10000px;
  top: auto;
  max-height: 1px;
  overflow: hidden;
`
