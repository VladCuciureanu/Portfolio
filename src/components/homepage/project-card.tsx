import { ReactNode } from "react";
import OptionalLink from "./optional-link";
import Image from "next/image";
import { Project } from "@/types/project";

export default function ProjectCard({ data }: { data: Project }) {
  return (
    <li>
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-orange-200/[.15] dark:lg:group-hover:bg-stone-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <OptionalLink
              className="inline-flex items-baseline font-medium leading-tight text-stone-800 dark:text-stone-200 hover:text-orange-500 dark:hover:text-orange-300 focus-visible:text-orange-500 dark:focus-visible:text-orange-300  group/link text-base"
              href={data.href}
              target="_blank"
              rel="noreferrer"
              aria-label={data.label}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span className="inline-block">
                {data.label}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </OptionalLink>
          </h3>
          <p className="mt-2 text-sm leading-normal">
            {data.showcase?.description}
          </p>
          {data.decorations?.stars && (
            <span
              className="relative mt-2 inline-flex items-center text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-orange-500 dark:hover:text-orange-300 focus-visible:text-orange-500 dark:focus-visible:text-orange-300"
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
              className="relative mt-2 inline-flex items-center text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-orange-500 dark:hover:text-orange-300 focus-visible:text-orange-500 dark:focus-visible:text-orange-300"
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
              className="relative mt-2 inline-flex items-center text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-orange-500 dark:hover:text-orange-300 focus-visible:text-orange-500 dark:focus-visible:text-orange-300"
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
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {data.tags.map((tag, idx) => (
              <li key={idx} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-orange-600/10 dark:bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 dark:text-orange-300 ">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {data.showcase && data.showcase.imgSrc && (
          <Image
            alt=""
            loading="lazy"
            width={200}
            height={48}
            className="rounded border-2 border-stone-800/10 dark:border-stone-200/10 transition group-hover:border-stone-800/30 dark:group-hover:border-stone-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            src={data.showcase.imgSrc}
          />
        )}
        {!data.showcase ||
          (!data.showcase.imgSrc && (
            <div className="rounded border-2 border-stone-800/10 dark:border-stone-200/10 transition group-hover:border-stone-800/30 dark:group-hover:border-stone-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 aspect-video" />
          ))}
      </div>
    </li>
  );
}
