"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="p-10">
      <h1 className="text-3xl text-center">
        Let's <span className="text-teal-400">Connect</span>
      </h1>

      <div className="flex flex-col gap-y-5 justify-center items-center p-10">
        <h1 className="text-5xl">Shantilal Patliya</h1>
        <p className="text-3xl">shantilalpatliya18@gmail.com</p>
        <p className="text-2xl">+91 9784102014</p>

        <div className="flex gap-4">
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/spsanchore13/")
            }
          >
            <Linkedin />
          </button>
          <button
            onClick={() => window.open("https://github.com/spsanchore13")}
          >
            <Github />
          </button>
          {/* <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/u/0/?to=shantilalpatliya18@gmail.com&compose=new#inbox?compose=GTvVlcRwQZlfqfnQwmnrDGcjsdKcFSQcXjBbKLwNfQNvmpFpblWKCVKfGxVNbRhdZjdCxjBSfFtFB"
              )
            }
          >
            <Mail />
          </button> */}
          <button
            onClick={() => window.open("https://twitter.com/spsanchore13")}
          >
            <Twitter />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
