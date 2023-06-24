import { ReactNode } from "react";
import styles from "./layout.module.scss";
import Header from "@/features/Shared/Header";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={styles.Glow}>
        <span />
      </div>
      <Header />
      <main className={styles.Main}>{children}</main>
    </>
  );
}
