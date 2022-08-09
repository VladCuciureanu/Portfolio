import { useRouter } from "next/router"
import styled from "styled-components"
import { default as Button } from "./button"
import ThemeToggle from "./theme-toggle"

export default function Footer() {
  const router = useRouter()

  return (
    <Container>
      <Wrapper>
        <Button tooltip="Lyra" onClick={() => router.push("")}>
          Lyra
        </Button>
        <Button tooltip="Hymn">Hymn</Button>
        <Divider />
        <Button tooltip="Home" onClick={() => router.push("/")}>
          Home
        </Button>
        <Button tooltip="Projects" onClick={() => router.push("/projects")}>
          Projects
        </Button>
        <Divider />
        <Button tooltip="Github">Github</Button>
        <Button tooltip="Mail">Mail</Button>
        <Button tooltip="Twitter">Twitter</Button>
        <Button tooltip="LinkedIn">LinkedIn</Button>
        <Divider />
        <ThemeToggle />
      </Wrapper>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  align-items: flex-end;
  width: auto;
  height: 70px;
  padding-left: 10px;
  padding-right: 10px;
  position: fixed;
  bottom: -8px;
  background: var(--colors-dock-bg);
  box-shadow: var(--shadows-large);
  backdrop-filter: blur(100px) saturate(400%) brightness(100%);
  border: 1px solid var(--colors-grayA4);
  left: 50%;
  border-radius: 20px;
  opacity: 0;
  z-index: 10;
  transform: translate(-50%, -50%) translateY(64px);
  animation: 500ms ease 200ms 1 normal forwards running dock;

  @keyframes dock {
    0% {
      transform: translate(-50%, -50%) translateY(64px);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%) translateY(0);
      opacity: 1;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
`

const Divider = styled.div`
  margin: 0px 4px;
  border: 0px;
  width: 1px;
  height: 48px;
  background: var(--colors-grayA4);
  flex-shrink: 0;
`
