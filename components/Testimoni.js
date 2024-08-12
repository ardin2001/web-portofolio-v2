import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  projects = [
    {
      image: "/project/atr.png",
      link: "https://fe-dinas-pertanahan.vercel.app",
      title: "ATR/BPN Jember",
      desc: "Pada project ini saya berkesemapatan sebagai frontend web menggunakan React JS dan Tailwind CSS.",
    },
    {
      image: "/project/pemilu.png",
      link: "https://pemilu.himatifunej.org",
      title: "Pemilu HIMATIF",
      desc: "Pada project ini saya berkesemapatan sebagai frontend web menggunakan React JS dan Tailwind CSS.",
    },
    {
      image: "/project/soul.png",
      link: "https://soul-cafe.vercel.app",
      title: "Soul Cafe App",
      desc: "Project ini merupakan fake project fullstack dimana saya membuat website menggunakan Next JS, Tailwind CSS, Firebase dan state management menggunakan redux.",
    },
    {
      image: "/project/curhatin.png",
      link: "https://curahanhati.vercel.app",
      title: "Curhatin",
      desc: "Project ini merupakan tugas pada kelas dicoding pada saat program MSIB Batch 3. Project ini menggunakan React JS dan state management menggunakan redux.",
    },
    {
      image: "/project/ppl.jpg",
      link: "https://github.com/ardin2001/ppl_rev2",
      title: "E-Chest",
      desc: "Project ini merupakan tugas akhir mata kuliah Pengembangan Perangkat Lunak (PPL). Dimana saya berposisi sebagai programmer dengan jobdesk membuat website menggunakan Express JS dan Bootstrap CSS.",
    },
    {
      image: "/project/skripsi.png",
      link: "https://github.com/ardin2001/web-skripsi",
      title: "Website Skripsi",
      desc: "Project ini merupakan project skripsi, dimana menggunakan framework flask, Tailwind CSS, dan machine learning.",
    },
    {
      image: "/project/pwa.png",
      link: "https://github.com/ardin2001/web-skripsi",
      title: "Restaurant catalogue",
      desc: "Project ini merupakan latihan untuk membuat website Progressive Web App (PWA) dan implementasi module bundler (Webpack).",
    },
  ],
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch dark:bg-black-400"
      >
        {projects.map((project, index) => (
          <div className="px-2 lg:px-2.5 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all p-2 lg:p-2.5">
              <Image
                src={project.image}
                height={5000}
                width={50000}
                alt="Icon People"
              />
              <p className="mt-1 sm:mt-1.5 xl:mt-2 text-lg text-black-600 capitalize text-start">
                {project.title}
              </p>
              <p className="text-left">
                “
                {project.desc.length > 112
                  ? project.desc.slice(0, 100) + "..."
                  : project.desc}
                ”
              </p>
              <div className="btn-view mt-2 sm:mt-2.5 flex justify-end">
                <a href={project.link} className="bg-orange-500 text-white-500 px-8 py-0.5 justify-self-end">View</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-none justify-between w-auto mt-4 sm:mt-6 lg:mt-8">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <Image
              src={ArrowBack}
              width={500}
              height={500}
              alt="ArrowNext"
              className="h-6 w-6"
            />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <Image
              src={ArrowNext}
              width={500}
              height={500}
              alt="ArrowNext"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
