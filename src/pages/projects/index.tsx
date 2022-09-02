import Layout from "@/ui/shared/layout"
import SharedStyles from "@/ui/shared/styles"
import styled from "styled-components"
import ProjectCard from "../../ui/projects/project-card"
import { Project } from "contentlayer/generated"
import { allProjects } from "contentlayer/generated"

export async function getStaticProps() {
  const projects = allProjects ? allProjects : []
  return {
    props: {
      projects: projects,
    },
  }
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <Layout>
      <Heading>Projects</Heading>
      <Subheading>{`It ain't much, but it's honest work!`}</Subheading>
      <List>
        {projects.map((project) => {
          const { name, description, creationYear, href, thumbnailUrl } =
            project
          return (
            <ProjectCard
              name={name}
              description={description}
              creationYear={creationYear}
              href={href}
              previewImageUrl={thumbnailUrl}
              key={href}
            />
          )
        })}
      </List>
    </Layout>
  )
}

const Heading = SharedStyles.Heading
const Subheading = SharedStyles.Subheading

const List = styled.ul`
  padding: 0;
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: 28px;
`
