import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-stone-800 dark:text-stone-200 sm:text-5xl">
          <Link href="/">Vlad Cuciureanu</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-stone-800 dark:text-stone-200 sm:text-xl">
          <span className="text-stone-800 dark:text-stone-200">
            Full-Stack Developer
          </span>
        </h2>
        <p className="mt-4 max-w-xs leading-normal">I like to build things.</p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <Link
                className="group flex items-center py-3 active"
                href="#about"
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-stone-400 dark:bg-stone-600 transition-all group-hover:w-16 group-hover:bg-stone-800 dark:group-hover:bg-stone-200 group-focus-visible:w-16 group-focus-visible:bg-stone-800 dark:group-focus-visible:bg-stone-200 motion-reduce:transition-none" />
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-500 group-hover:text-stone-800 dark:group-hover:text-stone-200 group-focus-visible:text-stone-800 dark:group-focus-visible:text-stone-200">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link className="group flex items-center py-3" href="#experience">
                <span className="nav-indicator mr-4 h-px w-8 bg-stone-400 dark:bg-stone-600 transition-all group-hover:w-16 group-hover:bg-stone-800 dark:group-hover:bg-stone-200 group-focus-visible:w-16 group-focus-visible:bg-stone-800 dark:group-focus-visible:bg-stone-200 motion-reduce:transition-none" />
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-500 group-hover:text-stone-800 dark:group-hover:text-stone-200 group-focus-visible:text-stone-800 dark:group-focus-visible:text-stone-200">
                  Experience
                </span>
              </Link>
            </li>
            <li>
              <Link className="group flex items-center py-3" href="#projects">
                <span className="nav-indicator mr-4 h-px w-8 bg-stone-400 dark:bg-stone-600 transition-all group-hover:w-16 group-hover:bg-stone-800 dark:group-hover:bg-stone-200 group-focus-visible:w-16 group-focus-visible:bg-stone-800 dark:group-focus-visible:bg-stone-200 motion-reduce:transition-none" />
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-500 group-hover:text-stone-800 dark:group-hover:text-stone-200 group-focus-visible:text-stone-800 dark:group-focus-visible:text-stone-200">
                  Projects
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <ul
        className="ml-1 mt-8 flex items-center gap-5 text-xs"
        aria-label="Social media"
      >
        <li>
          <Link
            className="block hover:text-stone-800 dark:hover:text-stone-200"
            href="mailto:vlad@cuciureanu.net"
            target="_blank"
          >
            <span className="sr-only">Mail</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            className="block hover:text-stone-800 dark:hover:text-stone-200"
            href="https://github.com/VladCuciureanu"
            target="_blank"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            className="block hover:text-stone-800 dark:hover:text-stone-200"
            href="https://www.linkedin.com/in/VladCuciureanu"
            target="_blank"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
          </Link>
        </li>
        <li className="h-full w-px bg-stone-400 dark:bg-stone-600 hidden lg:block" />
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </header>
  );
}
