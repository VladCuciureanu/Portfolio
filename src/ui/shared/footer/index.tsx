import { AnimatePresence } from "framer-motion"
import Dock from "./dock"

export default function Footer() {
  return (
    <AnimatePresence>
      <Dock />
    </AnimatePresence>
  )
}
