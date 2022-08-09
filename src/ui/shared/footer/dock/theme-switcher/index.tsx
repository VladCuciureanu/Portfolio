import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { IconDarkTheme, IconLightTheme } from "../icons"
import DockItem from "../item"

type ThemeSwitcherProps = {
  mouseX: number | undefined
}

export default function ThemeSwitcher(props: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  if (!mounted) {
    return <DockItem mouseX={undefined} icon={undefined} />
  }

  return (
    <DockItem
      mouseX={props.mouseX}
      icon={theme === "light" ? <IconLightTheme /> : <IconDarkTheme />}
      onClick={toggleTheme}
    />
  )
}
