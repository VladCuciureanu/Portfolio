import { useEffect, useState } from "react"
import { default as Styles } from "../styles"
import styled from "styled-components"

export default function HeaderClock() {
  const [mounted, setMounted] = useState(false)
  const [dateState, setDateState] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000)
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ClockText as="p">
      {dateState.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: "Europe/Bucharest",
      })}
    </ClockText>
  )
}

const ClockText = styled(Styles.Text)`
  display: flex;
  align-items: center;
  gap: 4px;
`
