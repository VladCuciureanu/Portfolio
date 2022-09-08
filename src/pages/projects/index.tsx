import { allProjects, Project } from "contentlayer/generated"
import Layout from "@/ui/shared/layout"
import Styles from "@/ui/shared/styles"
import styled from "styled-components"
import ProjectCard from "@/ui/projects/card"

export async function getStaticProps() {
  const projects = allProjects.sort(function (a, b) {
    var rv = a.creationYear - b.creationYear
    if (rv === 0) {
      rv = -a.name.localeCompare(b.name)
    }
    return -rv
  })
  return {
    props: {
      projects: projects,
    },
  }
}

export default function ProjectsPage({ projects }: { projects: Project[] }) {
  // Null safety
  projects = projects ? projects : []

  return (
    <Layout>
      <MainColumn>
        <Section>
          <Heading>Projects</Heading>
          <Subheading>Khajiit has wares, if you have coin.</Subheading>
          <List>
            {projects.map((project) => (
              <ProjectCard key={project.href} project={project} />
            ))}
          </List>
        </Section>
      </MainColumn>
    </Layout>
  )
}

const Heading = Styles.Heading
const Subheading = Styles.Subheading
const Section = Styles.Section
const MainColumn = Styles.MainColumn

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
