import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import Certificate from "./Certificate";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b bg-white-500 dark:bg-black-400 w-full py-14 "
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full dark:bg-black-400" id="techstack">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 dark:text-white-300 leading-relaxed"
              
            >
              Tech <span className="text-orange-500"id="techstack">Stack</span>
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal sm:w-10/12 lg:w-8/12 mx-auto my-2 text-center dark:text-white-300"
            >
              The following are some of the tech stacks that I have learned during lectures in developing applications.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pb-8 lg:pb-12 pt-4 lg:pt-6 px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col w-full justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-8 hover:border-2 hover:border-orange-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-1 lg:mt-1.5">
                  <Image
                    src="/techstack/language.png"
                    width={145}
                    height={165}
                    alt="Programming Language"
                  />
                </div>
                <p className="text-lg text-black-600 dark:text-white-300 font-medium capitalize mt-2 sm:mt-4 mb-0.5 sm:mb-1">
                  Programming Language
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 dark:text-white-300 flex-grow gap-1 sm:gap-1.5 lg:gap-2">
                  <li className="relative check custom-list">Javascript</li>
                  <li className="relative check custom-list">Golang (Go)</li>
                  <li className="relative check custom-list">Python</li>
                  <li className="relative check custom-list">PHP</li>
                  <li className="relative check custom-list">C#</li>
                </ul>
              </motion.div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col w-full justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-8 hover:border-2 hover:border-orange-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-1 lg:mt-1.5">
                  <Image
                    src="/techstack/fe.png"
                    width={145}
                    height={165}
                    alt="Frontend Development"
                  />
                </div>
                <p className="text-lg text-black-600 dark:text-white-300 font-medium capitalize mt-2 sm:mt-4 mb-0.5 sm:mb-1">
                  Frontend Development
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 dark:text-white-300 flex-grow gap-1 sm:gap-1.5 lg:gap-2">
                  <li className="relative check custom-list">HTML</li>
                  <li className="relative check custom-list">CSS</li>
                  <li className="relative check custom-list">Bootstrap</li>
                  <li className="relative check custom-list">Tailwind</li>
                  <li className="relative check custom-list">React JS</li>
                  <li className="relative check custom-list">Next JS</li>
                  <li className="relative check custom-list">Vue JS</li>
                </ul>
              </motion.div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col w-full justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-8 hover:border-2 hover:border-orange-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-1 lg:mt-1.5">
                  <Image
                    src="/techstack/backend.png"
                    width={145}
                    height={165}
                    alt="Backend Development"
                  />
                </div>
                <p className="text-lg text-black-600 dark:text-white-300 font-medium capitalize mt-2 sm:mt-4 mb-0.5 sm:mb-1">
                  Backend Development
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 dark:text-white-300 flex-grow gap-1 sm:gap-1.5 lg:gap-2">
                  <li className="relative check custom-list">Express</li>
                  <li className="relative check custom-list">Echo</li>
                  <li className="relative check custom-list">Firebase</li>
                </ul>
              </motion.div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center w-full border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-8 hover:border-2 hover:border-orange-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-1 lg:mt-1.5">
                  <Image
                    src="/techstack/ml.png"
                    width={145}
                    height={165}
                    alt="Data Science"
                  />
                </div>
                <p className="text-lg text-black-600 dark:text-white-300 font-medium capitalize mt-2 sm:mt-4 mb-0.5 sm:mb-1">
                  Data Science
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 dark:text-white-300 flex-grow gap-1 sm:gap-1.5 lg:gap-2">
                  <li className="relative check custom-list">Machine Learning</li>
                  <li className="relative check custom-list">Datamining</li>
                  <li className="relative check custom-list">Textmining</li>
                  <li className="relative check custom-list">Data Visualization</li>
                </ul>
              </motion.div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center w-full items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-8 hover:border-2 hover:border-orange-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-1 lg:mt-1.5">
                  <Image
                    src="/techstack/devops.png"
                    width={145}
                    height={165}
                    alt="DevOps"
                  />
                </div>
                <p className="text-lg text-black-600 dark:text-white-300 font-medium capitalize mt-2 sm:mt-4 mb-0.5 sm:mb-1">
                  DevOps
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 dark:text-white-300 flex-grow gap-1 sm:gap-1.5 lg:gap-2">
                  <li className="relative check custom-list">AWS</li>
                  <li className="relative check custom-list">Docker</li>
                </ul>
              </motion.div>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col w-full justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-8 hover:border-2 hover:border-orange-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-1 lg:mt-1.5">
                  <Image
                    src="/techstack/software.png"
                    width={145}
                    height={165}
                    alt="Software"
                  />
                </div>
                <p className="text-lg text-black-600 dark:text-white-300 font-medium capitalize mt-2 sm:mt-4 mb-0.5 sm:mb-1">
                  Software
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 dark:text-white-300 flex-grow gap-1 sm:gap-1.5 lg:gap-2">
                  <li className="relative check custom-list">Git</li>
                  <li className="relative check custom-list">Adobe Photoshop</li>
                  <li className="relative check custom-list">Figma</li>
                  <li className="relative check custom-list">Microsoft Office</li>
                </ul>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16 dark:bg-black-400" id="project">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 dark:text-white-300 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Projects{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-11/12 sm:w-9/12 lg:w-7/12 dark:text-white-300"
            >
              These are some of my <a className="underline decoration-orange-500">client projects</a> and <a className="underline decoration-orange-500">practice projects</a> while learning to develop website-based applications.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col pt-6 pb-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

        <div className="flex flex-col w-full mb-16 dark:bg-black-400" id="certificate">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-orange-500 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Certificates{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-11/12 sm:w-9/12 lg:w-7/12 dark:text-white-300"
            >
              These are some of the <a className="underline decoration-orange-500">certificates</a> I have received in the fields of <a className="underline decoration-orange-500">Frontend Web, Backend, Data Visualization,</a> and <a className="underline decoration-orange-500">Excel</a>.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col pt-6 pb-12">
            <motion.div variants={scrollAnimation}>
              <Certificate />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
