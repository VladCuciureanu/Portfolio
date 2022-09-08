import { HTMLAttributes, ReactNode } from "react"
import styled from "styled-components"

type HeaderButtonProps = HTMLAttributes<HTMLButtonElement> & {}

export default function HeaderButton(props: HeaderButtonProps) {
  return <Button {...props}>{props.children}</Button>
}

const Button = styled.button`
  border: 1px solid red;
  border: 0;
  border-radius: calc(var(--radii-2) - 0.15rem);
  background-color: transparent;
  padding: 0.4rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  z-index: 1;
  transition: background 0.35s ease, color 0.35s ease, stroke 0.35s ease;
  color: rgba(var(--colors-gray-11), 0.5);
  stroke: rgba(var(--colors-gray-11), 0.5);

  &:hover {
    color: rgba(var(--colors-gray-12), 1);
    background: rgba(var(--colors-gray-12), 0.1);
    stroke: rgba(var(--colors-gray-12), 1);
  }

  &.active {
    color: rgba(var(--colors-gray-12), 1);
    background: rgba(var(--colors-gray-12), 0.1);
    stroke: rgba(var(--colors-gray-12), 1);
  }

  &:active {
    transform: scale(0.95);
  }
`
