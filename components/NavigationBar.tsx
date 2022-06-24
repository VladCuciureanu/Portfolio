import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";
import ThemeSwitcher from "./ThemeSwitcher";

export default function NavigationBar() {
  return (
    <nav className="flex flex-row items-center justify-between w-full pt-8 pb-10 ml-[-0.60rem]">
      <div>
      <NavItem href="/" text="Home" />
      <NavItem href="/about" text="About" />
      </div>
      <ThemeSwitcher />
    </nav>
  );
}

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}
