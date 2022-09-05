import { default as NextLink } from "next/link"
import { HTMLAttributeAnchorTarget } from "react"
import styled from "styled-components"

export default function Link(props: {
  label: string
  href: string
  target?: HTMLAttributeAnchorTarget
}) {
  return (
    <NextLink href={props.href} passHref>
      <Anchor>{props.label}</Anchor>
    </NextLink>
  )
}

const Anchor = styled.a`
  text-decoration: none;
  color: var(--colors-gray12);
  font-weight: 500;
  border-bottom: 1px solid var(--colors-gray6);
  padding-bottom: 4px;
  transition: border-color 150ms ease;
  display: inline-block;
  line-height: 1em;
  display: inline-flex;
  flex-direction: row;
  margin-left: 1px;
  margin-right: 1px;

  &:hover {
    border-color: var(--colors-gray8);
  }
`
