import { DockGroup } from "."
import {
  IconGithub,
  IconHome,
  IconHymn,
  IconLinkedIn,
  IconLyra,
  IconMail,
  IconProjects,
  IconTwitter,
  IconResume,
} from "./icons"

const ProjectsGroup: DockGroup = {
  name: "Projects",
  items: [
    {
      label: "Lyra",
      href: "/lyra",
      icon: <IconLyra />,
    },
    {
      label: "Hymn",
      href: "/hymn",
      icon: <IconHymn />,
    },
  ],
}

const PagesGroup: DockGroup = {
  name: "Projects",
  items: [
    {
      label: "Home",
      href: "/",
      icon: <IconHome />,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <IconProjects />,
    },
    {
      label: "Resume",
      href: "/resume",
      icon: <IconResume />,
    },
  ],
}

const SocialMediaGroup: DockGroup = {
  name: "Social Media",
  items: [
    {
      label: "Github",
      href: "/github",
      icon: <IconGithub />,
    },
    {
      label: "Mail",
      href: "mailto:dev@vladinski.md",
      icon: <IconMail />,
    },
    {
      label: "Twitter",
      href: "/twitter",
      icon: <IconTwitter />,
    },
    // {
    //   label: "LinkedIn",
    //   href: "/linkedin",
    //   icon: <IconLinkedIn />,
    // },
  ],
}

const DockStructure: DockGroup[] = [ProjectsGroup, PagesGroup, SocialMediaGroup]

export default DockStructure
