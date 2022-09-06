import React, {
  HTMLAttributeAnchorTarget,
  useEffect,
  useRef,
  useState,
} from "react"
import styled from "styled-components"

export default function Header() {
  const glider = useRef() as React.MutableRefObject<HTMLDivElement>

  return (
    <Container>
      <Wrapper>
        <Glider style={{ width: "100px" }} ref={glider} />
      </Wrapper>
      <Wrapper>
        <HeaderButton label="Home" href="/" />
        <HeaderButton label="Home" href="/" />
        <ThemeSwitcher />
      </Wrapper>
    </Container>
  )
}

const Container = styled.header`
  width: min(640px, 100%);
  margin: auto;
  padding-top: 2rem;
  min-height: 4.25rem;
`

const Wrapper = styled.header`
  width: min(640px, 100%);
  min-height: 2.25rem;
  padding: 0.15rem;
  position: absolute;

  /* Maybe add glassmorphism here */
  border: 1px solid red;
  border-radius: var(--radii-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Glider = styled.div`
  background-color: blue;
  height: 1.85rem;
  border-radius: var(--radii-1);
  transition: width 0.3s ease;
  pointer-events: none;
`

import Link from "next/link"
import ThemeSwitcher from "./theme-switcher"

type HeaderButtonProps = {
  label: string
  href: string
  target?: HTMLAttributeAnchorTarget
}

function HeaderButton(props: HeaderButtonProps) {
  const { label, href, target } = props
  return (
    <Link href={href} target={target} passHref>
      <Anchor target={props.target}>{props.label}</Anchor>
    </Link>
  )
}

const Anchor = styled.a`
  padding: 0.3rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  color: var(--colors-lowContrast);
  &:hover {
    color: var(--colors-highContrast);
  }
`
