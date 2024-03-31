import Image from "next/image";
import Link from "next/link";
import mission from "../../../public/images/image.jpg";

export default function Mission() {
  return (
    <div className="relative">
      <div className="absolute top-8 md:top-8 lg:top-16  text-center w-full">
        <div className="mx-auto max-w-[60%] lg:w-[40%] text-center text-white md:absolute  md:-left-14 lg:left-8 ">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold mb-5">
            OUR MAIN <br /> VALUES{" "}
          </h1>
          <h3 className="md:text-xl lg:text-2xl text-black underline font-semibold">
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
      </div>
      <div>
        <Image src={mission} className="w-full min-h-[350px]" />
      </div>
    </div>
  );
}
