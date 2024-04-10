"use client"
import { motion } from "framer-motion";
export default function MissionPage() {
  return (
    <motion.div
    initial={{y:40, opacity:0}}
    animate={{y:0, opacity:1}}
    exit={{y:0, opacity:1}}
    transition={{ease:'easeIn', duration:0.75}}
    >
      <div className="text-center mt-20 mb-28 px-10 md:px-20">
        <h1 className=" text-4xl lg:text-6xl mb-16 font-semibold">
          MISSION & VISION
        </h1>
        <div>
          <h3 className="text-xl lg:text-2xl mb-5 text-yellow">MISSION</h3>
          <p className="text-sm md:text-base text-light-black">
            Our mission is to foster lifelong learners, promoting
            open-mindedness, responsibility, and balance. Through compassionate
            and joyful education, we nurture holistic development and excellence
            across all domains. Our child-centric approach emphasizes
            collaboration and mutual understanding, empowering individuals for
            success.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-xl lg:text-2xl mb-5 text-yellow">VISION</h3>
          <p className=" text-sm md:text-base text-light-black">
            Our vision is to foster the growth of self-reliant, globally-minded
            citizens who embrace personal and social responsibilities, celebrate
            diversity, and possess an insatiable thirst for knowledge. We are
            committed to nurturing individuals who understand the importance of
            respect, acceptance, and continuous learning, paving the way for a
            brighter and more interconnected future.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
