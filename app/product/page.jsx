"use client";

import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { AiOutlinePlusCircle, AiOutlineDribbble } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLocationArrow1, CiTwitter, CiInstagram } from "react-icons/ci";
import { motion } from "framer-motion";

const links = [
  {
    img: "/img/wink.png",
    title: "Rectangle",
    subtitle: ["Product design, Icon design"],
    icon: <BsChevronRight />,
  },
  {
    img: "/img/wink.png",
    title: "Morva labs",
    subtitle: ["Visual design, Branding"],
  },
  {
    img: "/img/foot.png",
    title: "Simply",
    subtitle: ["Landing  page, illustration design"],
  },
  {
    img: "/img/img4.png",
    title: "Glassdoor",
    subtitle: ["Icons design, illustration design"],
  },
];

const projects = [  {
  img: "/img/wink.png",
  title: "Cisco Certified Network Associate",
  subtitle: "(AFRALTI): ID 08653Crede",
},
{
  img: "/img/foot.png",
  title: "Forklift Certification",
  subtitle: "Toyota Material Handling Norway T1, T4",
},
];

function page() {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0, transition: { duration: 0.4 } }}
      className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0 "
    >
      <div className=" lg:p-6 p-4 max-md:p-5 ">
        <div className="flex items-center mt-4 px-6  gap-x-2 ">
          <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
          <h1 className="text-neutral-700   dark:text-[#C0C0C0] text-lg font-InterMe">
            Achievements
          </h1>
        </div>

        <div className=" mt-7 md:px-6 p-2 ">
          <h1 className="text-4xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800">
            Explore My Laurels
          </h1>
          <p className="text-neutral-700 text-base my-7 leading-8 font-InterRe dark:text-[#C0C0C0]">

          Hi, I'm Elsarita Njoki Oulie, and welcome to my dedicated corner on the web! Here, my work as a forklift driver intersects with my passion for technology and cultural heritage. With years of experience navigating warehouse environments with precision and efficiency, My expertise lies in ensuring seamless operations and safety within warehouse environments, where I excel in maneuvering forklifts to optimize workflows. My true passion lies in the fusion of technology and logistics. As a proud member of the Kikuyu community, I carry forward the values of unity and tradition in all aspects of my work. I believe in the power of community and collaboration to achieve common goals.

           {/*  
            "  solutions. My GitHub showcases my commitment to coding with over 6,000 contributions! I'm particularly interested in SaaS models and how technology can impact our world. I'm eager to learn and grow, always seeking new opportunities to challenge myself. As a proud Kikuyu, my cultural heritage is important to me, instilling a deep appreciation for community and tradition. Let's connect and explore how my skills can contribute to your team!" 
            

            Greetings from Nairobi, Kenya! With three years behind the wheel, I've honed my skills in maneuvering forklifts to efficiently handle various tasks. Whether it's loading and unloading cargo or navigating tight spaces, I excel in ensuring smooth operations with a keen eye for safety and efficiency.
            While my playground might be the warehouse floor, my passion for precision extends to digital realms as well. My GitHub profile is a testament to my dedication, boasting over 6,000 contributions. I'm particularly intrigued by how technology intersects with logistics, constantly seeking ways to optimize processes and enhance productivity.
            As a forklift driver, I understand the importance of teamwork and reliability. My cultural roots in the Kikuyu community instill in me a deep sense of responsibility and respect for collaboration. I believe in the power of technology to transform our world, and I'm eager to leverage my skills to drive positive change.
            Let's connect and explore how my hands-on experience and technical expertise can elevate your team's operations!

            my true passion lies in the intersection of technology and logistics. I am deeply fascinated by how innovative solutions can optimize workflows and enhance efficiency in the transportation and logistics industry.

            As a proud member of the Kikuyu community, I carry forward the values of unity and tradition in all aspects of my work. I believe in the power of community and collaboration to achieve common goals.

            As a proud member of the Kikuyu community, I carry forward the values of unity and tradition, instilling a deep appreciation for community and heritage in all aspects of my work.

            I am eager to expand my knowledge and skills further, always seeking new challenges and opportunities to grow. Let's connect and explore how my expertise in forklift operations and my passion for technology can contribute to the success of your team!
            
            */}
          </p>
        </div>

        <div>
          <div className="dark:bg-[#2C2C2C] bg-[#F6F8FA] md:p-6 p-2  mt-6 rounded-md">
            <div className="flex items-center gap-x-2 font-InterRe">
              <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
              <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                Products
              </h1>
            </div>

            <div className="mt-8">
              <Link href={"/"}>
                {projects.map((link) => (
                  <div
                    key={link.subtitle}
                    className="dark:bg-[#373737] bg-white mt-3 rounded-xl shadow-md flex  max-md:flex-col max-md:items-start items-center justify-between p-5 "
                  >
                    <div className="flex  items-center gap-x-4">
                      <div className="drop-shadow-md ">
                        <img
                          className="w-10 h-10 object-cover rounded-full "
                          src={link.img}
                          alt=""
                        />
                      </div>

                      <div>
                        <h1 className="text-xl font-InterMe">{link.title}</h1>
                      </div>
                    </div>

                    <div className="flex max-md:mt-4 w-fit items-center gap-x-3">
                      <p className="text-sm font-semibold uppercase text-neutral-40 bg-[#EDEFF3] dark:bg-neutral-600/50 dark:text-neutral-400 text-[#666D80]  px-2 rounded-lg ">
                        {link.subtitle}
                      </p>
                      <div className="">
                        <CiLocationArrow1 className="dark:text-neutral-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 lg:p-2 ">
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
                <div className="border-neutral-300 dark:border-neutral-700 shadow-md border  w-fit h-8 px-2 rounded-md flex items-center gap-x-2 ">
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

          <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6  mt-4 rounded-md">
            <div className="text-center">
              <span className="text-neutral-700 dark:text-neutral-400">
                © 2023 Joscript Folio – Jo free Templates
              </span>
              <p className="text-neutral-500">
                By{" "}
                <span className="hover:underline  hover:text-neutral-400 text-neutral-700 dark:text-neutral-300">
                  Joscript
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default page;
