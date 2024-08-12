import React, { useState, useEffect } from "react";
import ToggleTheme from "../Theme";
import { FaUserSecret } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";

const Header = () => {
  const [activeLink, setActiveLink] = useState("about");
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  
  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white-500 transition-all dark:bg-black-400 " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center gap-1 sm:gap-1.5">
            <FaUserSecret className="h-6 sm:h-7 w-auto text-orange-500" />
            <h3 className="text-lg md:text-xl font-semibold dark:text-white-300">Ardin Nugraha</h3>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 dark:text-white-300 ")
              }
            >
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="techstack"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("techstack");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "techstack"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 dark:text-white-300 ")
              }
            >
              TechStack
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("project");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "project"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 dark:text-white-300 ")
              }
            >
              Project
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="certificate"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("certificate");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "certificate"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 dark:text-white-300 ")
              }
            >
              Certificate
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <ToggleTheme />
            {/* <ButtonOutline>Web Portofolio</ButtonOutline> */}
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t">
        <div className="bg-white-500 sm:px-3 dark:bg-black-400">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent dark:text-white-300")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="techstack"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("techstack");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "techstack"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent dark:text-white-300 ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              TechStack
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("project");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "project"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent dark:text-white-300")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Project
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="certificate"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("certificate");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "certificate"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent dark:text-white-300 ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                 d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              Certificate
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
