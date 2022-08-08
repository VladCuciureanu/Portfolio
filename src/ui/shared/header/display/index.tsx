import useSwr from "swr"
import fetcher from "@/lib/fetcher"
import { NowPlayingSong } from "@/lib/spotify/types"
import { default as Clock } from "./clock"
import { default as Country } from "./country"
import { default as NowPlaying } from "./now-playing"
import { default as Styles } from "./styles"
import { useEffect, useState } from "react"

type HeaderDisplayProps = {
  id?: string
  tabIndex?: number
  onChange?: Function
  key?: string
}

export default function HeaderDisplay(props: HeaderDisplayProps) {
  const { data } = useSwr<NowPlayingSong>("/api/spotify/now-playing", fetcher, {
    refreshInterval: 30000,
  })

  useEffect(() => {
    const onChange = props.onChange ? props.onChange : () => {}
    onChange()
  }, [data, props.onChange])

  return (
    <Container id={props.id} tabIndex={props.tabIndex} key={props.key}>
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
