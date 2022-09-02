import { NowPlayingSong } from "@/lib/spotify/types"
import Link from "next/link"
import styled from "styled-components"
import UnstyledSpotifyIcon from "/public/assets/graphics/icons/spotify.svg"
import { default as Styles } from "../styles"
import fetcher from "@/lib/fetcher"
import useSwr from "swr"
import { useEffect } from "react"

type HeaderNowPlayingProps = {
  onChange?: any
}

export default function HeaderNowPlaying(props: HeaderNowPlayingProps) {
  const { data } = useSwr<NowPlayingSong>("/api/spotify/now-playing", fetcher, {
    refreshInterval: 2000,
  })

  useEffect(() => {
    const onChange = props.onChange ? props.onChange : () => {}
    onChange()
  }, [data, props.onChange])

  if (data === undefined || !data.isPlaying) {
    return (
      <NowPlayingContainer>
        <SpotifyIcon />
        <Text>Currently not listening to anything.</Text>
      </NowPlayingContainer>
    )
  }

  return (
    <Link href={data.url} passHref>
      <Gray as="a" target="_blank">
        <NowPlayingContainer>
          <SpotifyIcon />
          {data.title}
          {` - `}
          {data.artist}
        </NowPlayingContainer>
      </Gray>
    </Link>
  )
}

const NowPlayingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: inherit;

  &:hover svg path {
    fill: #1ed760;
  }
`

const SpotifyIcon = styled(UnstyledSpotifyIcon)`
  height: 11px;
  width: 11px;
  flex-shrink: 0;
  margin-bottom: 0.25px;
  & path {
    fill: var(--colors-gray10);
  }
`

const Text = Styles.Text
const Gray = Styles.Gray
