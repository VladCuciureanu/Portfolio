import { Project } from "contentlayer/generated"
import styled from "styled-components"
import ProjectPreviewCard from "./card"

export default function ProjectsPreview({ projects }: { projects: Project[] }) {
  return (
    <Grid>
      {projects.map((project) => (
        <ProjectPreviewCard key={project.href} project={project} />
      ))}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`
