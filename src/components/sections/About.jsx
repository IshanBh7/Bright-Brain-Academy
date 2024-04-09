"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {easeInOut, motion} from "framer-motion"

import aboutimg1 from "../../../public/images/aboutSection/about1.jpeg";
import aboutimg2 from "../../../public/images/aboutSection/about2.jpeg";
import aboutimg3 from "../../../public/images/aboutSection/about3.jpeg";

function About() {
  return (
    <div className="lg:grid grid-cols-2 my-20">
      <motion.div 
      initial={{x:-40, opacity:0}}
      whileInView={{ x:0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ease:'easeInOut', duration:0.75, delay:0.2}}
      className="flex items-start justify-center flex-col m-5 mb-10 lg:mb-5 md:ml-20">
        <h1 className="text-3xl">
          Learn more about Our Work and Our Cultural Activities
        </h1>
        <p className="mt-5 text-light-black">
          Beyond traditional academics, we prioritize holistic development
          through team games, competitions, and cultural events. Our curriculum
          fosters critical thinking and real-world connections, while
          inter-class activities enrich social and educational growth.
        </p>
        <p className="mt-3 text-light-black">
          With a focus on future trends, we integrate professionals and
          experiential learning, ensuring each student thrives in a safe, joyful
          environment upheld by school rules.
        </p>
        <div className="bg-blue text-white flex justify-center py-[15px] w-[150px] mt-10 rounded-full">
          <Link className="font-medium" href="/about">
            Read More
          </Link>
        </div>
      </motion.div>
      <motion.div 
      initial={{x:40, opacity:0}}
      whileInView={{ x:0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ease:'easeInOut', duration:0.75}} className="grid grid-cols-2">
        <div className="col-span-2  justify-self-center transition ease-out bg-[#FFF5F3] hover:bg-orange rounded-full flex justify-center items-center w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
          <Image
            style={{ borderRadius: "50%", width: "90%", height: "90%" }}
            src={aboutimg1}
            alt="About Image"
          />
        </div>
        <div className="-mt-[100px] ml-[30px] justify-self-center transition ease-out bg-[#FFF5F3] hover:bg-orange rounded-full flex justify-center items-center w-[180px] h-[180px] md:w-[250px] md:h-[250px]">
          <Image
            style={{ borderRadius: "50%", width: "85%", height: "85%" }}
            src={aboutimg2}
            alt="About Image"
          />
        </div>
        <div className="-mt-[100px] mr-[30px] justify-self-center transition ease-out bg-[#FFF5F3] hover:bg-orange rounded-full flex justify-center items-center w-[180px] h-[180px] md:w-[250px] md:h-[250px]">
          <Image
            style={{ borderRadius: "50%", width: "85%", height: "85%" }}
            src={aboutimg3}
            alt="About Image"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default About;
