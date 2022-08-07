import { default as LinkWrapper } from "./link-wrapper"

const LyraLink = (
  <LinkWrapper
    label="Lyra"
    href="https://github.com/VladCuciureanu/Lyra"
    target="_blank"
  />
)
const HymnLink = (
  <LinkWrapper
    label="Hymn"
    href="https://github.com/VladCuciureanu/Hymn"
    target="_blank"
  />
)
const CloudflightLink = (
  <LinkWrapper
    label="Cloudflight"
    href="https://cloudflight.io"
    target="_blank"
  />
)

const IndexConstants = {
  LyraLink: LyraLink,
  HymnLink: HymnLink,
  CloudflightLink: CloudflightLink,
}

export default IndexConstants
