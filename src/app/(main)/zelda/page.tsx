import EasterEgg from "@/features/EasterEgg";
import ThemeSwitcher from "@/features/Shared/Shell/ThemeSwitcher";
import { generateMetadata } from "@/libs/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "???",
  description: "I'm so hungry, I could eat an octorock!",
  meta: "Yahaha! You found me!",
});

export default function ZeldaPage() {
  return (
    <>
      <section id="emulator" style={{ height: "100vh" }}>
        <EasterEgg />
      </section>
      <ThemeSwitcher
        style={{ position: "fixed", zIndex: 30, bottom: "1rem", left: "1rem" }}
      />
    </>
  );
}
