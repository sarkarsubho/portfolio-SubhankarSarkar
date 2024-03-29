import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const date = new Date();

  return (
    <div className="w-full mt-10">
      <Separator />

      <div className="w-full flex justify-center items-center p-2 font-semibold">
        <p>Made With</p>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20Exclamation.png"
          alt="Heart Exclamation"
          width="50"
          height="50"
        />
        <p>By subhankar Sarkar ©️{date.getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
