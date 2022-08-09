import Link from "next/link"
import { CSSProperties } from "styled-components"
import { default as Styles } from "../styles"

type FooterLinkProps = {
  href: string
  tooltip: string
  children: React.ReactNode
  style?: CSSProperties
}

export default function FooterLink(props: FooterLinkProps) {
  return (
    <Link href={props.href} passHref>
      <FooterElement as="a" style={props.style}>
        {props.children}
      </FooterElement>
    </Link>
  )
}

const FooterElement = Styles.FooterElement
