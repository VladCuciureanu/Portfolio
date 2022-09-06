import styled from "styled-components"
import CalendarSvg from "public/assets/graphics/icons/calendar.svg"
import { Project } from "contentlayer/generated"

const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 1.5rem;
  padding-top: 1.35rem;
  padding-bottom: 1.25rem;
  min-width: 100%;
  min-height: 8rem;
  border-radius: var(--radii-2);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(35px);
  border: 2px solid rgba(255, 255, 255, 0.05);
  /* box-shadow: 0 0 80px rgba(0, 0, 0, 0.25); */
  flex: 1 auto 1;
  transition: background 0.075s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    cursor: pointer;
  }
`

const Anchor = styled.a`
  text-decoration: none;
  color: var(--colors-fg);
`

const Name = styled.h2`
  font-size: 1rem;
  line-height: 1rem;
`

const Description = styled.p`
  margin-top: 0.45rem;
  font-size: 0.9rem;
  line-height: 1rem;
  flex-grow: 1;
`

const Flairs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.8rem;
  color: var(--colors-gray9);
`

const Flair = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
`

const CalendarIcon = styled(CalendarSvg)`
  height: 0.85rem;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Pill = styled.div`
  font-size: 0.75rem;
  line-height: 0.85rem;
  padding: 0.15rem;
  padding-left: 0.45rem;
  padding-right: 0.45rem;
  margin-left: 0.75rem;
  margin-top: -2px;
  border: 1px solid;
  border-radius: var(--radii-3);
`

function StatusPill({ status }: { status: Project["status"] }) {
  var color = "var(--colors-gray9)"
  var label = "Unicorn"

  switch (status) {
    case "unreleased":
      label = "Unreleased"
      break
    case "work-in-progress":
      label = "Work-In-Progress"
      color = "var(--colors-amber9)"
      break
    case "released":
      label = "Released"
      color = "var(--colors-green9)"
      break
    case "discontinued":
      label = "Discontinued"
      color = "firebrick"
      break
    case "private":
      label = "Private"
      color = "var(--colors-blue9)"
      break
  }
  return <Pill style={{ color: color, borderColor: color }}>{label}</Pill>
}

const ProjectPreviewCardStyles = {
  Card,
  Anchor,
  Name,
  Description,
  Flairs,
  Flair,
  CalendarIcon,
  FlexRow,
  StatusPill,
}

export default ProjectPreviewCardStyles
