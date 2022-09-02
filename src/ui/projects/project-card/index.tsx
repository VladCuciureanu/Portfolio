import Link from "next/link"
import { MouseEvent, useRef } from "react"
import styled from "styled-components"

type ProjectCardProps = {
  name: string
  description: string
  creationYear: number
  href: string
  previewImageUrl?: string
}

export default function ProjectCard(props: ProjectCardProps) {
  const startPreview = (event: MouseEvent) => {
    if (props.previewImageUrl) {
      const body = document.getElementsByTagName("body")[0]
      const preview = document.createElement("img")
      preview.id = "preview-" + props.name
      preview.src = props.previewImageUrl ? props.previewImageUrl : ""
      preview.alt = "Preview of project " + props.name
      preview.style.width = "200px"
      preview.style.height = "200px"
      preview.style.position = "absolute"
      preview.style.left = event.pageX + "px"
      preview.style.top = event.pageY + "px"
      preview.style.pointerEvents = "none"
      body.appendChild(preview)
    }
  }

  const movePreview = (event: MouseEvent) => {
    if (!props.previewImageUrl) return
    const preview = document.getElementById("preview-" + props.name)
    if (!preview) return
    preview.style.left = event.pageX + "px"
    preview.style.top = event.pageY + "px"
    preview
  }

  const killPreview = () => {
    if (!props.previewImageUrl) return
    document.getElementById("preview-" + props.name)?.remove()
  }

  return (
    <Link href={props.href} passHref>
      <Anchor
        target="_blank"
        onMouseEnter={(event) => startPreview(event)}
        onMouseMove={(event) => movePreview(event)}
        onMouseLeave={() => killPreview()}
        style={props.previewImageUrl ? { cursor: "none" } : {}}
      >
        <MainText>
          {props.name}
          <Description>{props.description}</Description>
        </MainText>
        <Spacer />
        <Year>{props.creationYear}</Year>
      </Anchor>
    </Link>
  )
}

const Anchor = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  width: calc(100% + 32px);
  position: relative;
  overflow: hidden;
  padding: 16px;
  margin: -16px;
  border-radius: 12px;
  outline: 0px;
  color: inherit;
  text-decoration: none;

  &:hover {
    background: var(--colors-gray3);
  }
`

const MainText = styled.span`
  margin: 0px;
  font-size: var(--fontSizes-14);
  line-height: 28px;
  color: var(--colors-gray12);
  font-family: var(--fonts-body);
  font-weight: 500;
  display: inline-block;
`

const Description = styled.span`
  display: inline-block;
  color: var(--colors-gray11);
  font-family: var(--fonts-body);
  font-weight: 400;
  line-height: 28px;
  font-size: var(--fontSizes-14);
  margin: 0;
  margin-left: 10px;

  @media (max-width: 719px) {
    display: none;
  }
`

const Spacer = styled.div`
  border-top: 2px dotted var(--colors-gray6);
  flex: 1 1 0%;
`

const Year = styled.p`
  color: var(--colors-gray9);
  font-weight: 400;
  line-height: 28px;
  font-size: var(--fontSizes-14);
  font-family: var(--fonts-mono);
  display: block;
  margin: 0px;
`
