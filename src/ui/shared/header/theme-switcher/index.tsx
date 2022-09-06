import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  if (!mounted) {
    return <button>Unmounted</button>
  }

  return (
    <button onClick={toggleTheme}>{theme === "dark" ? "light" : "dark"}</button>
  )
}
