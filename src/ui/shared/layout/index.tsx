import { motion } from "framer-motion"
import styled from "styled-components"
import Footer from "./footer"

export default function Layout(props: LayoutProps) {
  return (
    <Main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={TransitionVariants}
      transition={{ type: "linear" }}
    >
      {props.children}
      <Footer />
    </Main>
  )
}

const TransitionVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

type LayoutProps = {
  children?: React.ReactNode
}

const Main = styled(motion.main)`
  color: var(--colors-fg);
  font-size: 1rem;
  padding-top: 6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: grid;
  grid-template-columns: 1fr min(640px, 100%) 1fr;
  row-gap: 2rem;
  z-index: 10;
  position: relative;

  @media (min-width: 1280px) {
    grid-template-columns:
      1fr minmax(auto, 240px) min(640px, 100%) minmax(auto, 240px)
      1fr;
    padding-right: 0;
    padding-left: 0;
    column-gap: 2.25rem;
  }
`
