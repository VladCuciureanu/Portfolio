import { Project } from "@/types/project";
import Link from "next/link";

export default function ProjectsArchiveRow({ data }: { data: Project }) {
  const url = new URL(data.href);

  return (
    <tr className="border-b border-stone-700/10 dark:border-stone-300/10 last:border-none">
      <td className="py-4 pr-4 align-top text-sm">
        <div className="translate-y-px">{data.year}</div>
      </td>
      <td className="py-4 pr-4 align-top font-semibold leading-snug text-stone-800 dark:text-stone-200">
        <div>
          <div className="block sm:hidden">
            <Link
              className="inline-flex items-baseline font-medium leading-tight text-stone-800 dark:text-stone-200 hover:text-stone-800 dark:hover:text-stone-200 focus-visible:text-orange-500 dark:focus-visible:text-orange-300 sm:hidden group/link text-base"
              href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&ct=threadablebooks.com%20header&mt=8"
              target="_blank"
              aria-label={data.label}
            >
              <span>
                <span className="inline-block">
                  {data.label}
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
                </span>
              </span>
            </Link>
          </div>
          <div className="hidden sm:block">{data.label}</div>
        </div>
      </td>
      <td className="hidden py-4 pr-4 align-top text-sm md:table-cell">
        <div className="whitespace-nowrap">
          {data.decorations?.stars && (
            <span
              className="relative inline-flex items-center text-sm font-medium text-stone-600 dark:text-stone-400"
              aria-label={`${data.decorations.stars} stars`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-1 h-3 w-3"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{data.decorations.stars}</span>
            </span>
          )}
          {data.decorations?.downloads && (
            <span
              className="relative inline-flex items-center text-sm font-medium text-stone-600 dark:text-stone-400"
              aria-label={`${data.decorations.downloads} downloads`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-1 h-4 w-4"
                aria-hidden="true"
              >
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path>
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path>
              </svg>
              <span>{data.decorations.downloads}</span>
            </span>
          )}
          {data.decorations?.forks && (
            <span
              className="relative inline-flex items-center text-sm font-medium text-stone-600 dark:text-stone-400"
              aria-label={`${data.decorations.forks} downloads`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="currentColor"
                version="1.1"
                className="mr-1 h-4 w-4"
              >
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
              </svg>
              <span>{data.decorations.forks}</span>
            </span>
          )}
        </div>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {data.tags.map((tag, idx) => (
            <li key={idx} className="my-1 mr-1.5">
              <div className="flex items-center rounded-full bg-orange-600/10 dark:bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 dark:text-orange-300 ">
                {tag}
              </div>
            </li>
          ))}
        </ul>
      </td>
      <td className="hidden py-4 align-top sm:table-cell">
        <ul className="translate-y-px">
          <li className="mb-1 flex items-center">
            <Link
              className="inline-flex items-baseline font-medium leading-tight text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 focus-visible:text-orange-500 dark:focus-visible:text-orange-300 group/link text-sm"
              href={data.href}
              target="_blank"
              aria-label={url.hostname}
            >
              {url.hostname === "github.com" && (
                <span className="inline-flex items-center">
                  GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="ml-1.5 h-3.5 w-3.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </span>
              )}
              {url.hostname !== "github.com" && (
                <span className="inline-block">
                  {url.hostname}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </Link>
          </li>
        </ul>
      </td>
    </tr>
  );
}
