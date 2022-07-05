import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "../components/Container";
import Project from "../components/Project";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse justify-between sm:flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl sm:text-5xl mb-1 text-black dark:text-white">
            Vlad Cuciureanu
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            Full-Stack Developer at{" "}
            <span className="font-semibold">Cloudflight</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Audiophile. Bookworm. Geek. A highly motivated individual <br />
            who is eager to learn and experience new things. <br />
            Blessed husband of a wonderful, brilliant woman.
          </p>
        </div>
        <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-0">
          <Image
            alt="Vlad Cuciureanu"
            height={176}
            width={176}
            src="https://res.cloudinary.com/vladinski-md/image/upload/avatar.jpg"
            className="rounded-full"
          />
        </div>
      </div>
      <h3 className="font-bold text-2xl sm:text-4xl tracking-tight mb-6 text-black dark:text-white">
        Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 flex-wrap flex-col sm:flex-row justify-between w-full gap-8 max-w-2xl max-h-full h-full">
        <Project
          name="Lyra"
          color="green"
          year="2022"
          link="https://github.com/VladCuciureanu/Lyra"
        >
          Lyra is an opensource, self-hosted music streaming service that allows
          you to take your music collection anywhere.
        </Project>
        <Project
          name="Hymn"
          color="purple"
          year="TBD"
          link="https://github.com/VladCuciureanu/Hymn"
        >
          Open-source, non-profit, free-access christian music tabs repository
          with user friendliness and ease of use in mind.
        </Project>
        <Project
          name="Garlic Bread"
          color="blue"
          year="2021 (Archived)"
          link="https://github.com/VladCuciureanu/GarlicBread"
        >
          Do you like Garlic bread? Is your sense of humor similar to that of an
          neanderthal? If so, check out this tasty Discord bot!
        </Project>
        <Project
          name="CatFetch"
          color="red"
          year="2021"
          link="https://github.com/VladCuciureanu/CatFetch"
        >
          Ok hear me out guys... Cats. In terminals.
        </Project>
      </div>
      <Link href="https://github.com/VladCuciureanu">
        <a className="flex mt-8 mb-4 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
          View all projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 ml-1 mt-[0.175rem]"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </a>
      </Link>
    </Container>
  );
};

export default Home;
