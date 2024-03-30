"use client";

import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";

import Image from "next/image";
import GithubSummery from "./GithubSummery";

const GithubStats = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 14;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <>
      <div id="github" className="w-full p-5 md:p-10">
        <h1 className="text-3xl text-center mb-10">
          Github <span className="text-teal-400">Stats</span>
        </h1>

        <div className="w-full flex justify-center items-center">
          <GitHubCalendar
            //   transformData={selectLastHalfYear}
            data-tooltip-id="calender"
            username="sarkarsubho"
          >
            <ReactTooltip
              delayShow={10}
              id="calender"
              place="bottom"
              variant="info"
              content="hello"
            />
          </GitHubCalendar>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 mt-3">
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=sarkarsubho"
            alt="github streak"
          />

          {/* <img
            src="https://github-readme-stats.vercel.app/api?username=sarkarsubho"
            alt="github stats"
          /> */}
        </div>
      </div>
      <GithubSummery />
    </>
  );
};

export default GithubStats;
