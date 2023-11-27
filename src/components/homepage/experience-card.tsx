import OptionalLink from "./optional-link";
import { Job } from "@/types/job";

export default function ExperienceCard({ data }: { data: Job }) {
  const dateString = getDateString({
    startDate: data.startDate,
    endDate: data.endDate,
  });
  return (
    <li>
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-orange-200/[.35] dark:lg:group-hover:bg-stone-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-500 sm:col-span-2"
          aria-label="July to December 2017"
        >
          {dateString}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-stone-800 dark:text-stone-200">
            <div>
              <OptionalLink
                className="inline-flex items-baseline font-medium leading-tight text-stone-800 dark:text-stone-200 hover:text-orange-500 dark:hover:text-orange-300 focus-visible:text-orange-500 dark:focus-visible:text-orange-300  group/link text-base"
                href={data.company.href}
                target="_blank"
                aria-label={`${data.position} at ${data.company.name}`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                <span>
                  {data.position} ·{/* */}{" "}
                  <span className="inline-block">
                    {data.company.name}
                    {data.company.href && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </span>
              </OptionalLink>
            </div>
          </h3>
          <div className="mt-2 text-sm leading-relaxed">{data.description}</div>
          <ul className="mt-2 flex flex-wrap" aria-label="Related links">
            {data.links?.map((link, idx) => (
              <li key={idx} className="mr-4">
                <OptionalLink
                  className="relative mt-2 inline-flex items-center text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-orange-500 dark:hover:text-orange-300 focus-visible:text-orange-500 dark:focus-visible:text-orange-300"
                  href={link.href}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mr-1 h-3 w-3"
                    aria-hidden="true"
                  >
                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                  </svg>
                  <span>{link.label}</span>
                </OptionalLink>
              </li>
            ))}
          </ul>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {data.tags.map((tag, idx) => (
              <li key={idx} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-orange-600/10 dark:bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 dark:text-orange-300 ">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

function getDateString({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate?: Date;
}): string {
  if (!endDate) {
    if (new Date().getFullYear() === startDate.getFullYear()) {
      return `${startDate.toLocaleString("default", {
        month: "short",
      })} — Present`;
    }
    return `${startDate.toLocaleString("default", {
      year: "numeric",
    })} — Present`;
  }

  if (startDate.getFullYear() === endDate.getFullYear()) {
    return `${startDate.toLocaleString("default", {
      month: "short",
    })} — ${endDate.toLocaleString("default", {
      month: "short",
      year: "numeric",
    })}`;
  }

  return `${startDate.toLocaleString("default", {
    year: "numeric",
  })} — ${endDate.toLocaleString("default", {
    year: "numeric",
  })}`;
}
