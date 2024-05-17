"use client";

import React from "react";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import { AiOutlinePlusCircle, AiOutlineDribbble, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLocationArrow1, CiTwitter, CiInstagram, CiAlarmOn } from "react-icons/ci";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
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
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl  max-2xl  md:mx-auto sm:mx-auto lg:px-0 "
    >
      <div className=" lg:p-6 p-5 ">
        <div className="flex mt-4 items-center gap-x-2 font-InterRe">
          <div className="w-[6px] h-[6px] rounded-full  bg-[#FB6D48]" />
          <h1 className="text-neutral-700  dark:text-[#C0C0C0] text-lg font-InterMe">
            About
          </h1>
        </div>

        <div>
          <h1 className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800">
            It's Me Elsarita
          </h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
          Elsarita Njoki Oulie is a dedicated and organized individual with good collaborative skills. She is seeking a job that will allow her to make the best use of her skills and further develop them. Elsarita has a genuine interest in the transport/logistics industry and considers her strengths to be long-term planning skills and the ability to complete tasks within deadlines. She is a team player who thrives in collaboration with others and contributes to a positive and pleasant working environment. Elsarita also has a strong sense of social responsibility and is involved in the Red Cross. Her outdoor activities include skiing, cycling, sailing, and participating in triathlons.
        
          </motion.p>
        </div>

        <div className="p-4  rounded-lg dark:bg-[#373737] bg-white border dark:border-neutral-700/70">
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            className="aspect-square object-cover rounded-lg"
            src="/img/img1.png"
            alt="forklift"
          />
        </div>

        <div>
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800"
          >
            More About Me
          </motion.h1>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            I hold a Bachelor's degree in Information Technology from Jomo Kenyatta University of Agriculture and Technology. I have a strong background in software, databases, and networks. With my knowledge in IT, I have stayed up-to-date with the latest technologies and industry trends. I actively seek opportunities to expand my skills and I regularly participate in IT conferences and workshops. My dedication to professional development demonstrates my relentless drive to stay current in the ever-evolving field of technology.
           </motion.p>

<<<<<<< HEAD
=======
           <div className="p-4  rounded-lg dark:bg-[#373737] bg-white border dark:border-neutral-700/70">
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            className="aspect- object-cover rounded-lg"
            src="/img/img1.png"
            alt="forklift"
          />
        </div>
>>>>>>> 25c4733 (chore(update): Working on image update)
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            When I'm not immersed in my work in the IT field, I find solace in outdoor activities such as skiing, cycling, sailing, and participating in triathlons. I believe in maintaining a healthy work-life balance as well as understanding the importance of taking breaks and reenergizing my mind and body. In my spare time, I also volunteer at the Red Cross, contributing to society and helping those in need. Additionally, I enjoy exploring nature and spending time with animals, which aligns with my passion for outdoor activities and my involvement in the Red Cross.
            </motion.p>

          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800"
          >
            My Laurels 🏆
          </motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            Licenses and Certifications
          </motion.p>
        </div>

        <div className="dark:bg-[#2C2C2C] bg-[#F6F8FA] p-4  mt-6 rounded-md">
          <div className="">
            <Link href={"https://www.linkedin.com/in/elsarita-njoki-oulie-b22b3a291/"}>
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

        <div className="mt-24 lg:p-2 ">
          <div className="mx-auto max-w-md">
            <div>
              <h2 className=" text-4xl text-center dark:text-white text-[#353849] font-InterBo">
                Let’s work together.
              </h2>
              <p className="text-center mt-3 dark:text-neutral-300 text-[#666D80] text-lg">
                Communication and Engagement
              </p>
            </div>

            <div className="">
              <div className="flex items-center gap-x-4 justify-center mt-6">
                <div className="bg-black dark:bg-[#373737] w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                  <AiOutlinePlusCircle className="text-white tex-3" />
                  <a href="mailto:your-email@example.com"> <span className="text-white  font-semibold">Hire Me</span> </a>
                </div>
                <div className="border-neutral-300 dark:border-neutral-700 shadow-md border  w-fit h-8 px-2 rounded-md flex items-center gap-x-2 ">
                  <FiCopy className="" />
                  <span className="text-neutral-700 dark:text-white font-semibold">
                      <a href="mailto:elrizah@gmail.com">Copy Email</a>
                    </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F6F8FA] p-6 dark:bg-[#2C2C2C]  mt-14 rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div className="w-[6px] h-[6px] rounded-full  bg-[#FB6D48]" />
                <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                  Follow Me
                </h1>
              </div>
              <div className="flex gap-x-2">
                <a href="https://twitter.com/elsarita6020">
                  <div className="border-neutral-300 bg-white dark:bg-[#373737] dark:border-none shadow-md drop-shadow-md border w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1">
                    <CiTwitter className="text-neutral-500 dark:text-white" />
                  </div>
                </a>
                <a href="https://github.com/kooya3">
                  <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737] dark:border-none w-9 h-9 px-2 rounded-full flex justify-center items-center gap-x-1">
                    <AiFillGithub className="text-neutral-500 dark:text-white" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/elsarita-njoki-oulie-b22b3a291/">
                  <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737] dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1">
                    <FaLinkedinIn className="text-neutral-500 dark:text-white" />
              </div>
              </a>
              </div>
            </div>
          </div>

          <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6  mt-4 rounded-md">
            <div className="text-center">
              <span className="text-neutral-700 dark:text-neutral-400">
                © 2024 Elsarita – elrizah@gmail.com
              </span>
              <p className="text-neutral-500">
                By{""}
                <span className="hover:underline  hover:text-neutral-400 text-neutral-700 dark:text-neutral-300">
                  kooya3
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
