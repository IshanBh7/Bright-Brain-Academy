"use client"
import { feeds } from "../../utils";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useEffect, useRef } from "react";
import {motion} from "framer-motion"

export default function Testimonials() {
    const scrollTestimonialRef = useRef(null);

  useEffect(() => {
    const scrollSmoothly = (direction) => {
      const scrollAmount =
        scrollTestimonialRef.current.scrollWidth / feeds.length;
      scrollTestimonialRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    };

    if (scrollTestimonialRef.current) {
      const leftArrow = document.querySelector(".arrow-left");
      const rightArrow = document.querySelector(".arrow-right");

      leftArrow?.addEventListener("click", () => scrollSmoothly("left"));
      rightArrow?.addEventListener("click", () => scrollSmoothly("right"));
    }
  }, [feeds.length]);
  return (
    <motion.div 
     initial={{y:40, opacity:0}}
     whileInView={{y:0, opacity:1}}
     transition={{ease:'easeInOut', duration:0.75}}
     viewport={{once:'true'}}
     className="flex flex-col justify-center items-center my-10">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">What Parents Say </h1>
      <h1 className="text-base md:text-lg lg:text-xl font-medium pt-3 pb-5 text-[#fbc334]">
        Testimonials That Speak Volumes
      </h1>
      <h3 className="max-w-[80%] md:max-w-[60%] text-sm lg:text-base text-center text-light-black">
        Explore why families choose our school for their child's education. From
        our nurturing environment to our dedicated staff, find out what sets us
        apart.
      </h3>
      <div className="mt-10 overflow-hidden max-w-full relative">
        <div 
        ref={scrollTestimonialRef}
        className="scroll-container overflow-hidden mx-auto flex snap-x snap-mandatory scroll-smooth w-4/5">
          {feeds?.map((feed, index) => (
            <div
              key={index}
              className="bg-[#fbc334] scroll-ms-10 md:scroll-ml-4 lg:scroll-ml-6 mx-2 md:mx-4 lg:mx-6  rounded-md snap-start snap-always shrink-0 w-[90%] md:w-[45%] lg:w-[45%]  flex flex-col items-center justify-center "
            >
              <div className="w-full max-w-[350px] md:max-w-[500px]  flex flex-col items-center justify-center pl-8 pt-10 pb-8 md:pl-10 md:pb-10 md:pt-12 pr-0">
                <p className="md:pr-8 text-sm md:text-base pr-4 lg:pr-12">{feed.feed}</p>
                <div className=" flex rounded-l-full items-center justify-between bg-white  w-full mt-6">
                  <div className="flex items-center">
                    <Image
                      className="rounded-full w-[70px] h-[70px]"
                      src={feed.img}
                      width={80}
                      height={80}
                    />
                    <p className="ml-2 text-[#06346a] font-semibold">{feed.name}</p>
                  </div>
                  <FaQuoteRight className="text-5xl text-[#06346a] font-bold" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <IoIosArrowDropleftCircle className="arrow-left text-5xl absolute top-[40%] left-2 md:left-10 cursor-pointer text-[#06346a]"/>
        <IoIosArrowDroprightCircle className="arrow-right text-5xl absolute top-[40%] right-2 md:right-10  cursor-pointer text-[#06346a]"/>
      </div>
    </motion.div>
  );
}
