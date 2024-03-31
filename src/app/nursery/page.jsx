import Link from "next/link";
import Image from "next/image";
import about from "../../../public/images/aboutpage1.jpg";
import About from "@/components/sections/About";
import Brochure from "@/components/sections/Brochure";

export default function Nursery() {
  return (
    <div>
      <div className="bg-[url('../../public/images/carousel-1.jpg')] bg-cover bg-center text-white">
        <div className="bg-[url('../../public/images/bg-header-top.png')] h-[10px]"></div>
        <h1 className="text-3xl md:text-5xl font-semibold pt-20 pb-10 pl-10 md:pl-24">
          Nursery
        </h1>
        <div>
          <h3 className="text-xl md:text-xl pb-24 pl-10 md:pl-24">
            <Link className="text-orange" href="/">
              Home
            </Link>{" "}
            / <Link href="/nursery">Nursery</Link>
          </h3>
        </div>
        <div className="bg-[url('../../public/images/bg-header-bottom.png')]  h-[18px]"></div>
      </div>
      <div className="text-center text-5xl font-semibold my-16">NURSERY</div>
      <div className="md:text-left md:grid grid-cols-2 pb-20 px-8 lg:px-20">
        <div className="text-light-black text-sm md:text-base mt-10">
          <p>
            In Nursery, we continue playful learning, nurturing curiosity and
            motor skills for your child's growth.
          </p>
          <p className="mt-5 md:mt-8">
            Welcome to Nursery, where we continue to foster your child's growth
            through a balance of structured learning and imaginative play. Here,
            children delve deeper into essential skills while enjoying a
            plethora of creative activities. Our nurturing environment
            encourages curiosity, allowing children to question, explore, and
            discover the world around them with enthusiasm.
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
