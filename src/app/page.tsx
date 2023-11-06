import EasterEggLink from "@/components/homepage/easter-egg-link";
import Footer from "@/components/homepage/footer";
import AboutMeSection from "@/components/homepage/sections/about-me";
import WorkExperienceSection from "@/components/homepage/sections/experience";
import ProjectsSection from "@/components/homepage/sections/projects";
import Header from "@/components/shared/header";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-orange-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
      >
        Skip to Content
      </a>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <AboutMeSection />
          <WorkExperienceSection />
          <ProjectsSection />
          <Footer />
        </main>
        <div>
          <EasterEggLink />
        </div>
      </div>
    </div>
  );
}
