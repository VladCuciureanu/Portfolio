import { ReactNode } from "react";
import styles from "./layout.module.scss";
import Header from "@/features/Shared/Header";
import Footer from "@/features/Shared/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={styles.Glow}>
        <span />
      </div>
      <Header />
      {children}
      <Footer />
    </>
  );
}
