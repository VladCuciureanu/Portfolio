import Styles from "./styles"
import Link from "./link"
import NowPlaying from "./now-playing"

export default function Footer() {
  return (
    <Container>
      <Navigation>
        <Group>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/posts">Posts</Link>
        </Group>
        <Group>
          <Link href="/github" target={"_blank"}>
            GitHub
          </Link>
          <Link href="/twitter" target={"_blank"}>
            Twitter
          </Link>
          <Link href="mailto:dev@vladinski.md">Mail</Link>
        </Group>
      </Navigation>
      <Footnote>
        <NowPlaying />
        <Vercel />
      </Footnote>
    </Container>
  )
}

const Container = Styles.Container
const Group = Styles.Group
const Footnote = Styles.Footnote
const Navigation = Styles.Navigation
const Vercel = Styles.Vercel
