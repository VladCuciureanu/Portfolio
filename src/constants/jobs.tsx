import { Job } from "@/types/job";

export const Jobs: Job[] = [
  {
    position: "Founding Full-Stack Engineeer",
    company: { name: "SAEKI Robotics", href: "https://saeki.ch" },
    startDate: new Date("11-18-2024"),
    tags: [
      "Next.js",
      "React",
      "Express",
      "Postgres",
      "Redis",
      "CI/CD",
      "Node.js",
    ],
    description: (
      <ul>
        <li>
          {`Led the end-to-end development of scalable full-stack applications, designing and implementing both front-end and back-end systems for robotics solutions that improved operational efficiency by 30%.`}
        </li>
        <li>
          {`Collaborated with cross-functional teams (hardware, AI, and firmware engineers) to build integrated software systems, ensuring seamless communication between robotics hardware and cloud-based platforms.`}
        </li>
        <li>
          {`Optimized performance and scalability of applications by utilizing cutting-edge technologies and frameworks, resulting in a 25% reduction in system downtime and enhanced user experience for robotic operators.`}
        </li>
      </ul>
    ),
  },
  {
    position: "Full-Stack Engineeer",
    company: { name: "Vocode (YC W23)", href: "https://vocode.dev" },
    startDate: new Date("01-01-2024"),
    endDate: new Date("06-29-2024"),
    tags: [
      "Next.js",
      "React",
      "GraphQL",
      "Python",
      "Postgres",
      "Redis",
      "CI/CD",
      "Node.js",
    ],
    description: (
      <ul>
        <li>
          Developed a user-facing dashboard with Next.js and Apollo, enabling
          non-technical users to seamlessly interact with our core product.
        </li>
        <li>
          Implemented a GraphQL API layer with Strawberry and Pydantic to
          streamline and enhance developer productivity.
        </li>
        <li>
          Transitioned our core API from Supabase to plain PostgreSQL, ensuring
          easier deployment and scalability for our infrastructure.
        </li>
        <li>
          Developed the company&apos;s website using Next.js, ensuring a fast,
          responsive, and dynamic user experience tailored to our brand.
        </li>
      </ul>
    ),
  },
  {
    position: "Full-Stack Engineeer",
    company: {
      name: "Unicef",
      href: "https://unicef.org",
    },
    startDate: new Date("12-01-2022"),
    endDate: new Date("01-29-2024"),
    tags: [
      "React",
      "WebSocket",
      "Node.js",
      "Distributed Systems",
      "Redis",
      "Postgres",
      "Azure",
      "CI/CD",
      "SASS",
      "NestJS",
    ],
    description: (
      <ul>
        <li>
          Developed a responsive Figma-like web app with React, improving UI/UX
          and digitizing internal processes.
        </li>
        <li>
          Designed scalable microservices for a web app, ensuring flexibility
          and resilience.
        </li>
        <li>
          Built RESTful APIs in Node.js and Express.js for microservice
          communication.
        </li>
        <li>
          Implemented async messaging (e.g., Kafka, RabbitMQ) for responsive,
          decoupled microservice communication.
        </li>
        <li>
          Integrated JWT-based authentication and authorization (RBAC)
          mechanisms to secure user interactions across microservices.
        </li>
        <li>Leveraged Docker for efficient containerization and deployment.</li>
        <li>
          Used CI/CD pipelines (e.g., Jenkins, GitLab CI) for automated testing,
          building, and deploying microservices, ensuring continuous
          integration.
        </li>
        <li>
          Conducted load testing and tuned performance to optimize
          responsiveness and scalability under diverse workloads.
        </li>
      </ul>
    ),
  },
  {
    position: "Full-Stack Engineeer",
    company: { name: "Blum", href: "https://blum.com" },
    startDate: new Date("11-01-2021"),
    endDate: new Date("12-29-2022"),
    tags: [
      "Vue.js",
      "Embedded Software",
      "Linux",
      "Java",
      "Spring Framework",
      "CI/CD",
    ],
    description: (
      <ul>
        <li>
          Enhanced system stability by optimizing Linux kernel modules, reducing
          system crashes by 30%.
        </li>
        <li>
          Streamlined adapter development for new catalog items, cutting
          integration time by 60%.
        </li>
        <li>
          Improved boot speed by refining startup scripts, reducing boot time by
          50%.
        </li>
      </ul>
    ),
  },
  {
    position: "Full-Stack Engineeer",
    company: { name: "Porsche", href: "https://www.porscheengineering.com" },
    startDate: new Date("12-01-2020"),
    endDate: new Date("11-29-2021"),
    tags: ["Angular", "Postgres", "SOAP", "Java", "CI/CD", "Drools", "Tomcat"],
    description: (
      <ul>
        <li>
          Developed and optimized the price calculation SOAP API for Volkswagen,
          Porsche, and Audi car configurators.
        </li>
        <li>
          Integrated new products into the price calculation API, ensuring
          accurate and up-to-date pricing across all configurators.
        </li>
        <li>
          Expanded upon the existing DROOLS codebase in order to give
          non-technical analysts access to more functions.
        </li>
      </ul>
    ),
  },
  {
    position: "Full-Stack Engineeer",
    company: { name: "Cloudflight", href: "https://cloudflight.io" },
    startDate: new Date("10-01-2020"),
    endDate: new Date("12-29-2020"),
    tags: [
      "React",
      "Node.js",
      "WebSocket",
      "PWAs",
      "Redis",
      "Postgres",
      "CI/CD",
    ],
    description: (
      <ul>
        <li>
          Developed real-time notifications with WebSockets, boosting task
          update visibility and enabling multiplayer capacities.
        </li>
        <li>
          Implemented offline functionality in the PWA, ensuring uninterrupted
          access.
        </li>
        <li>
          Integrated advanced search features, improving task retrieval speed.
        </li>
      </ul>
    ),
  },
  {
    position: "Full-Stack Engineeer",
    company: { name: "Vodafone", href: "https://vodafone.com" },
    startDate: new Date("08-01-2020"),
    endDate: new Date("10-29-2020"),
    tags: [
      "Angular",
      "Redis",
      "RxJS",
      "Postgres",
      "Apache Kafka",
      "Kotlin",
      "CI/CD",
    ],
    description: (
      <ul>
        <li>
          Developed a front-end MVP using Angular and RXJS for monitoring
          real-time data streams from factory sensors.
        </li>
        <li>
          Optimized a critical microservice by refactoring code, improving
          efficiency and scalability while reducing maintenance overhead.
        </li>
      </ul>
    ),
  },
];
