import Link from "next/link";
import Image from "next/image";
import about from "../../../public/images/aboutpage1.jpg";

export default function AboutPage() {
  return (
    <div>
      {/* <div className="bg-[#FDB713] text-white flex justify-between items-center px-10 h-16">
        <div className="font-semibold">ABOUT US</div>
        <div>
          <Link className="mr-3 hover:text-blue" href="/">
            Home
          </Link>
          |
          <Link className="ml-3 hover:text-blue" href="about-us">
            About Us
          </Link>
        </div>
      </div> */}
      <div className="text-center mt-20 mb-20">
        <h1 className="text-4xl lg:text-6xl mb-5 font-semibold">
          ABOUT <br /> BRIGHT BRAIN ACADEMY
        </h1>
        <h3 className="text-xl lg:text-2xl mb-10 text-yellow">Our roots</h3>
        <div className="md:text-left md:grid grid-cols-2 px-10 lg:px-20">
          <div className="text-light-black text-sm md:text-base">
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
          </div>
          <div className="w-[300px] md:w-[330px] lg:w-[400px] mx-auto mt-10 lg:mt-0 lg:mx-0 justify-self-center">
            <Image className="rounded-2xl" src={about} />
          </div>
        </div>
      </div>
    </div>
  );
}
