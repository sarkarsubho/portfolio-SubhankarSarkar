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
    title: "Buffer Clone",
    description:
      "Buffer is a software application for the web and mobile, designed to manage accounts in social networks, by providing the means for a user to schedule posts to Twitter, Facebook, Instagram, Instagram Stories, Pinterest, and LinkedIn, as well as analyze their results and engage with their community",
    images: [
      {
        url: "https://camo.githubusercontent.com/78db7fd9132195366cee406c5c1368ba6aab08d75febfe2f3886adcb88121382/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3730302f312a35454741706e5761477a616d36514665626e667656672e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/20a042cff9ad0f0624c48a99151a487bdba803762c15ab32c47fea0f627ba934/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a4468684839483447325f587170547952694d396130512e706e67",
      },
      {
        url: "https://camo.githubusercontent.com/9d9b12d46c9effaa5e26c27c16114c0b7c8b574d543e3913827a43466e375d6b/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a45343130644f6b51426574712d307a506d2d43664a512e706e67",
      },
    ],
    technologies: [
      "HTML",
      "CSS",
      "Chakra UI",
      "JavaScript",
      "React.js",
      "Redux",
    ],
    github: "https://github.com/sarkarsubho/gaping-spring-1880",
    live: "https://gaping-spring-1880.vercel.app/",
  },
  {
    id: 3,
    title: "Media.net replica",
    description: "The replica of the media.net company's homepage.",
    images: [
      {
        url: "https://camo.githubusercontent.com/dc8a31e02fee4646f18fce445c41cbc204ae58347eeecf0979f0b82b2f2cc07b/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a5f3272626475446e7531537a52446a4e7233446338412e77656270",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/spsanchore13/next-js-cars-showcase",
    live: "https://next-js-cars-showcase.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full p-10">
      <h1 className="text-3xl text-center">
        My <span className="text-teal-400">Projects</span>
      </h1>

      <div className="flex justify-around flex-wrap mt-10 gap-10">
        {projectsData.map((project, i) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
