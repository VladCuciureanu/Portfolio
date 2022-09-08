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
  width: min(640px, 100%);
  margin: auto;
  margin-top: 2rem;
  min-height: 2.75rem;
  padding: 0.45rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`
