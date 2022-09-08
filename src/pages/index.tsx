import { allProjects, Project } from "contentlayer/generated"
import ProjectsPreview from "@/ui/index/project-showcase"
import Layout from "@/ui/shared/layout"
import styled from "styled-components"
import Styles from "@/ui/shared/styles"

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
        <Section>{/* Short intro and profile pic */}</Section>
        <Section>
          <Heading>Featured Projects</Heading>
          <Subheading>{`It's not much but it's honest work`}</Subheading>
          <ProjectsPreview projects={projects} />
        </Section>
        <Section>
          <Heading>Recent Posts</Heading>
          {/* Posts feed */}
        </Section>
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

const Heading = Styles.Heading
const Subheading = Styles.Subheading
const Section = Styles.Section
