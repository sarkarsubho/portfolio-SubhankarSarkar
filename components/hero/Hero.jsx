import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// import myResume from "@/public/Shantilal_Resume.pdf";

const Hero = () => {
  const iconMap = [
    {
      title: "Github",
      icon: <FaGithub size="24px" className="hover:text-gray-400" />,
      url: "https://github.com/sarkarsubho",
    },
    {
      title: "Linkedin",
      icon: <FaLinkedin size="24px" className="hover:text-gray-400" />,
      url: "https://www.linkedin.com/in/dev-subhankar-sarka",
    },
    {
      title: "Twitter",
      icon: <FaTwitter size="24px" className="hover:text-gray-400" />,
      url: "https://twitter.com/Subhank81308397",
    },
    {
      title: "Resume",
      icon: <FileDown size="24px" className="hover:text-gray-400" />,
      url: "/Shantilal_Resume.pdf",
    },
  ];

  return (
    <div className="mt-10 relative md:mt-0 md:h-screen flex flex-col  md:flex-col xl:flex-row justify-evenly items-center ">
        <div>
        <Image
          src="/Earth.gif"
          width={250}
          className="w-80 "
          height={400}
          alt="image"
        />
      </div>
      <div className="flex flex-col justify-center gap-3 align-middle text-center">
        <h2 className="text-blue-500 text-6xl">Hello World ;</h2>
        <p className="p-2 text-3xl"> Hi, It's Me</p>

        <h1 className="text-6xl md:text-7xl font-extrabold relative text-transparent bg-gradient-to-r from-teal-500 from-10% via-teal-500 via-30% to-emerald-500 to-90% bg-clip-text">
          {"<Subhankar Sarkar>"}
        </h1>
        <p className="p-2 text-2xl md:text-4xl">
          Full Stack Software Engineer(React/Express)
        </p>

        <div className="flex flex-row gap-5 p-2 justify-center">
          {iconMap.map((icon, i) => (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href={icon.url}
                    download={icon.title === "Resume" ? true : false}
                    target="_blank"
                  >
                    <Button variant="icon" key={i}>
                      {icon.icon}
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{icon.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default Hero;

// https://i.imgur.com/oxFfytk.png
