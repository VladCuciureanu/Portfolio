import Link from "next/link"
import { useRouter } from "next/router"
import { HTMLAttributeAnchorTarget } from "react"
import styled from "styled-components"
import HeaderButton from "../button"

type HeaderLinkProps = {
  label: string
  href: string
  target?: HTMLAttributeAnchorTarget
}

export default function HeaderLink({ label, href, target }: HeaderLinkProps) {
  const router = useRouter()
  return (
    <Link href={href} passHref target={target}>
      <Anchor>
        <HeaderButton className={router.route === href ? "active" : ""}>
          {label}
        </HeaderButton>
      </Anchor>
    </Link>
  )
}

const Anchor = styled.a`
  z-index: 1;
`
