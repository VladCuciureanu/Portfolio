import { default as Link } from "./link"
import Styles, { FooterIcons } from "./styles"
import ThemeToggle from "./theme-toggle"

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Link tooltip="Lyra" href="https://github.com/VladCuciureanu/Lyra">
          <FooterIcons.LyraIcon />
        </Link>
        <Link tooltip="Hymn" href="https://github.com/VladCuciureanu/Hymn">
          <FooterIcons.HymnIcon />
        </Link>
        <Divider />
        <Link tooltip="Home" href="/">
          <FooterIcons.HomeIcon />
        </Link>
        <Link tooltip="Projects" href="/projects">
          <FooterIcons.ProjectsIcon />
        </Link>
        <Divider />
        <Link tooltip="Github" href="/github">
          <FooterIcons.GithubIcon />
        </Link>
        <Link tooltip="Mail" href="mailto:dev@vladinski.md">
          <FooterIcons.MailIcon />
        </Link>
        <Link tooltip="Twitter" href="/twitter">
          <FooterIcons.TwitterIcon />
        </Link>
        <Link tooltip="LinkedIn" href="/linkedin">
          <FooterIcons.LinkedInIcon />
        </Link>
        <Divider />
        <ThemeToggle />
      </Wrapper>
    </Container>
  )
}

const Divider = Styles.Divider
const Wrapper = Styles.Wrapper
const Container = Styles.Container
