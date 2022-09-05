import ProjectsPreview from "@/ui/index/projects-preview"
import Layout from "@/ui/shared/layout"
import { allProjects, Project } from "contentlayer/generated"
import styled from "styled-components"

export async function getStaticProps() {
  const projects = allProjects
    .filter((project) => project.homePageSlot !== undefined)
    .sort((a, b) => {
      if (a.homePageSlot! === b.homePageSlot!) return 0
      return a.homePageSlot! < b.homePageSlot! ? -1 : 1
    })
  return {
    props: {
      projects: projects,
    },
  }
}

export default function HomePage({ projects }: { projects: Project[] }) {
  return (
    <Layout>
      <MainColumn>
        <ProjectsPreview projects={projects} />
      </MainColumn>
    </Layout>
  )
}

const MainColumn = styled.div`
  grid-column-start: 2;
  @media (min-width: 1280px) {
    grid-column-start: 3;
  }
`
