import { AnimatePresence } from "framer-motion"
import styled from "styled-components"
import Dock from "./dock"

export default function Footer() {
  return (
    <AnimatePresence>
      <Dock />
      <Note>Powered by ▲Vercel</Note>
    </AnimatePresence>
  )
}

const Note = styled.div`
  color: var(--colors-gray9);
  font-size: smaller;
  position: absolute;
  bottom: 0px;
  left: calc(50% - 80px);
`
