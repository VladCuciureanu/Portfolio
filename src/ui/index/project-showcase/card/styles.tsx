import styled from "styled-components"
import CalendarSvg from "public/assets/graphics/icons/calendar.svg"

const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 1.5rem;
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
  transition: transform 0.075s ease, background 0.075s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: scale(1.015);
    cursor: pointer;
  }
`

const Anchor = styled.a`
  text-decoration: none;
  color: var(--colors-fg);
`

const Name = styled.h1`
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

const ProjectPreviewCardStyles = {
  Card,
  Anchor,
  Name,
  Description,
  Flairs,
  Flair,
  CalendarIcon,
}

export default ProjectPreviewCardStyles
