import { AnimatePresence, motion } from "framer-motion"
import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import { default as Display } from "./display"
import Marquee from "../../shared/marquee"

export default function IndexHeader() {
  const [mounted, setMounted] = useState(false)
  const [overflowing, setOverflowing] = useState(false)

  const checkOverflowing = useCallback(() => {
    const container = document.getElementById("main-container")
    const display = document.getElementById("display-measure")

    if (!container || !display || !mounted) {
      setOverflowing(false)
      return
    }
    setOverflowing(container.scrollWidth < display.scrollWidth)
    return
  }, [mounted])

  useEffect(() => {
    setMounted(true)
    window.addEventListener("resize", checkOverflowing)
  }, [checkOverflowing])

  if (!mounted) {
    return <></>
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
  }

  return (
    <Container
      initial="hidden"
      animate="enter"
      variants={containerVariants}
      transition={{ delay: 0.75, type: "linear", duration: 0.75 }}
    >
      <InvisibleContainer>
        <Display
          id="display-measure"
          tabIndex={-1}
          onChange={() => checkOverflowing()}
        />
      </InvisibleContainer>
      <AnimatePresence exitBeforeEnter>
        {overflowing ? (
          <Marquee speed={12.5}>
            <Display />
            <Spacer />
            <Display />
            <Spacer />
          </Marquee>
        ) : (
          <Display />
        )}
      </AnimatePresence>
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
  display: flex;
`

const Spacer = styled.div`
  margin-left: var(--space-4);
  margin-right: var(--space-4);
`

const InvisibleContainer = styled.div`
  position: absolute;
  left: -10000px;
  top: auto;
  max-height: 1px;
  overflow: hidden;
`
