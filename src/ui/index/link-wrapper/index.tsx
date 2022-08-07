import Link from "next/link"
import { HTMLAttributeAnchorTarget } from "react"
import { default as Styles } from "../styles"

export default function IndexLinkWrapper(props: {
  label: string
  href: string
  target?: HTMLAttributeAnchorTarget
}) {
  return (
    <Link href={props.href} passHref>
      <Anchor>{props.label}</Anchor>
    </Link>
  )
}

const Anchor = Styles.Anchor
