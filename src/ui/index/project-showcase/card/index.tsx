import NoiseFilter from "@/ui/shared/noise"
import { Project } from "contentlayer/generated"
import Link from "next/link"
import React, { useState } from "react"
import Styles from "./styles"
import Tilt from "react-parallax-tilt"
import { useTheme } from "next-themes"

export default function ProjectShowcaseCard({ project }: { project: Project }) {
  const { name, description, creationYear, href, status } = project
  const { theme, setTheme } = useTheme()
  const [hovering, setHovering] = useState(false)

  const CardBase = (
    <Tilt
      tiltReverse
      glareEnable
      perspective={1000}
      tiltMaxAngleX={12.5}
      tiltMaxAngleY={12.5}
      glarePosition={"all"}
      glareMaxOpacity={theme === "dark" ? 0.05: 0.15}
      glareColor={theme === "dark" ? "#fff" : "#000"}
      onEnter={() => setHovering(true)}
      onLeave={() => setHovering(false)}
    >
      <Card enableStaticGlare={!hovering}>
        <FlexRow>
          <Name>{name}</Name>
          <Status status={status} />
        </FlexRow>
        <Description>{description}</Description>
        <Flairs>
          <Flair>
            <CalendarIcon /> {creationYear}
          </Flair>
        </Flairs>
      </Card>
    </Tilt>
  )

  if (href === undefined) {
    return CardBase
  }

  return (
    <Link href={href} passHref target={"_blank"}>
      <Anchor>{CardBase}</Anchor>
    </Link>
  )
}

const Anchor = Styles.Anchor
const Card = Styles.Card
const Name = Styles.Name
const Description = Styles.Description
const Flairs = Styles.Flairs
const Flair = Styles.Flair
const CalendarIcon = Styles.CalendarIcon
const FlexRow = Styles.FlexRow
const Status = Styles.StatusPill
