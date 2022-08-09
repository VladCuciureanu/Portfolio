import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import styled from "styled-components"
import FooterButton from "../button"
import { FooterIcons } from "../styles"

type ThemeToggleProps = {
  children?: React.ReactNode
}

export default function ThemeToggle(props: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <FooterButton tooltip={"Themes loading..."}>
        <></>
      </FooterButton>
    )
  }

  return (
    <Container>
      <FooterButton
        onClick={() => setTheme("light")}
        tooltip="Light Mode"
        style={theme === "dark" ? { background: "transparent" } : {}}
      >
        <FooterIcons.LightThemeIcon />
      </FooterButton>
      <FooterButton
        onClick={() => setTheme("dark")}
        tooltip="Dark Mode"
        style={theme === "light" ? { background: "transparent" } : {}}
      >
        <FooterIcons.DarkThemeIcon />
      </FooterButton>
    </Container>
  )
}

const Container = styled.div`
  top: 2.5px;
  position: relative;
  padding: 2.5px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  background-color: hsla(0, 0%, 0%, 0.125);
  box-sizing: border-box;
  border-radius: 14px;
`
