import styled from "styled-components"
import Glass from "../shared/glass"

const Container = styled(Glass)`
  padding: 1rem;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 auto 1;
  gap: 1rem;
  transform: translateZ(0);
  --glare-factor: 0.1;

  &.private {
    --shadow: rgba(var(--colors-blue-11), var(--glare-factor));
    /* &::before {
      background: linear-gradient(
        135deg,
        rgba(var(--colors-gray-12), 0.3),
        rgba(var(--colors-blue-11), 0.7)
      );
    } */
  }

  &.released {
    --shadow: rgba(var(--colors-green-11), var(--glare-factor));
    /* &::before {
      background: linear-gradient(
        135deg,
        rgba(var(--colors-gray-12), 0.3),
        rgba(var(--colors-green-11), 0.7)
      );
    } */
  }

  &.discontinued {
    --shadow: rgba(var(--colors-red-11), var(--glare-factor));
    /* &::before {
      background: linear-gradient(
        135deg,
        rgba(var(--colors-gray-12), 0.3),
        rgba(var(--colors-red-11), 0.7)
      );
    } */
  }

  &.work-in-progress {
    --shadow: rgba(var(--colors-amber-11), var(--glare-factor));
    /* &::before {
      background: linear-gradient(
        135deg,
        rgba(var(--colors-gray-12), 0.3),
        rgba(var(--colors-amber-11), 0.7)
      );
    } */
  }
`

const Anchor = styled.a`
  text-decoration: none;
  color: rgb(var(--color-highContrast));
`

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 500;
`

const Description = styled.p`
  font-size: 0.8rem;
  color: rgb(var(--colors-gray-11));
  font-weight: 400;
`

const Spacer = styled.div`
  height: 1px;
  flex-grow: 1;
  border-bottom: 2px dotted rgb(var(--colors-gray-8));
`

const Date = styled.p`
  font-weight: 500;
`

const ProjectCardStyles = {
  Anchor,
  Title,
  Description,
  Spacer,
  Date,
  Container,
}

export default ProjectCardStyles
