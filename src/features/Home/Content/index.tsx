import Footer from "../Footer";
import Bio from "./Bio";
import Experience from "./Experience";
import Projects from "./Projects";
import styles from "./index.module.scss";

export default function HomePageContent() {
  return (
    <main className={styles.Container}>
      <section id="about">
        <h2>About</h2>
        <Bio />
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <Experience />
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <Projects />
      </section>
      <Footer />
    </main>
  );
}
