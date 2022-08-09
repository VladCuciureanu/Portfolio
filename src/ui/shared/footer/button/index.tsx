import { MouseEventHandler } from "react"
import { CSSProperties } from "styled-components"
import { default as Styles } from "../styles"

type FooterButtonProps = {
  tooltip: string
  children: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  style?: CSSProperties
}

export default function FooterButton(props: FooterButtonProps) {
  return (
    <FooterElement as="button" onClick={props.onClick} style={props.style}>
      {props.children}
    </FooterElement>
  )
}

const FooterElement = Styles.FooterElement
