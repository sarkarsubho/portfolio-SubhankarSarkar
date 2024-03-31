"use client";

import Image from "next/image";
import NavbarMenu from "./NavbarMenu";
import MobileToggle from "../MobileToggle";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import { FileDown } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();

  console.log(theme);

  return (
    <div className="w-full flex justify-between bg-[#c7c7c7] dark:bg-[#32323b] items-center sticky top-0 py-2 md:px-8 z-30">
      <MobileToggle />

      <div className="drop-shadow-lg bg-gray">
        <Image src="/logo.png" width={120} height={10} alt="logo" />
      </div>

      <NavbarMenu cls="hidden" />

      <div className="flex gap-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a target="_blank" href="/SubhankarSarkarResume.pdf" download>
                <Button
                  variant="icon"
                  onClick={() => window.open("/SubhankarSarkarResume.pdf")}
                >
                  <FileDown />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Resume</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>{theme === "dark" ? "Move to light" : "Move to dark"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Navbar;
