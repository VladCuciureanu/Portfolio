import Link from "next/link";
import ExperienceCard from "../experience-card";
import Section from "../section";

export default function WorkExperienceSection() {
  return (
    <Section id="experience" aria-label="Work experience">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-neutral-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list flex flex-col gap-12">
          <ExperienceCard
            position={"Full-Stack Dev"}
            company={{
              name: "Contractor",
            }}
            startDate={new Date("12-12-2022")}
            tags={["React", "Express", "Node.js", "PostgreSQL"]}
          >
            <ul className="list-disc pl-5">
              <li>Started working as a self-employed, full-stack developer.</li>
            </ul>
          </ExperienceCard>
          <ExperienceCard
            position={"Full-Stack Dev"}
            company={{
              name: "Cloudflight",
              href: "https://cloudflight.io/",
            }}
            startDate={new Date("08-15-2020")}
            endDate={new Date("12-12-2022")}
            tags={[
              "Angular",
              "Vue",
              "TypeScript",
              "Spring",
              "Kotlin",
              "Java",
              "WebSockets",
              "Redis",
            ]}
          >
            <ul className="list-disc pl-5">
              <li>
                Developed the software for an industrial‑purposed, Linux‑based
                SBC.
              </li>
              <li>Developed and extended modules for an expansive SOAP app.</li>
              <li>
                Developed an internal Progressive Web App with a monolithic
                back‑end.
              </li>
              <li className="ml-5">
                Gained experience with: WebSockets and PWAs.
              </li>
              <li>Developed multiple micro‑services in a web app.</li>
              <li className="ml-5">
                Gained experience with: Docker, Redis, PostgreSQL and more…
              </li>
            </ul>
          </ExperienceCard>
          <ExperienceCard
            position={"Game Engine Dev"}
            company={{
              name: "ASSIST Software",
              href: "https://assist-software.net/",
            }}
            startDate={new Date("08-01-2017")}
            endDate={new Date("08-30-2017")}
            tags={["C++", "OpenGL", "Game Engine", "HTML"]}
          >
            <ul className="list-disc pl-5">
              <li>Helped develop a military simulator’s game engine.</li>
              <li>Bound web renderer to OpenGL application (for UI menus).</li>
              <li>Learned about VCS flows and Agile frameworks.</li>
            </ul>
          </ExperienceCard>
        </ol>
        <div className="mt-12">
          <Link
            className="inline-flex items-center leading-tight font-semibold text-neutral-200 group"
            aria-label="View Full Résumé"
            href="/resume"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-orange-300 motion-reduce:transition-none">
                View Full{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-orange-300 motion-reduce:transition-none">
                  Résumé
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
