import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-12 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-4 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <div className="col-start-1 col-end-2 flex items-center gap-0.5 sm:gap-1 mb-0.5 lg:mb-1">
            <FaUserSecret className="h-5 lg:h-6 w-auto text-orange-500" />
            <h3 className="text-lg lg:text-xl font-semibold">Ardin Nugraha</h3>
          </div>
          <p className="mb-4">
            Jika anda tertarik untuk berkolaborasi dengan saya, anda dapat menghubungi saya via sosial media.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <FaGithub className="h-3 w-3 lg:h-4 lg:w-4 text-orange-500" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <FaInstagram className="h-3 w-3 lg:h-4 lg:w-4 text-orange-500" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <FaUserSecret className="h-3 w-3 lg:h-4 lg:w-4 text-orange-500" />
            </div>
          </div>
          <a href="https://github.com/rexcare/LaslesVPN" className="text-gray-400">
            ©{new Date().getFullYear()} - Web Portofolio
          </a>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Download{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Locations{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Server{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Countries{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Web Portofolio{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
