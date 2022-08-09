import { MouseEventHandler } from "react"
import styled, { CSSProperties } from "styled-components"

type FooterButtonProps = {
  tooltip: string
  children: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  style?: CSSProperties
}

export default function FooterButton(props: FooterButtonProps) {
  return (
    <Button onClick={props.onClick} style={props.style}>
      {props.children}
    </Button>
  )
}

const Button = styled.button`
  transform: none;
  cursor: pointer;
  flex-shrink: 0;
  background-image: linear-gradient(
    45deg,
    var(--colors-dock-button-color-1),
    var(--colors-dock-button-color-2),
    var(--colors-dock-button-color-1),
    var(--colors-dock-button-color-2)
  );
  background-size: 200% 100%;
  border: 0px;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 23%;
  position: relative;
  color: var(--colors-gray10);
  ---focusColor: var(--colors-gray7);
  font-family: var(--fonts-body);
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.075);
  }

  & * {
    width: 24px;
    height: 24px;
  }
`
