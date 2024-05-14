import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import { FaAward } from "react-icons/fa"; // Using FaAward for achievement icon

const achievements = [
  {
    title: "Award 1",
    description: "Description of Award 1",
  },
  {
    title: "Award 2",
    description: "Description of Award 2",
  },
  {
    title: "Award 3",
    description: "Description of Award 3",
  },
  // Add more achievements as needed
];

function Page() {
  return (
    <div className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0 ">
      <div className="lg:p-6 p-2 max-md:p-5 ">
        <div className="dark:bg-neutral-800 bg-[#F1F4F8] leading-8 rounded-lg p-4 flex flex-col lg:flex-row gap-x-11">
          <div className="lg:border-r-2 lg:pr-8">
            <p className="text-lg font-bold">My Achievements: 🏆</p>
            <div className="flex flex-col lg:flex-row">
              {/* Render achievements dynamically */}
              {achievements.map((achievement, index) => (
                <div key={index} className="text-lg">
                  {index + 1}. {achievement.title}
                </div>
              ))}
            </div>
          </div>
          <div>
            {achievements.map((achievement, index) => (
              <div key={index}>
                <div>
                  <p className="text-lg font-bold">{achievement.title}</p>
                  <p className="text-lg">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 p-2">
          <div className="bg-[#2d2f30] p-6 mt-4 rounded-md">
            <div className="text-center">
              <span className="text-neutral-700 dark:text-neutral-400">
                © 2024 Elsarita – elrizah@gmail.com
              </span>
              <p className="text-neutral-500">
                By{" "}
                <span className="hover:underline hover:text-neutral-400 text-neutral-700 dark:text-neutral-300">
                  kooya3
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
