import { ReactNode } from "react";
import styles from "./layout.module.scss";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className={styles.Main}>{children}</main>
    </>
  );
}
