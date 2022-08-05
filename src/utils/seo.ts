import { createOgImage } from "@/utils/og"
import type { DefaultSeoProps } from "next-seo"

const title = `VLADINSKI`
const description = `JavaScript Enthusiast, Audio-Video Tinkerer, Green Haribo Bear.`
const domain = `vladinski.md`
const twitter = `@VladinskiDev`

export const seo: DefaultSeoProps = {
  title: title + " | " + description,
  description,
  openGraph: {
    title,
    type: "website",
    url: `https://${domain}`,
    site_name: title,
    images: [
      {
        url: createOgImage({ title: title, description: description }),
        width: 1600,
        height: 836,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: twitter,
    cardType: "summary_large_image",
  },
}
