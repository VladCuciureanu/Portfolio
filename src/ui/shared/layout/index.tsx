import { motion } from "framer-motion"
import styled from "styled-components"

type LayoutProps = {
  children?: React.ReactNode
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Layout(props: LayoutProps) {
  return (
    <Main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
    >
      {props.children}
    </Main>
  )
}

const Main = styled(motion.main)`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  position: relative;
  min-height: 100vh;
  padding-left: var(--space-3);
  padding-right: var(--space-3);
  padding-top: 120px;
  padding-bottom: 120px;
  margin: 0 auto;
  @media (max-width: 720px) {
    padding-top: 40px;
  }
`
