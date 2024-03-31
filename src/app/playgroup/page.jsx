import Link from "next/link";
import Image from "next/image";
import about from "../../../public/images/aboutpage1.jpg";
import About from "@/components/sections/About";
import Brochure from "@/components/sections/Brochure";

export default function Playgroup() {
  return (
    <div>
      <div className="bg-[url('../../public/images/carousel-1.jpg')] bg-cover bg-center text-white">
        <div className="bg-[url('../../public/images/bg-header-top.png')] h-[10px]"></div>
        <h1 className="text-3xl md:text-5xl font-semibold pt-20 pb-10 pl-10 md:pl-24">
          Playgroup
        </h1>
        <div>
          <h3 className="text-xl md:text-xl pb-24 pl-10 md:pl-24">
            <Link className="text-orange" href="/">
              Home
            </Link>{" "}
            / <Link href="/playgroup">Playgroup</Link>
          </h3>
        </div>
        <div className="bg-[url('../../public/images/bg-header-bottom.png')]  h-[18px]"></div>
      </div>
      <div className="text-center text-5xl font-semibold my-16">PLAYGROUP</div>
      <div className="md:text-left md:grid grid-cols-2 pb-20 px-8 lg:px-20">
        <div className="text-light-black text-sm md:text-base mt-10">
          <p>
            Welcome to our Playgroup! Here, kids learn through play and creative
            activities, building motor skills and sparking curiosity.
          </p>
          <p className="mt-5 md:mt-8">
            In Playgroup, we lay the groundwork for your child's educational
            journey through playful learning and creative activities. By
            engaging in the play way method, children develop essential skills
            while exploring their natural curiosity. Our focus on motor skill
            development ensures that they can confidently interact with their
            environment, setting the stage for future academic success.
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
