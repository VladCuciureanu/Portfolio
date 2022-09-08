import { Project } from "contentlayer/generated"
import Link from "next/link"
import Styles from "./styles"
import Tilt from "react-parallax-tilt"
import { useTheme } from "next-themes"

export default function ProjectCard({ project }: { project: Project }) {
  const { theme, setTheme } = useTheme()
  const BaseCard = (
    <Tilt
      tiltReverse
      glareEnable
      glareMaxOpacity={0.2}
      tiltMaxAngleX={3}
      tiltMaxAngleY={5}
      glareColor={theme === "dark" ? "#fff" : "#000"}
    >
      <Container enableStaticGlare className={project.status}>
        <Title>{project.name}</Title>
        <Description>{project.description}</Description>
        <Spacer />
        <Date>{project.creationYear}</Date>
      </Container>
    </Tilt>
  )
  if (project.href === undefined) {
    return BaseCard
  }
  return (
    <Link href={project.href} passHref>
      <Anchor>{BaseCard}</Anchor>
    </Link>
  )
}

const Anchor = Styles.Anchor
const Container = Styles.Container
const Title = Styles.Title
const Description = Styles.Description
const Spacer = Styles.Spacer
const Date = Styles.Date
