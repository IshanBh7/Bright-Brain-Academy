"use client"
import Brochure from "@/components/sections/Brochure";
import {motion} from "framer-motion"
export default function AdmissionProcess() {
  return (
    <motion.div
    initial={{y:40, opacity:0}}
    animate={{y:0, opacity:1}}
    exit={{y:0, opacity:1}}
    transition={{ease:'easeIn', duration:0.75}}>
      <div className="text-center mt-20 mb-28 px-10 md:px-20">
        <h1 className=" text-4xl lg:text-6xl mb-14 font-semibold">
          ADMISSION PROCESS
        </h1>
        <div>
          <h3 className="text-xl lg:text-2xl mb-5 text-yellow">
            Admission Policy
          </h3>
          <p className="text-sm md:text-base text-light-black">
            Applications for admission are accepted from students of all faith.
            However preference is given on merit basis through admission test. A
            student has to produce grade sheet as proof of his/ her previous
            class. Prospectus along with registration form is available in the
            school office. The form should be duly filled in and submitted in
            the office before the due date.
          </p>
          <p className="text-sm md:text-base text-light-black mt-10">
            A child has also to compete for admission by appearing in a written
            test followed by an interview. Parent Should accompany the child at
            time of interview. The test will cover English, Hindi, Mathematics
            and Science based on the syllabi of the preceding class to which
            admission is sought. The Management reserves all rights of admitting
            children to school and is not bound to give reasons for admission or
            rejection of any particular child.
          </p>
        </div>
      </div>
      <Brochure />
    </motion.div>
  );
}
