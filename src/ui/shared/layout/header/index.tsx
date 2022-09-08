import styled from "styled-components"
import Glass from "../../glass"
import HeaderLink from "./link"
import ThemeSwitcher from "./theme-switcher"

export default function Header() {
  return (
    <Container enableStaticGlare>
      <Flexbox>
        <HeaderLink href="/" label="Home" />
        <HeaderLink href="/projects" label="Projects" />
        <HeaderLink href="/posts" label="Posts" />
        <HeaderLink href="/resume" label="Resume" />
        <HeaderLink href="/about" label="About" />
      </Flexbox>
      <Flexbox>
        <ThemeSwitcher />
      </Flexbox>
    </Container>
  )
}

const Container = styled(Glass)`
  position: absolute;
  top: 2rem;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(640px, 100%);
  height: 2.75rem;
  margin: auto;
  padding: 0.45rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`
