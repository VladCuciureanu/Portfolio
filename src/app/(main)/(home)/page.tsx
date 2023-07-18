import Header from "@/features/Home/Header";
import styles from "./page.module.scss";
import { allProjects } from "contentlayer/generated";
import ContentAndFooter from "@/features/Home/Content";

export default async function HomePage() {
  const projects = allProjects;

  return (
    <div className={styles.Wrapper}>
      <Header />
      <ContentAndFooter />
    </div>
  );
}
