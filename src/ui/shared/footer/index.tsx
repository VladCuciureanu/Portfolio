import Styles from "./styles"
import Link from "./link"

export default function Footer() {
  return (
    <Container>
      <Navigation>
        <Group>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/about">About</Link>
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
      <Note>Powered by ▲Vercel</Note>
    </Container>
  )
}

const Container = Styles.Container
const Group = Styles.Group
const Note = Styles.Note
const Navigation = Styles.Navigation
