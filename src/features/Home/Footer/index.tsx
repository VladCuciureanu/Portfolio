import Link from "next/link";
import styles from "./index.module.scss";

export default function HomePageFooter() {
  return (
    <footer className={styles.Footer}>
      <p>
        {"Built with "}
        <Link href="https://nextjs.org" target="_blank">
          Next.js
        </Link>
        {". Coded in "}
        <Link href="https://typescriptlang.org" target="_blank">
          TypeScript
        </Link>
        {". Deployed with "}
        <Link href="https://vercel.com" target="_blank">
          Vercel
        </Link>
        . Powered by decaliters of cold brew tonic.
      </p>
    </footer>
  );
}
