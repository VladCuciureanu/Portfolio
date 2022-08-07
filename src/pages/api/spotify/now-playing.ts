import { getNowPlaying } from "@/lib/spotify"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const song = await response.json()

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false })
  }

  const title = song.item.name
  const url = song.item.external_urls.spotify
  const artist = song.item.artists
    .map((_artist: { name: any }) => _artist.name)
    .join(", ")
  const isPlaying = song.is_playing
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30",
  )

  return res.status(200).json({
    title,
    url,
    artist,
    isPlaying,
    album,
    albumImageUrl,
  })
}
