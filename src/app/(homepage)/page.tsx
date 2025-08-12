import Footer from "@/components/homepage/footer";
import AboutMeSection from "@/components/homepage/sections/about-me";
import WorkExperienceSection from "@/components/homepage/sections/experience";
import ProjectsSection from "@/components/homepage/sections/projects";
import Header from "@/components/homepage/header";

export default function Homepage() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <AboutMeSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
}
