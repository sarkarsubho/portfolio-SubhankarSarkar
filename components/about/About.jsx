import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full p-10">
      <h1 className="text-3xl text-center">
        Who <span className="text-teal-400">I'am</span>
      </h1>

      <div className="flex flex-col gap-10 lg:flex-row p-5 md:p-10 justify-evenly items-center">
        <Image
          src="https://i.imgur.com/oxFfytk.png"
          className="object-contain rounded-full border  border-gray-100"
          width={350}
          height={350}
          alt="image"
        />

        <div className="lg:w-[50%]">
          <p className="text-xl md:text-2xl tracking-widest">
            Highly skilled Full Stack Developer with 1 year of experience in
            developing and managing web applications, including testing with
            Cypress and Jest. Proficient in both front-end and back-end
            technologies including HTML, CSS, JavaScript, React, Node.js, and
            Express.js. Strong knowledge of database management systems such as
            MongoDB and SQL.
          </p>
        </div>
      </div>

      <h1 className="text-3xl text-center">
        Edu<span className="text-teal-400">cation</span>
      </h1>

      <div className="flex justify-center items-center p-10">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-10">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-4 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 ml-2 text-lg  text-gray-900 dark:text-white">
              Full Stack MERN Development (Full-Time)
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                Latest
              </span>
            </h3>

            <p className="mb-2 ml-2  text-base font-normal text-gray-500 dark:text-gray-400">
              Masai School Bengluru
            </p>
            <time className="block mb-2 ml-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2022 - Jan 2023
            </time>
          </li>
          <li className="mb-10 ml-10">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-4 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 ml-2 text-lg  text-gray-900 dark:text-white">
              Computer Science & Engineering
            </h3>

            <p className="mb-2 ml-2 text-base font-normal text-gray-500 dark:text-gray-400">
              Rajasthan Technical University Kota
            </p>
            <time className="block mb-2 ml-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              July 2015 - July 2019
            </time>
          </li>
          <li className="mb-10 ml-10">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-4 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 ml-2 text-lg  text-gray-900 dark:text-white">
              12<sup>th</sup> Science Maths
            </h3>

            <p className="mb-2 ml-2 text-base font-normal text-gray-500 dark:text-gray-400">
              Gayatri Vidhya Mandir Sanchore
            </p>
            <time className="block mb-2 ml-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              July 2014 - July 2015
            </time>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default About;
