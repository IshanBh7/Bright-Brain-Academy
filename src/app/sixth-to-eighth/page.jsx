import Link from "next/link";
import Image from "next/image";
import about from "../../../public/images/aboutpage1.jpg";
import Brochure from "@/components/sections/Brochure";

export default function Kindergarden() {
  return (
    <div>
      <div className="bg-[url('../../public/images/carousel-1.jpg')] bg-cover bg-center text-white">
        <div className="bg-[url('../../public/images/bg-header-top.png')] h-[10px]"></div>
        <h2 className="text-3xl md:text-5xl font-semibold pt-20 pb-10 pl-10 md:pl-24">
          VI - VIII STANDARD
        </h2>
        <div>
          <h3 className="text-xl md:text-xl pb-24 pl-10 md:pl-24">
            <Link className="text-orange" href="/">
              Home
            </Link>{" "}
            / <Link href="/kindergarden">VI - VIII standard</Link>
          </h3>
        </div>
        <div className="bg-[url('../../public/images/bg-header-bottom.png')]  h-[18px]"></div>
      </div>
      <div className="text-center text-5xl font-semibold my-16 mt-20">
       <h3> VI - VIII STANDARD</h3>
      </div>
      <div className="md:text-left md:grid grid-cols-2 pb-20 mb-14 px-8 lg:px-20">
        <div className="text-light-black text-sm md:text-base mt-10">
          <p>
            At Middle School, we intertwine academic rigor with exploration,
            fostering resilient and innovative learners.
          </p>
          <p className="mt-5 md:mt-8">
            As students transition into the middle school years, we focus on
            fostering independence, critical thinking, and self-expression. Our
            comprehensive curriculum challenges students to explore diverse
            subjects and develop a deeper understanding of academic concepts.
            Through collaborative projects, extracurricular activities, and
            leadership opportunities, we empower students to unlock their full
            potential and become well-rounded individuals prepared for the
            challenges ahead.
          </p>
        </div>
        <div className="w-[300px] lg:w-[400px] mx-auto mt-16 md:mt-0 lg:mx-0 justify-self-center">
          <Image className="rounded-2xl" src={about} />
        </div>
      </div>

      <Brochure />
    </div>
  );
}
