import Link from "next/link";
import Image from "next/image";
import about from "../../../public/images/aboutpage1.jpg";
import About from "@/components/sections/About";
import Brochure from "@/components/sections/Brochure";

export default function Kindergarden() {
  return (
    <div>
      <div className="bg-[url('../../public/images/carousel-1.jpg')] bg-cover bg-center text-white">
        <div className="bg-[url('../../public/images/bg-header-top.png')] h-[10px]"></div>
        <h1 className="text-3xl md:text-5xl font-semibold pt-20 pb-10 pl-10 md:pl-24">
          Kindergarden
        </h1>
        <div>
          <h3 className="text-xl md:text-xl pb-24 pl-10 md:pl-24">
            <Link className="text-orange" href="/">
              Home
            </Link>{" "}
            / <Link href="/kindergarden">Kindergarden</Link>
          </h3>
        </div>
        <div className="bg-[url('../../public/images/bg-header-bottom.png')]  h-[18px]"></div>
      </div>
      <div className="text-center text-5xl font-semibold my-16">
        KINDERGARDEN
      </div>
      <div className="md:text-left md:grid grid-cols-2 pb-20 px-8 lg:px-20">
        <div className="text-light-black text-sm md:text-base mt-10">
          <p>
            At Kindergarten, we blend structured learning with play, shaping
            confident and curious learners.
          </p>
          <p className="mt-5 md:mt-8">
            In Kindergarten, we build upon the foundations laid in earlier
            stages, shaping confident and curious learners. Through a blend of
            structured learning and playful exploration, children deepen their
            understanding of academic concepts while honing their motor skills.
            Our goal is to cultivate a love for learning that will propel them
            through their educational journey and beyond.
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
