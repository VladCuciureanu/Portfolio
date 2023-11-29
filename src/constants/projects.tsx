import { Project } from "@/types/project";

export const Projects: Project[] = [
  {
    label: "Toothpick",
    href: "https://github.com/VladCuciureanu/Toothpick",
    decorations: { downloads: "14.500+ Installs" },
    tags: ["React", "Node.js"],
    year: 2022,
    showcase: {
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
    label: "CheckIt",
    href: "https://checkit.vladcuciureanu.com",
    tags: ["React", "Next.js", "TypeScript", "Sass"],
    year: 2023,
    showcase: {
      orderId: 2,
      description: (
        <>
          Minimalist, local-first checklist app created for quickly writing down
          action points.
        </>
      ),
    },
  },
  {
    label: "Portfolio",
    href: "https://github.com/VladCuciureanu/Portfolio",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Edge Functions"],
    year: 2022,
    showcase: {
      orderId: 3,
      description: (
        <>
          My personal website, serving as a digital garden and portfolio,
          showcasing my thoughts, experiences, and projects.
        </>
      ),
    },
  },
  {
    label: "Hymn",
    href: "https://github.com/VladCuciureanu/Hymn",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Supabase"],
    year: 2021,
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
    label: "Lyra",
    href: "https://github.com/VladCuciureanu/Lyra",
    tags: ["React", "Next.js", "Node.js", "WebRTC", "Redis"],
    year: 2021,
    showcase: {
      orderId: 5,
      description: (
        <>
          Self‑hosted music streaming service that allows you to take your
          high‑fidelity music collection anywhere.
        </>
      ),
    },
  },
  {
    label: "SwaggerUI Watch",
    href: "https://github.com/VladCuciureanu/SwaggerUiWatch",
    tags: ["TypeScript"],
    year: 2023,
  },
  {
    label: "Khora",
    href: "https://github.com/VladCuciureanu/Khora",
    tags: ["C++", "CMake", "ImGUI"],
    year: 2020,
  },
  {
    label: "Garlic Bread",
    href: "https://github.com/VladCuciureanu/GarlicBread",
    tags: ["Node.js", "PostgreSQL"],
    year: 2020,
  },
];
