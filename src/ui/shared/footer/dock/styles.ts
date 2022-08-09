import { motion } from "framer-motion"
import styled from "styled-components"

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;

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
  transform: translate(-50%, 0);
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
  Divider,
}

export default DockStyles
