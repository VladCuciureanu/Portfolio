import { Project } from "@/types/project";
import styles from "./page.module.scss";
import ProjectsTable from "@/features/Projects/Table";

export default function ProjectsPage() {
  return (
    <>
      <h1 className={styles.Title}>Projects</h1>
      <p className={styles.Job}>It&apos;s not much but it&apos;s honest work</p>
      <div className={styles.Divider} />
      <ProjectsTable data={TableData} />
    </>
  );
}

const TableData: Project[] = [
  {
    name: "Lyra",
    description:
      "Self‑hosted music streaming service that allows you to take your high‑fidelity music collection anywhere.",
    year: "2021",
    href: "https://github.com/faith-software/Lyra",
  },
  {
    name: "Hymn",
    description:
      "Open-source, non-profit, free-access, christian music tabs repository.",
    year: "2021",
    href: "https://github.com/faith-software/Hymn",
  },
  {
    name: "Portfolio",
    description:
      "My personal website, serving as a digital garden and portfolio, showcasing my thoughts, experiences, and projects.",
    year: "2022",
    href: "https://github.com/VladCuciureanu/Portfolio",
  },
  {
    name: "Toothpick",
    description:
      "Bluetooth extension for Raycast. Provides shortcuts for quick Bluetooth management.",
    year: "2022",
    href: "https://github.com/VladCuciureanu/Toothpick",
  },
  {
    name: "CheckIt",
    description: "A minimalist, immersive, light checklist application.",
    year: "2021",
    href: "https://github.com/VladCuciureanu/CheckIt",
  },
  {
    name: "Garlic Bread",
    description:
      "Is your sense of humor similar to that of an neanderthal? If so, check out this tasty Discord bot!",
    year: "2020",
    href: "https://github.com/VladCuciureanu/GarlicBread",
  },
  {
    name: "Degree",
    description: "REST-based audio streaming showcased in React and .NET Core",
    year: "2021",
    href: "https://github.com/VladCuciureanu/Degree",
  },
  {
    name: "SwaggerUIWatch",
    description:
      "Hot-reloading Swagger UI server. See live updates to your OpenAPI specifications!",
    year: "2022",
    href: "https://github.com/faith-software/SwaggerUIWatch",
  },
  {
    name: "UnitBuddy",
    description:
      "Browser extension that converts all measuring units to your preferred system of units.",
    year: "2022",
    href: "https://github.com/faith-software/UnitBuddy",
  },
  {
    name: "Khora",
    description: "Open-source synthesizer",
    year: "2019",
    href: "https://github.com/faith-software/Khora",
  },
];
