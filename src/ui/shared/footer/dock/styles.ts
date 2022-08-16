import { motion } from "framer-motion"
import styled from "styled-components"

const Container = styled(motion.footer)`
  display: flex;
  align-items: flex-end;
  width: auto;
  height: 70px;
  padding: 8px;
  margin: 0 auto;
  background: var(--colors-dock-bg);
  backdrop-filter: blur(100px) saturate(400%) brightness(100%);
  border: 1px solid var(--colors-grayA4);
  border-radius: 20px;
  box-shadow: var(--shadows-large);

  z-index: 10;
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate(-51.75%, 0);

  @media (max-width: 720px) {
    max-width: calc(100% - 64px);
    height: 72px;
  }
`

const Slider = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
  overflow: auto hidden;
  @media (max-width: 720px) {
    padding-bottom: 10px;
    transform: translateY(8px);
  }
`

const Divider = styled.div`
  margin: 0px 4px;
  border: 0px;
  width: 1px;
  height: 48px;
  background: var(--colors-grayA4);
  flex-shrink: 0;
`

const DockStyles = {
  Container,
  Slider,
  Divider,
}

export default DockStyles
