import { NowPlayingSong } from "@/lib/spotify/types"
import Link from "next/link"
import styled from "styled-components"
import UnstyledSpotifyIcon from "/public/assets/graphics/spotify.svg"
import { default as Styles } from "../styles"

export default function HeaderNowPlaying(props: { data?: NowPlayingSong }) {
  if (!props.data?.url) {
    return (
      <NowPlayingContainer>
        <SpotifyIcon />
        <Text>Currently not listening to anything.</Text>
      </NowPlayingContainer>
    )
  }

  return (
    <Link href={props.data?.url} passHref>
      <Gray as="a" target="_blank">
        <NowPlayingContainer>
          <SpotifyIcon />
          {props.data.title}
          {` - `}
          {props.data?.artist}
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
