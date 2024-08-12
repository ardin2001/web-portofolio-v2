import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { GrLinkedinOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = ({
  listUser = [
    {
      name: "Frontend Web",
      number: "4",
      icon: "/techstack/fe.png",
    },
    {
      name: "Backend",
      number: "1",
      icon: "/techstack/backend.png",
    },
    {
      name: "Fullstack Web",
      number: "2",
      icon: "/techstack/fullstack.png",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto dark:bg-black-400" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 ">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 dark:text-white-300 leading-normal">
              Hello I&apos;am{" "}
              <strong className="text-orange-500">Ardin Nugraha.</strong>
            </h1>
            <p className="text-black-500 dark:text-white-300 mt-4 mb-1 sm:mb-1.5">
              If you are interested, you can see my{" "}
              <a className="underline decoration-orange-500">
                Curriculum Vitae (CV)
              </a>{" "}
              and{" "}
              <a className="underline decoration-orange-500">Social Media</a>{" "}
              below.
            </p>
            <div className="medsos flex">
              <a href="https://www.linkedin.com/in/ardin-nugraha-b2536324b" className="shadow-custom dark:shadow-custom-dark mr-2 sm:mr-2.5 lg:mr-3 p-1 lg:p-1.5 rounded-full">
                <GrLinkedinOption className="text-orange-500 text-xl" />
              </a>
              <a href="/" className="shadow-custom  dark:shadow-custom-dark mr-2 sm:mr-2.5 lg:mr-3 p-1 lg:p-1.5 rounded-full">
                <FaInstagram className="text-orange-500 text-xl" />
              </a>
              <a href="https://github.com/ardin2001" className="shadow-custom  dark:shadow-custom-dark mr-2 sm:mr-2.5 lg:mr-3 p-1 lg:p-1.5 rounded-full">
                <FaGithub className="text-orange-500 text-xl" />
              </a>
            </div>
            <br />
            <ButtonPrimary>Download</ButtonPrimary>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 ml-auto"
                src="/profile.jpg"
                alt="profile image"
                width={5000}
                height={5000}
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full bg-white-500 dark:bg-orange-500 grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center w-12 h-12 mr-6 rounded-full overflow-hidden bg-white-300">
                  <img src={listUsers.icon} className="h-8 w-8" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500 dark:text-black-400">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
