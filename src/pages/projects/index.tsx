import Layout from "@/ui/shared/layout"
import SharedStyles from "@/ui/shared/styles"
import styled from "styled-components"
import ProjectCard from "./project-card"

export default function Projects() {
  return (
    <Layout>
      <Heading>Projects</Heading>
      <Subheading>{`It ain't much, but it's honest work!`}</Subheading>
      <List>
        <ProjectCard
          name="Lyra"
          href="/lyra"
          description="Open-source, self-hosted music streaming service"
          creationYear={2021}
          previewImageUrl="/assets/graphics/thumbnails/lyra.png"
        />
        <ProjectCard
          name="Hymn"
          href="/hymn"
          description="Open-source, non-profit, free-access christian music tabs repository"
          creationYear={2021}
          previewImageUrl="/assets/graphics/thumbnails/hymn.png"
        />
        <ProjectCard
          name="Garlic Bread"
          href="https://github.com/VladCuciureanu/GarlicBread"
          description="Light-hearted Discord bot designed for personal use"
          creationYear={2020}
        />
        <ProjectCard
          name="CatFetch"
          href="https://github.com/VladCuciureanu/CatFetch"
          description="Ok hear me out guys... Cats. In terminals! 🤯"
          creationYear={2020}
        />
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