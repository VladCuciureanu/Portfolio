import Section from "../section";

export default function AboutMeSection() {
  return (
    <Section id="about" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-sand/75 dark:bg-stone-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-stone-800 dark:text-stone-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          Since before I can remember, I loved <i>anything</i> tech. I would
          spend <strong>hours</strong> exploring the depths of my father&apos;s
          desktop, trying to figure out how the games I used to play and Windows
          (the operating system) functioned. Lost count of how many times I
          bricked the system.
        </p>
        <p>
          Fast-forward a few years, I got my first internship at 16 years old,
          as a <i>C++ game engine developer</i> at a small corporation.
          Afterwards, I transitioned to <i>full-stack web development</i>,
          working on various stacks until landing on <i>React</i> and{" "}
          <i>Express</i>, alongside <i>Typescript</i>.
        </p>
        <p>
          My main focus these days is building <i>web products</i>. In my free
          time I&apos;m also working on various personal projects.{" "}
          <a
            href="#projects"
            className="font-medium text-stone-800 dark:text-stone-200 hover:text-orange-500 dark:hover:text-orange-300"
          >
            Check them out below ↓
          </a>
        </p>
        <p>
          When I&apos;m not at the computer, I&apos;m usually hanging out with
          my wife, enjoying a cold brew tonic, or studying audio synthesis.
        </p>
      </div>
    </Section>
  );
}
