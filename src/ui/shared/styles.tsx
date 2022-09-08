import styled, { css } from "styled-components"
import NextLink from "next/link"
import { HTMLAttributeAnchorTarget } from "react"

function Link({
  href,
  label,
  target,
}: {
  href: string
  label: string
  target?: HTMLAttributeAnchorTarget
}) {
  return (
    <NextLink href={href} target={target} passHref>
      <Anchor target={target}>{label}</Anchor>
    </NextLink>
  )
}

const Heading = styled.h1`
  font-weight: 800;
  font-size: 2.25rem;
`

const Subheading = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.25rem;
  color: rgb(var(--colors-gray-11));
`

const Section = styled.section`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const TextBase = css`
  font-size: 0.95rem;
  margin-bottom: 1rem;
  color: rgb(var(--colors-gray-11));
  line-height: 1.5;
`

const Text = styled.p`
  ${TextBase}
  &:last-child {
    margin-bottom: 0;
  }
`

const Underline = styled.u`
  ${TextBase}
  text-decoration: none;
  border-bottom: 1px solid rgb(var(--colors-gray-9));
`

const Anchor = styled.a`
  ${TextBase}
  color: rgb(var(--colors-highContrast));
  text-decoration: none;
  white-space: nowrap;
  border-bottom: 1px solid rgb(var(--colors-gray-8));
  transition: border-bottom-color 0.3s ease;

  &:hover {
    border-bottom-color: rgb(var(--colors-gray-12));
  }
`

const MainColumn = styled.div`
  grid-column-start: 2;
  @media (min-width: 1280px) {
    grid-column-start: 3;
  }
`

const SharedStyles = {
  Heading,
  Subheading,
  Section,
  Text,
  Underline,
  Link,
  MainColumn,
}

export default SharedStyles
