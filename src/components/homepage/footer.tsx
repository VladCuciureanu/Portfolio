import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-stone-500 dark:text-stone-500 sm:pb-0">
      <p>
        Built with{" "}
        <Link
          href="https://nextjs.org/"
          target="_blank"
          className="font-medium text-stone-600 dark:text-stone-400 hover:text-orange-500 dark:hover:text-orange-300 focus-visible:text-orange-500 dark:focus-visible:text-orange-300"
        >
          Next.js
        </Link>
        . Coded in{" "}
        <Link
          href="https://typescriptlang.org/"
          target="_blank"
          className="font-medium text-stone-600 dark:text-stone-400 hover:text-orange-500 dark:hover:text-orange-300 focus-visible:text-orange-500 dark:focus-visible:text-orange-300"
        >
          TypeScript
        </Link>
        . Deployed with{" "}
        <Link
          href="https://vercel.com/"
          target="_blank"
          className="font-medium text-stone-600 dark:text-stone-400 hover:text-orange-500 dark:hover:text-orange-300 focus-visible:text-orange-500 dark:focus-visible:text-orange-300"
        >
          Vercel
        </Link>
        . Powered by decaliters of cold brew tonic.
      </p>
    </footer>
  );
}
