import ThemeSwitcher from "@/components/homepage/header/theme-switcher";
import ProjectsArchiveRow from "@/components/projects/projects-archive-row";
import { Projects } from "@/constants/projects";
import Link from "next/link";

export default function ProjectsArchive() {
  const SortedProjects = Projects.sort(
    (a, b) => b.year - a.year || a.label.localeCompare(b.label),
  );

  return (
    <div className="lg:py-24">
      <Link
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-orange-500 dark:text-orange-300"
        href="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
        Vlad Cuciureanu
      </Link>
      <h1 className="text-4xl font-bold tracking-tight text-stone-800 dark:text-stone-200 sm:text-5xl">
        All Projects
      </h1>
      <table id="content" className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-stone-700/10 dark:border-stone-300/10 bg-sand/75 dark:bg-stone-900/75 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-stone-800 dark:text-stone-200">
              Year
            </th>
            <th className="py-4 pr-8 text-sm font-semibold text-stone-800 dark:text-stone-200">
              Project
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-stone-800 dark:text-stone-200 md:table-cell">
              Notes
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-stone-800 dark:text-stone-200 lg:table-cell">
              Built with
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-stone-800 dark:text-stone-200 sm:table-cell">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {SortedProjects.map((project, idx) => (
            <ProjectsArchiveRow key={idx} data={project} />
          ))}
        </tbody>
      </table>
      <ThemeSwitcher className="fixed z-30 bottom-4 left-4" />
    </div>
  );
}
