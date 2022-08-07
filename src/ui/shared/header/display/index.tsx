import useSwr from "swr"
import fetcher from "@/lib/fetcher"
import { NowPlayingSong } from "@/lib/spotify/types"
import { default as Clock } from "./clock"
import { default as Country } from "./country"
import { default as NowPlaying } from "./now-playing"
import { default as Styles } from "./styles"

type HeaderDisplayProps = {
  ref?: any
}

export default function HeaderDisplay(props: HeaderDisplayProps) {
  const { data } = useSwr<NowPlayingSong>("/api/spotify/now-playing", fetcher)
  return (
    <Container ref={props.ref}>
      <Clock />
      <Divider />
      <Country />
      <Divider />
      <NowPlaying data={data} />
    </Container>
  )
}

const Container = Styles.Container
const Divider = Styles.Divider
