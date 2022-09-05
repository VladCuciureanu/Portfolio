import { Project } from "contentlayer/generated"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import Styles from "./styles"

export default function ProjectShowcaseCard({ project }: { project: Project }) {
  const { name, description, creationYear, href } = project

  return (
    <Link href={href} passHref target={"_blank"}>
      <Anchor>
        <Card>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <Flairs>
            <Flair>
              <CalendarIcon /> {creationYear}
            </Flair>
          </Flairs>
        </Card>
      </Anchor>
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
