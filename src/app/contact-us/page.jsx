"use client";
import Link from "next/link";
import Image from "next/image";
import about from "../../../public/images/aboutpage1.jpg";

// AIzaSyCx-itqSNclWy17qdEzQ8oOH_v01XL_S3Q

const Callto = ({ phone, children }) => {
  return (
    <Link className="text-sm md:text-xl font-medium" href={`tel:${phone}`}>
      {children}
    </Link>
  );
};
const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      className="text-sm md:text-xl font-medium"
      href="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default function ContactUsPage() {
  return (
    <div>
      {/* <div className="bg-[#65B741] text-white flex justify-between items-center px-10 h-16">
        <div className="font-semibold">CONTACT US</div>
        <div>
          <Link className="mr-3 hover:text-orange" href="/">
            Home
          </Link>
          |
          <Link className="ml-3 hover:text-orange" href="contact-us">
            Contact Us
          </Link>
        </div>
      </div> */}
      <div className="text-center mt-20 mb-10">
        <h1 className="text-4xl lg:text-6xl mb-16 font-semibold">
          Get in touch
        </h1>
        <div className="md:grid grid-cols-2 px-10 lg:px-20">
          <div className="text-sm md:text-base flex flex-col items-center">
            <div>
              <h1 className="text-[#ffda48] text-lg md:text-2xl font-semibold mb-1">
                Address
              </h1>
              <p className="text-sm md:text-xl md:leading-8 font-medium">
                20-21-22, Shyam Vihar, <br />
                Dahmi kalan Bagru
              </p>
            </div>
            <div className="my-10">
              <h1 className="text-[#ffda48] text-lg md:text-2xl font-semibold mb-2">
                Phone
              </h1>
              <Callto phone="+919233738373">+91 9233738373</Callto>
            </div>
            <div>
              <h1 className="text-[#ffda48] text-lg md:text-2xl font-semibold mb-2">
                Email
              </h1>
              <ButtonMailto
                label="xyz@gmail.com"
                mailto="mailto:xyz@gmail.com"
              />
            </div>
          </div>
          <div className="w-[300px] lg:w-[400px] mx-auto mt-10 lg:mx-0 justify-self-center">
            <Image className="rounded-2xl" src={about} />
          </div>
        </div>
      </div>
    </div>
  );
}

