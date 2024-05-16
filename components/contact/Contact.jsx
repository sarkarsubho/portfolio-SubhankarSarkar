"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TbPlugConnectedX } from "react-icons/tb";

const Contact = () => {
  return (
    <div id="contact" className="p-10 max-w-4xl m-auto md:text-lg">
      <h1 className="text-3xl text-center mb-8 flex justify-center gap-2">
        Let's{" "}
        <span className="text-teal-400 flex gap-2 ">
          Establish a Connection <TbPlugConnectedX fontSize={"40px"} />{" "}
        </span>
      </h1>
      <h1 className="text-3xl ">
        Contact <span className="text-teal-400">.info={"{"} </span>
      </h1>
      <div className="flex flex-col gap-y-5 justify-center items-center p-2">
        <h1 className="text-2xl sm:text-3xl">
          name : <span className="text-teal-400"> Subhankar Sarkar </span>
        </h1>

        <h1 className="text-2xl sm:text-3xl ">
          @email : <span className="text-teal-400"> sarkarsaby@gmail.com </span>
        </h1>

        <h1 className="text-2xl sm:text-3xl">
          @mobile : <span className="text-teal-400"> 7031872272 </span>
        </h1>
        <h1 className="text-2xl sm:text-3xl flex gap-4">
          <span>WhatsApp :</span>

          <span className="text-teal-400">
            <a
              href="https://wa.me/+917031872272"
              className="flex gap-2 align-center"
            >
              <span className="pt-1">
                <FaWhatsapp />
              </span>
              <span>7031872272</span>
            </a>
          </span>
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/dev-subhankar-sarkar/")
            }
          >
            <Linkedin />
          </button>
          <button onClick={() => window.open("https://github.com/sarkarsubho")}>
            <Github />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/u/0/?to=sarkarsaby@gmail.com&compose=new#inbox?compose=GTvVlcRwQZlfqfnQwmnrDGcjsdKcFSQcXjBbKLwNfQNvmpFpblWKCVKfGxVNbRhdZjdCxjBSfFtFB"
              )
            }
          >
            <Mail />
          </button>
          {/* <button
            onClick={() => window.open("https://twitter.com/Subhank81308397")}
          >
            <Twitter />
          </button> */}
          <button onClick={() => window.open("https://wa.me/+917031872272")}>
            <FaWhatsapp fontSize={"25px"} />
          </button>
        </div>
      </div>
      <h1 className="text-3xl ">
        <span className="pl-40 text-teal-400">{"};"} </span>
      </h1>
    </div>
  );
};

export default Contact;
