import Link from "next/link";
import React from "react";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineDribbble, AiOutlinePlusCircle } from "react-icons/ai";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

const links = [];

function page() {
  return (
    <div className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0 ">
      <div className=" lg:p-6 p-2 max-md:p-5 ">
      <div className="dark:bg-neutral-800 bg-[#F1F4F8] leading-8 rounded-lg p-4 flex flex-col lg:flex-row gap-x-11">
  <div className="lg:border-r-2 lg:pr-8">
    <p className="text-lg font-bold">Let's Meet My Hobbies: 🛠️</p>

    </div>
  </div>
  <div>
    <div>
    <div className="flex flex-col lg:flex-col gap-2">
      <p className="text-lg">1. Swimming</p>
      <p className="text-lg">2. Boating</p>


      {/* <p className="text-lg font-bold">Swimming</p>
      <p className="text-lg">I love swimming as it refreshes my mind and keeps me active.</p> */}
    </div>
    <div className="flex flex-col lg:flex-col gap-2">
      <p className="text-lg">3. Skiing</p>
      <p className="text-lg">4. Cycling</p>
     {/*  <p className="text-lg font-bold">Skiing</p>
      <p className="text-lg font-bold">Boating</p>
      <p className="text-lg">Boating is my way of unwinding and enjoying the serenity of the water.</p> */}
    </div>
    <div>
     {/*  <p className="text-lg font-bold">Cycling</p>
      <p className="text-lg">Cycling allows me to explore new places and stay fit at the same time.</p> */}
    </div>
  </div>
</div>



        <div className="px-4">
          <div className="drop-shadow-md  mt-8">
            <img
              className="w-12 h-12 object-cover rounded-full "
              src="/img/img4.png"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-4xl font-InterBo my-5">Hobbies</h1>
            <p className="text-lg dark:text-neutral-300  text-neutral-900">
              Exploring hobbies is as essential as exploring new technologies. Here's a glimpse of what I love to do in my free time.
            </p>

            <div className="border-neutral-300 mt-5 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md max-sm:flex-col flex items-center gap-x-1 ">
                {/* <button className="text-neutral-700 dark:text-white  text-sm font-semibold">
              View All 
              </button> 
              <FiArrowRight className="text-neutral-500" />*/}
            </div>

            <div className="mt-8">
              <img
                className="aspect-square rounded-lg"
                src="/img/ski.jpeg"
                alt=""
              />
              <p className="my-5 text-lg dark:text-neutral-300  text-neutral-900">
                Skiing allows me to embrace the thrill of the mountains and connect with nature in its purest form.
              </p>

              <img
                className="aspect-square rounded-lg"
                src="/img/bike.jpeg"
                alt=""
              />

              <h3 className="text-lg my-6 font-InterBo">
                The Problems to Solve
              </h3>
              <p className="text-lg dark:text-neutral-300  text-neutral-900">
                Cycling through challenging terrains not only tests my physical endurance but also rejuvenates my spirit.
              </p>

              <img
                className="aspect-square rounded-lg my-7"
                src="/img/boat1.jpeg"
                alt=""
              />

              <h3 className="text-lg my-6 font-InterBo">Our Solution</h3>
              <p className="text-lg dark:text-neutral-300  text-neutral-900">
                Boating offers me moments of tranquility and allows me to escape the hustle and bustle of everyday life.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#F6F8FA] mt-11 dark:bg-[#2C2C2C] p-6 max-md:p-3 rounded-xl">
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                  Projects
                </h1>
              </div>

              <div className="border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md max-sm:flex-col flex items-center gap-x-1 ">
                <button className="text-neutral-700 dark:text-white  text-sm font-semibold">
                  View All
                </button>
                <FiArrowRight className="text-neutral-500" />
              </div>
            </div>
            <div className="mt-6">
              <div className="cursor-pointer">
                {links.map((link, indx) => (
                  <div
                    key={link.href}
                    className="bg-white dark:bg-[#373737] mt-3  mb-4 rounded-xl  max-md:flex-col max-md:items-start flex items-center justify-between p-5 dark:border-neutral-600  shadow-md drop-shadow-md dark:border max-md:p-7 "
                  >
                    <Link href={link.href}>
                      <div className="flex items-center gap-x-4 max-md:flex-col max-md:items-start">
                        <div className="drop-shadow-md">
                          <img
                            className="w-10 h-10 object-cover rounded-full "
                            src={link.img}
                            alt=""
                          />
                        </div>

                        <div className="max-md:mt-5">
                          <h1 className="text-xl font-InterMe ">
                            {link.title}
                          </h1>
                          <p className="text-lg text-neutral-400 max-md:my-1">
                            {link.subtitle.map((subt) => (
                              <span key={subt}>{subt}</span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </Link>

                    <div className="max-md:hidden md:block">
                      <BsChevronRight />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 p-2">
          <div className="mx-auto max-w-md">
            <div>
              <h2 className=" text-4xl text-center dark:text-white text-[#353849] font-InterBo">
                Let’s work together.
              </h2>
              <p className="text-center mt-3 dark:text-neutral-300 text-[#666D80] text-lg">
                Creating user experience and visual appealing design
              </p>
            </div>

            <div className="">
              <div className="flex items-center gap-x-4 justify-center mt-6">
                <div className="bg-black dark:bg-[#373737] w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                  <AiOutlinePlusCircle className="text-white tex-3" />
                  <span className="text-white  font-semibold">Hire Me</span>
                </div>
                <div className="border-neutral-300 shadow-md border dark:border-neutral-700  w-fit h-8 px-2 rounded-md flex items-center gap-x-2 ">
                  <FiCopy className="" />
                  <span className="text-neutral-700  dark:text-white font-semibold">
                    Copy Email
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F6F8FA] p-6 dark:bg-[#2C2C2C]  mt-14 rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                  Follow Me
                </h1>
              </div>

              <div className="flex gap-x-2">
                <div className="border-neutral-300 bg-white dark:bg-[#373737] dark:border-none shadow-md drop-shadow-md border  w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                  <CiTwitter className="text-neutral-500 dark:text-white" />
                </div>
                <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                  <CiInstagram className="text-neutral-500 dark:text-white" />
                </div>{" "}
                <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex justify-center items-center  gap-x-1 ">
                  <AiOutlineDribbble className="text-neutral-500 dark:text-white" />
                </div>
                <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1  ">
                  <FaLinkedinIn className="text-neutral-500 dark:text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2d2f30] p-6  mt-4 rounded-md">
            <div className="text-center">
              <span className="text-neutral-700 dark:text-neutral-400">
              © 2024 Elsarita – elrizah@gmail.com
              </span>
              <p className="text-neutral-500">
                By{" "}
                <span className="hover:underline  hover:text-neutral-400 text-neutral-700 dark:text-neutral-300">
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

export default page;

