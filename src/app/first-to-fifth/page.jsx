import Link from "next/link";
import Image from "next/image";
import about from "../../../public/images/aboutpage1.jpg";
import Brochure from "@/components/sections/Brochure";

export default function Kindergarden() {
  return (
    <div>
      <div className="bg-[url('../../public/images/carousel-1.jpg')] bg-cover bg-center text-white">
        <div className="bg-[url('../../public/images/bg-header-top.png')] h-[10px]"></div>
        <h1 className="text-3xl md:text-5xl font-semibold pt-20 pb-10 pl-10 md:pl-24">
          I - V STANDARD
        </h1>
        <div>
          <h3 className="text-xl md:text-xl pb-24 pl-10 md:pl-24">
            <Link className="text-orange" href="/">
              Home
            </Link>{" "}
            / <Link href="/kindergarden">I - V standard</Link>
          </h3>
        </div>
        <div className="bg-[url('../../public/images/bg-header-bottom.png')]  h-[18px]"></div>
      </div>
      <div className="text-center text-5xl font-semibold my-16 mt-20">
        I - V STANDARD
      </div>
      <div className="md:text-left md:grid grid-cols-2 pb-20 mb-14 px-8 lg:px-20">
        <div className="text-light-black text-sm md:text-base mt-10">
          <p>
            At Elementary School, we merge exploration with education, nurturing
            inquisitive and enthusiastic scholars.
          </p>
          <p className="mt-5 md:mt-8">
            In the foundational years of education, we provide a nurturing
            environment where young learners embark on their educational journey
            with curiosity and excitement. Through interactive lessons, creative
            activities, and personalized attention, we lay the groundwork for
            academic success and holistic development. Our dedicated teachers
            foster a love for learning and instill essential skills and values.
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
