import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Full Stack Todo Application",
    description:
      "A todo application where the user can register himself and can log in along with the ability to create, read, update and Delete his todos and also can view the status of progress of all.",
    images: [
      {
        url: "https://camo.githubusercontent.com/f6d346fc0f1faf9b16b15b54772c81d3bd22c10df3fd83ad4a6c69f881f005c8/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a656e48707336594a54474a385a4b4c3151416d5447412e77656270",
      },
      {
        url: "https://camo.githubusercontent.com/87e606760a8178200bea3cc49e663abb102a57a1cf5f5c3e081e962da7c964df/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a73684b5971714150544662303264755f4d637a4b5a772e77656270",
      },
      {
        url: "https://camo.githubusercontent.com/8dc6a397edae0bb99b22c4a0c6e79ff8687525310520aba0f1aa72ee903bbe03/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a63495a6453595552754243687857374f79386d4466672e77656270",
      },
      {
        url: "https://camo.githubusercontent.com/76cd6c3134fb2ef8acdd16b5b7430b2349964b1f9ff16df488d3b76668609b53/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a486a45363269546450576173776b52362d4d577269512e77656270",
      },
      {
        url: "https://camo.githubusercontent.com/a9c4b35671e2924db96f3e6ce206acd6078b96e5cfd181d0bbb06e95343fa247/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a645a77435f785830454c644569424771526b435045772e77656270",
      },
    ],
    technologies: [
      "HTML",
      "CSS",
      "ChakraUI",
      "JavaScript",
      "React.js",
      "Redux.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "mongoose",
    ],
    github: "https://github.com/sarkarsubho/FullStackTodo",
    live: "https://full-stack-todo-mauve.vercel.app/",
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
