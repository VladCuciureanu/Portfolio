import { Project } from "contentlayer/generated"
import styled from "styled-components"
import ProjectShowcaseCard from "./card"

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  return (
    <Grid>
      <Title>Featured Projects</Title>
      <Subtitle>{`It's not much but it's honest work`}</Subtitle>
      {projects.map((project) => (
        <ProjectShowcaseCard key={project.href} project={project} />
      ))}
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h1`
  @media (min-width: 721px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  font-weight: 800;
  font-size: 2.25rem;
`

const Subtitle = styled.p`
  @media (min-width: 721px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  margin-top: -0.5rem;
  font-size: 1.1rem;
  color: var(--colors-gray-500);
`
