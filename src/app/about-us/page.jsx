"use client"
import Image from "next/image";
import about from "../../../public/images/aboutpage1.jpg";
import {motion} from "framer-motion"

export default function AboutPage() {
  return (
    <div>
      <div className="text-center mt-20 mb-20">
        <motion.h1
        initial={{y:-40, opacity:0}}
        animate={{y:0, opacity:1}}
        
    exit={{y:0, opacity:1}}
        transition={{ease:'easeInOut', duration:0.75}}
        className="text-4xl lg:text-6xl mb-5 font-semibold">
         <h2>
          ABOUT <br /> BRIGHT BRAIN ACADEMY
        </h2>
        </motion.h1>
        <motion.h3 initial={{y:-40, opacity:0}}
        animate={{y:0, opacity:1}}
        
    exit={{y:0, opacity:1}}
        transition={{ease:'easeInOut', duration:0.5}} className="text-xl lg:text-2xl mb-10 text-yellow">Our roots</motion.h3>
        <div className="md:text-left md:grid grid-cols-2 px-10 lg:px-20">
          <motion.div 
          initial={{x:-40, opacity:0}}
          animate={{x:0, opacity:1}}
          
    exit={{y:0, opacity:1}}
          transition={{ease:'easeInOut', duration:0.5, delay:0.5}} className="text-light-black text-sm md:text-base">
            <p>
              Welcome to Bright Brain Academy, a vibrant Co-Educational English
              Medium School nestled in the heart of Bagru, Jaipur.
            </p>
            <p className="mt-5 md:mt-10">
              Since our inception two years ago, our mission at Bright Brain
              Academy has been to cultivate young minds and equip them for the
              road ahead.Here, we foster a collaborative relationship between
              teachers and parents, recognizing them as essential allies in
              shaping our children's path to achievement.
            </p>
            <p className="mt-5 md:mt-10">
              Join us in shaping the bright futures of tomorrow, one student at
              a time.
            </p>
          </motion.div>
          <motion.div initial={{x:40, opacity:0}}
        animate={{x:0, opacity:1}}
        
    exit={{y:0, opacity:1}}
        transition={{ease:'easeInOut', duration:0.75, delay:0.5}} className="w-[300px] md:w-[330px] lg:w-[400px] mx-auto mt-10 lg:mt-0 lg:mx-0 justify-self-center">
            <Image className="rounded-2xl" src={about} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
