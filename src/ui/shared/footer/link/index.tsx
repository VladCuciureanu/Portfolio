import Link from "next/link"
import { HTMLAttributeAnchorTarget, ReactNode } from "react"
import styled from "styled-components"

type FooterLinkProps = {
  href: string
  target?: HTMLAttributeAnchorTarget
  children?: ReactNode
}

export default function FooterLink(props: FooterLinkProps) {
  const { href, target, children } = props
  return (
    <Link href={href} target={target} passHref>
      <Anchor target={target}>{children}</Anchor>
    </Link>
  )
}

const Anchor = styled.a`
  font-size: 0.9rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: var(--colors-gray8);
  border-bottom: 1px solid;
  border-bottom-color: transparent;
  transition: color 0.25s ease, border-bottom-color 0.25s ease;
  &:hover {
    color: var(--colors-fg);
    border-bottom-color: var(--colors-gray10);
  }
`
