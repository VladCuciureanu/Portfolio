import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import styled from "styled-components"
import FooterButton from "../button"

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
        {Light()}
      </FooterButton>
      <FooterButton
        onClick={() => setTheme("dark")}
        tooltip="Dark Mode"
        style={theme === "light" ? { background: "transparent" } : {}}
      >
        {Dark()}
      </FooterButton>
    </Container>
  )
}

const Light = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--colors-gray10)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-projection-id="107"
    >
      <circle
        cx="12"
        cy="12"
        r="5"
        data-projection-id="108"
        transform-origin="12px 12px"
        transform="none"
      ></circle>
      <g data-projection-id="109" transform-origin="12px 12px" transform="none">
        <line x1="12" y1="1" x2="12" y2="3" data-projection-id="110"></line>
        <line x1="12" y1="21" x2="12" y2="23" data-projection-id="111"></line>
        <line
          x1="4.2"
          y1="4.2"
          x2="5.6"
          y2="5.6"
          data-projection-id="112"
        ></line>
        <line
          x1="18.4"
          y1="18.4"
          x2="19.8"
          y2="19.8"
          data-projection-id="113"
        ></line>
        <line x1="1" y1="12" x2="3" y2="12" data-projection-id="114"></line>
        <line x1="21" y1="12" x2="23" y2="12" data-projection-id="115"></line>
        <line
          x1="4.2"
          y1="19.8"
          x2="5.6"
          y2="18.4"
          data-projection-id="116"
        ></line>
        <line
          x1="18.4"
          y1="5.6"
          x2="19.8"
          y2="4.2"
          data-projection-id="117"
        ></line>
      </g>
    </svg>
  )
}

const Dark = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--colors-gray10)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        transform-origin="12.019092798233032px 11.98090648651123px"
        transform="none"
      ></path>
    </svg>
  )
}

const Container = styled.div`
  top: 4px;
  position: relative;
  padding: 4px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  background-color: hsla(0, 0%, 0%, 0.125);
  box-sizing: border-box;
  border-radius: 14px;
`
