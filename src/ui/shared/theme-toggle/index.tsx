import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

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
    return null
  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme}
    </button>
  )
}
