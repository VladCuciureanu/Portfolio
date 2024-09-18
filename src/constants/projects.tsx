import { Project } from "@/types/project";

export const Projects: Project[] = [
  {
    label: "Toothpick",
    href: "https://github.com/VladCuciureanu/Toothpick",
    decorations: { downloads: "22.0k+ Installs" },
    tags: ["React", "Node.js"],
    startYear: 2022,
    showcase: {
      imgSrc: "/images/projects/toothpick.png",
      orderId: 1,
      description: (
        <>
          Bluetooth extension for Raycast. Provides shortcuts for quick
          Bluetooth management.
        </>
      ),
    },
  },
  {
    label: "Portfolio",
    href: "https://github.com/VladCuciureanu/Portfolio",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Edge Functions"],
    startYear: 2022,
    showcase: {
      imgSrc: "/images/projects/portfolio.png",
      orderId: 2,
      description: (
        <>
          My personal website, serving as a digital garden and portfolio,
          showcasing my thoughts, experiences, and projects.
        </>
      ),
    },
  },
  {
    label: "Lyra",
    href: "https://github.com/VladCuciureanu/Lyra",
    tags: ["React", "Next.js", "Node.js", "WebRTC", "Redis"],
    startYear: 2021,
    showcase: {
      orderId: 3,
      description: (
        <>
          Self‑hosted music streaming service that allows you to take your
          high‑fidelity music collection anywhere.
        </>
      ),
    },
  },
  {
    label: "Hymn",
    href: "https://github.com/VladCuciureanu/Hymn",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Supabase"],
    startYear: 2021,
    showcase: {
      orderId: 4,
      description: (
        <>
          Open-source, non-profit, free-access christian music tabs repository
          with user friendliness and ease of use in mind.
        </>
      ),
    },
  },
  {
    label: "Garlic Bread",
    href: "https://github.com/VladCuciureanu/GarlicBread",
    tags: ["Node.js", "PostgreSQL"],
    startYear: 2020,
    endYear: 2020,
    showcase: {
      orderId: 5,
      description: (
        <>
          Discord bot (at first) developed as a moderation utility for my
          personal Discord channel.
        </>
      ),
    },
  },
  {
    label: "CheckIt",
    href: "https://checkit.vlad.cuciureanu.net",
    tags: ["React", "Next.js", "TypeScript", "Sass"],
    startYear: 2020,
    endYear: 2020,
    showcase: {
      orderId: 6,
      description: (
        <>
          Minimalist checklist app. Created for quickly writing down action
          points.
        </>
      ),
    },
  },
  {
    label: "SwaggerUI Watch",
    href: "https://github.com/VladCuciureanu/SwaggerUiWatch",
    tags: ["TypeScript"],
    startYear: 2023,
    endYear: 2023,
  },
  {
    label: "Khora",
    href: "https://github.com/VladCuciureanu/Khora",
    tags: ["C++", "CMake", "ImGUI"],
    startYear: 2020,
  },
];
