import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Full Stack Discord Clone",
    description:
      "An app like Discord for creating servers, channels, text/audio/video communication, managing members, and supporting one-on-one/group chats with Livkit SDK.",
    images: [
      {
        url: "https://camo.githubusercontent.com/c6193fa3c4587ebfb70a30ed42ff8e23f42ed544cbce8bc8078cde07dd1f1d2b/68747470733a2f2f692e696d6775722e636f6d2f49324f487233512e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/5a7bbe0e8cbcec48cf111ee662f220b0b232b946584a4cef4c8043f1379691f1/68747470733a2f2f692e696d6775722e636f6d2f37656378696c462e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/ef6951afcbcec9fa53d3838afe1be783252ee3101306b27596766fcc31bbba49/68747470733a2f2f692e696d6775722e636f6d2f4a3368786766582e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/7f44768a09529a0e479c75c5c9364a4aff4998f2b39d5be67323ff6546323137/68747470733a2f2f692e696d6775722e636f6d2f537869563674452e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/2c3a398d97e8627a9700c6452c0007574774a4ccc26ca008d9acddd722604c23/68747470733a2f2f692e696d6775722e636f6d2f45786d6c6352762e706e67",
      },
    ],
    technologies: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Clerk Auth",
      "Socket.IO",
      "shadecn/ui",
    ],
    github: "https://github.com/spsanchore13/next.js-discord-clone",
    live: "https://next-js-discord-clone.vercel.app/",
  },
  {
    id: 2,
    title: "Full Stack AI Saas App",
    description:
      "AI SaaS: OpenAI-powered app for chat, code generation, image/audio/video creation. Sign up, pay via Stripe, with chat support from Crisp.",
    images: [
      {
        url: "https://camo.githubusercontent.com/57859c50128d5604a9b883213c31db3bce117997375c602f780ff8819d59d586/68747470733a2f2f692e696d6775722e636f6d2f49687050396a332e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/9d8afbdd6141d5f53780ecb0dd0b0f4aa12cc65a1243230a9f6c495f83e51b71/68747470733a2f2f692e696d6775722e636f6d2f71726f51736c352e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/322a7158c22608ae3e2721bf33d6d6b5b00b8c4b4fc8c03b5d4e3a5e5f5c23fb/68747470733a2f2f692e696d6775722e636f6d2f766a54344235512e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/c2d460119c32850b122582bd9ea20012c893af2e3b8c4af726c54740b5cbde39/68747470733a2f2f692e696d6775722e636f6d2f4f37725963757a2e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/8e178ed82925dadb3f5ef143ef0f6a6c5fe56d26f30c78f9ea53c76bcbad81f2/68747470733a2f2f692e696d6775722e636f6d2f34576d76424f702e706e67",
      },
    ],
    technologies: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Clerk Auth",
      "Tailwind Css",
      "Crisp Chat",
      "OpenAI",
      "DALL.E",
      "Replicate AI",
    ],
    github: "https://github.com/spsanchore13/next-js-ai-saas",
    live: "https://next-js-ai-saas.vercel.app/",
  },
  {
    id: 3,
    title: "Next.js Car Showcase",
    description:
      "Car Showcase Next.js App: A visually appealing platform showcasing car models, built with Next.js for seamless user experience.",
    images: [
      {
        url: "https://camo.githubusercontent.com/b97424a72b3b4109bbaed43615f69797498bb28ad7200335f58a22570a9f20a4/68747470733a2f2f692e696d6775722e636f6d2f7478665a5666312e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/e8be6257b6e978e4405a2677087ae5b4630b5964c036297713a49d338d108d53/68747470733a2f2f692e696d6775722e636f6d2f34666e4350547a2e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/b9e7a284ea3cbb5fe286c5eb804b456258dcb5db2c6ae680e1f6b747282a75aa/68747470733a2f2f692e696d6775722e636f6d2f7370544e5056592e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/b775734612b18c6021a7b2ec1f839b712a7892c5205bd57a38df0c186a1c5545/68747470733a2f2f692e696d6775722e636f6d2f5959735639436f2e706e67",
      },
    ],
    technologies: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "TypeScript",
      "React.js",
      "Next.js",
      "Headless UI",
      "Rapid Car API",
    ],
    github: "https://github.com/spsanchore13/next-js-cars-showcase",
    live: "https://next-js-cars-showcase.vercel.app/",
  },
  {
    id: 4,
    title: "Full Stack Bettermart Ecommerce",
    description:
      "Bettermart: E-commerce platform for daily life essentials like clothes, shoes, etc. Razorpay integrated for seamless payment transactions.",
    images: [
      {
        url: "https://camo.githubusercontent.com/8d18ebe0b8d5746e1b1335c0e0f2300e8f203528bd55d6834669879bd91bac12/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6469646177747a62662f696d6167652f75706c6f61642f76313636383335393832312f315f6f69793665692e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/78b9df98c651b0456d6a3eb07c94996d2e836c87817a303f08eacbe2aab1ab07/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6469646177747a62662f696d6167652f75706c6f61642f76313636383335393930302f325f776f707275732e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/ad6ecb15c9fa63c2a9af6a62dc037f2a2a308cc2eb55438d5e7691c42a4ba1b9/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6469646177747a62662f696d6167652f75706c6f61642f76313636383335393839382f335f686e377a69652e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/7e6f448f117702fc28f89a5fdf9a3cdeebe7aaf73db985a7ff78f93c7e926b71/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6469646177747a62662f696d6167652f75706c6f61642f76313636383335393930322f345f6a78757a6d312e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/ab63a40ef18e4c2690c1de4e10a53ab12944154954466ecc7cb3225b54001b58/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6469646177747a62662f696d6167652f75706c6f61642f76313636383335393839382f355f6c776a7666372e706e67",
      },
    ],
    technologies: [
      "HTML",
      "CSS",
      "Chakra UI",
      "JavaScript",
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/spsanchore13/spicy-muscle-8472",
    live: "https://bettermart-eight.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full p-10">
      <h1 className="text-3xl text-center">
        My <span className="text-teal-400">Projects</span>
      </h1>

      <div className="flex justify-between flex-wrap mt-10 gap-10">
        {projectsData.map((project, i) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
