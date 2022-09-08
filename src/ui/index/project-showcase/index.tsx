import { Project } from "contentlayer/generated"
import styled from "styled-components"
import ProjectShowcaseCard from "./card"

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  return (
    <Grid>
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
