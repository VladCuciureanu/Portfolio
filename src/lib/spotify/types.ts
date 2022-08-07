export type Song = {
  url: string
  artist: string
  title: string
}

export type Artist = {
  url: string
  name: string
}

export type NowPlayingSong = {
  title: string
  url: string
  artist: string
  album: string
  isPlaying: boolean
  albumImageUrl: string
}
