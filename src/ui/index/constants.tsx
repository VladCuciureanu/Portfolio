import { default as LinkWrapper } from "./link-wrapper"

const LyraLink = (
  <LinkWrapper label="Lyra" href="https://github.com/VladCuciureanu/Lyra" />
)
const HymnLink = (
  <LinkWrapper label="Hymn" href="https://github.com/VladCuciureanu/Hymn" />
)
const CloudflightLink = (
  <LinkWrapper label="Cloudflight" href="https://cloudflight.io" />
)

const IndexConstants = {
  LyraLink: LyraLink,
  HymnLink: HymnLink,
  CloudflightLink: CloudflightLink,
}

export default IndexConstants
