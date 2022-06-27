import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";
import ThemeSwitcher from "./ThemeSwitcher";
import MobileMenu from "./MobileMenu";

export default function NavigationBar() {
  return (
    <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
      <div>
      <MobileMenu />
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
          "hidden sm:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}
