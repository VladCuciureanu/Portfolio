import { motion } from "framer-motion"
import styled from "styled-components"
import { default as Display } from "./display"
import Marquee from "./marquee"

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
}

export default function Header() {
  return (
    <Container
      initial="hidden"
      animate="enter"
      variants={variants}
      transition={{ delay: 0.75, type: "linear", duration: 0.75 }}
    >
      <Marquee speed={12.5}>
        <Display />
        <Spacer />
        <Display />
        <Spacer />
      </Marquee>
    </Container>
  )
}

const Container = styled(motion.header)`
  margin: 0;
  margin-bottom: 12px;
  height: 28px;
  width: 100%;
  position: relative;
  overflow: hidden;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
`

const Spacer = styled.div`
  margin-left: var(--space-4);
  margin-right: var(--space-4);
`
