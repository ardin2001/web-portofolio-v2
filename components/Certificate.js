import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Certificate = ({
  projects = [0,1,2,3,4,5,6,7,8,9,10,11,12]
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
                src={"/sertif/"+project+".jpg"}
                height={5000}
                width={50000}
                alt="Icon People"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-none justify-between w-auto mt-4 sm:mt-6 lg:mt-8">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border dark:bg-orange-500 dark:hover:bg-white-300 hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
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
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border dark:bg-orange-500 dark:hover:bg-white-300 hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
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

export default Certificate;
