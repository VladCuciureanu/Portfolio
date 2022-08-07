import { getTopArtists } from "@/lib/spotify"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await getTopArtists()
  const { items } = await response.json()

  const artists = items
    .slice(0, 3)
    .map((artist: { external_urls: { spotify: any }; name: any }) => ({
      url: artist.external_urls.spotify,
      name: artist.name,
    }))

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1800, stale-while-revalidate=1800",
  )

  return res.status(200).json({ artists })
}
