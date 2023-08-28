import Sidebar from "@/components/Home/Sidebar";
import styles from "./page.module.scss";
import Experience from "@/components/Home/Experience";
import Projects from "@/components/Home/Projects";
import Footer from "@/components/Home/Footer";
import Link from "next/link";
import { allJobs, allProjects } from "contentlayer/generated";

const jobs = allJobs.sort(
  (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
);

const projects = allProjects
  .filter((p) => p.highlightOrderId !== undefined)
  .sort((a, b) => a.highlightOrderId! - b.highlightOrderId!);

export default async function HomePage() {
  return (
    <div className={styles.Wrapper}>
      <Sidebar />
      <main className={styles.Container}>
        <section id="about">
          <h2>About</h2>
          <div className={styles.ProseBlock}>
            <p>
              Since before I can remember, I loved <i>anything</i> tech. I would
              spend <strong>hours</strong> exploring the depths of my
              father&apos;s desktop, trying to figure out how the games I used
              to play and Windows (the operating system) functioned. Lost count
              of how many times I bricked the system.
            </p>
            <p>
              Fast-forward a few years, I got my first internship at 16 years
              old, as a <i>C++ game engine developer</i> at a small corporation.
              Several years later, I transitioned to{" "}
              <i>full-stack web development</i>, working on various stacks until
              landing on <i>React</i> and <i>Express</i>, alongside{" "}
              <i>Typescript</i>.
            </p>
            <p>
              My main focus these days is building <i>web products</i> as a{" "}
              <i>contractor</i>. In my free time I&apos;m also working on
              various personal projects.{" "}
              <Link href="#projects">Check them out below ↓</Link>
            </p>
            <p>
              When I&apos;m not at the computer, I&apos;m usually hanging out
              with my wife, enjoying a cold brew tonic, or studying audio
              synthesis.
            </p>
          </div>
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <Experience data={jobs} />
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <Projects data={projects} />
        </section>
        <Footer />
      </main>
    </div>
  );
}
