import { Job } from "@/types/job";

export const Jobs: Job[] = [
  {
    position: "Full-Stack Dev",
    company: { name: "Contractor" },
    startDate: new Date("12-12-2022"),
    tags: ["React", "Express", "Node.js", "PostgreSQL"],
    description: (
      <ul className="list-disc pl-5">
        <li>Started working as a self-employed, full-stack developer.</li>
      </ul>
    ),
  },
  {
    position: "Full-Stack Dev",
    company: { name: "Cloudflight", href: "https://cloudflight.io" },
    startDate: new Date("08-15-2020"),
    endDate: new Date("12-12-2022"),
    tags: [
      "Angular",
      "Vue",
      "TypeScript",
      "Spring",
      "Kotlin",
      "Java",
      "WebSockets",
      "Redis",
    ],
    description: (
      <ul className="list-disc pl-5">
        <li>
          Developed the software for an industrial‑purposed, Linux‑based SBC.
        </li>
        <li>Developed and extended modules for an expansive SOAP app.</li>
        <li>
          Developed an internal Progressive Web App with a monolithic back‑end.
        </li>
        <li className="ml-5">Gained experience with: WebSockets and PWAs.</li>
        <li>Developed multiple micro‑services in a web app.</li>
        <li className="ml-5">
          Gained experience with: Docker, Redis, PostgreSQL and more…
        </li>
      </ul>
    ),
  },
  {
    position: "Game Engine Dev",
    company: { name: "ASSIST Software", href: "https://assist-software.net" },
    startDate: new Date("08-01-2017"),
    endDate: new Date("08-30-2017"),
    tags: ["C++", "OpenGL", "Game Engine", "HTML"],
    description: (
      <ul className="list-disc pl-5">
        <li>Helped develop a military simulator’s game engine.</li>
        <li>Bound web renderer to OpenGL application (for UI menus).</li>
        <li>Learned about VCS flows and Agile frameworks.</li>
      </ul>
    ),
  },
];
