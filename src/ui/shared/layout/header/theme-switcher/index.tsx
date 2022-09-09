import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import HeaderButton from "../button"
import SunSvg from "public/assets/graphics/icons/sun.svg"
import MoonSvg from "public/assets/graphics/icons/moon.svg"
import styled from "styled-components"

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  if (!mounted) {
    return (
      <HeaderButton>
        <Sun style={{ opacity: 0 }} />
      </HeaderButton>
    )
  }

  return (
    <HeaderButton onClick={toggleTheme}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </HeaderButton>
  )
}

const Sun = styled(SunSvg)`
  width: 20px;
  height: 20px;
  stroke: inherit;
`

const Moon = styled(MoonSvg)`
  width: 20px;
  height: 20px;
  stroke: inherit;
`
