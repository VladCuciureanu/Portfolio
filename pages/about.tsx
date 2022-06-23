import type { NextPage } from "next";
import Link from "next/link";

import Container from "../components/Container";
import TopTracks from "../components/TopTracks";

const About: NextPage = () => {
  return (
    <Container>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
        About Me
      </h1>
      <div className="mt-6 mb-4 prose dark:prose-dark leading-6">
        <h2>Bio</h2>
        <p>
          I’m a Full-Stack Developer located in Cluj-Napoca. I have a serious
          passion for tinkering, software development and creating immersive,
          dynamic user experiences.
        </p>
        <p>
          Well-organised person, problem solver, responsible employee with high
          attention to detail. Audiophile, bookworm, geek, fan of alternative
          genres of music.
        </p>
        <p>
          Blessed husband of a wonderful, brilliant woman. Interested in the
          entire development spectrum and working on ambitious projects with
          positive people.
        </p>
        <h2 className="mt-8">Links</h2>
        <ul>
          <li>
            GitHub:{" "}
            <a href="https://github.com/VladCuciureanu">@VladCuciureanu</a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/vladcuciureanu/">
              @VladCuciureanu
            </a>
          </li>
          <li>
            Twitter:{" "}
            <a href="https://twitter.com/VladinskiDev">@VladinskiDev</a>
          </li>
          <li>
            Website:{" "}
            <Link href="https://vladinski.md">
              <a>https://vladinski.md</a>
            </Link>
          </li>
        </ul>
        <h2 className="font-bold tracking-tight mt-8 text-black dark:text-white">
          Top Tracks
        </h2>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Curious what I&apos;m currently jamming to? Here&apos;s my top tracks on
        Spotify updated monthly.
      </p>
      <TopTracks />
    </Container>
  );
};

export default About;
