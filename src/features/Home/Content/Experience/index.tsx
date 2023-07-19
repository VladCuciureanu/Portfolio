import HomeContentExperienceEntry from "./Entry";
import styles from "./index.module.scss";

export default function HomeContentExperience() {
  return (
    <div>
      <ol className={styles.Container}>
        <HomeContentExperienceEntry
          startDate={new Date("2018/11/26")}
          jobTitle="Lead Engineer"
          previousJobTitles={["Senior Engineer", "Engineer"]}
          company={{ name: "Upstatement", href: "https://faith.software" }}
          description={
            "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship."
          }
          links={[{ label: "Faith Software", href: "https://faith.software" }]}
          tags={["React", "Express", "TypeScript", "PostgreSQL"]}
        />
        {/* <HomeContentExperienceEntry
          jobTitle="Full-Stack Developer"
          company={{ name: "Faith Software", href: "https://faith.software" }}
          description={
            "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship."
          }
          startDate={new Date("2022/11/26")}
          tags={["React", "Express", "TypeScript", "PostgreSQL"]}
          links={[{ label: "Faith Software", href: "https://faith.software" }]}
          previousJobTitles={["Test", "Best"]}
        /> */}
      </ol>
    </div>
  );
}
