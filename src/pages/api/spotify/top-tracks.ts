import { getTopTracks } from "@/lib/spotify"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items
    .slice(0, 10)
    .map(
      (track: {
        artists: any[]
        external_urls: { spotify: any }
        name: any
      }) => ({
        url: track.external_urls.spotify,
        artist: track.artists
          .map((_artist: { name: any }) => _artist.name)
          .join(", "),
        title: track.name,
      }),
    )

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200",
  )

  return res.status(200).json({ tracks })
}
