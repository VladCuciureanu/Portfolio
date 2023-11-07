import Link from "next/link";
import ExperienceCard from "../experience-card";
import Section from "../section";
import { Jobs } from "@/constants/jobs";

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
          {Jobs.map((job, idx) => (
            <ExperienceCard key={idx} data={job} />
          ))}
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
