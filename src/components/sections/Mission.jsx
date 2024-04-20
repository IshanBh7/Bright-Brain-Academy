"use client"
import Image from "next/image";
import Link from "next/link";
import mission from "../../../public/images/image.jpg";
import missiongreen from "../../../public/images/imagegreen.jpg";
import {motion} from "framer-motion"

export default function Mission() {
  return (
    <div className="relative">
      <motion.div 
      initial={{x:-40, opacity:0}}
      whileInView={{x:0, opacity:1}}
      viewport={{ once: true }}
      transition={{
        ease:'easeInOut',
        duration:0.75
      }}
      className="absolute z-10 top-14 md:top-8 lg:top-16  text-center w-full">
        <div className="mx-auto max-w-[60%] lg:w-[40%] text-center text-white md:absolute  md:-left-14 lg:left-8 ">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold mb-5">
            OUR MAIN <br /> VALUES{" "}
          </h2>
          <h3 className="md:text-xl lg:text-2xl text-orange md:text-black underline font-semibold">
            Our Mission & Vision
          </h3>
          <p className="mt-6 lg:mt-10 md:w-[70%] lg:w-[100%] mx-auto">
            Empowering learners to excel and thrive in a dynamic world through
            innovative education.
          </p>
          <div className="rounded-xl mt-6 lg:mt-10 py-3 px-5 bg-blue text-white inline-block">
            <Link href="/mission-and-vision">Learn more</Link>
          </div>
        </div>
      </motion.div>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full " />
        <Image
          src={mission}
          className="w-full hidden md:block min-h-[400px] max-h-[600px]"
        />
        <Image
        otio src={missiongreen}
          className="w-full md:hidden blur-[2px] min-h-[400px] max-h-[500px]"
        />
      </div>
    </div>
  );
}
