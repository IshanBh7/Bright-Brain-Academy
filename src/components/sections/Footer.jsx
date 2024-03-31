import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/BBAlogo.png";

const Footer = () => {
  return (
    <footer className="bg-blue text-[#ffffff80] pl-4 md:px-24  py-5">
      <div className="container grid md:grid-cols-2 lg:grid-cols-3">
        <div className="max-w-72 ">
          <Image className="md:mx-12 " src={logo} width={120} />
          <div>
            <p className="text-sm mt-10 leading-5">
              Welcome to Bright Brain Academy, a vibrant Co-Educational English
              Medium School nestled in the heart of Bagru, Jaipur.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="lg:justify-self-center mt-8 md:mt-0 flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-4 text-white">
            Get in Touch
          </h3>
          <div className="flex items-center mb-2">
            <FaPhone className="mr-3" />
            <span>123-456-7890</span>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-3" />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-3" />
            <span>123 Street Name, City, Country</span>
          </div>
          <div className="flex mt-4">
            <div className="flex items-center justify-center hover:bg-orange p-3 text-white border-solid border-1 border-[#ffffff80] rounded-full transition duration-75">
              <FaFacebookF />
            </div>
            <div className="flex items-center mx-1.5 justify-center hover:bg-orange p-3 text-white border-solid border-1 border-[#ffffff80] rounded-full transition duration-75">
              <FaYoutube className="" />
            </div>
            <div className="flex items-center mr-1.5 justify-center hover:bg-orange p-3 text-white border-solid border-1 border-[#ffffff80] rounded-full transition duration-75">
              <FaInstagram className="" />
            </div>
            <div className="flex items-center justify-center hover:bg-orange p-3 text-white border-solid border-1 border-[#ffffff80] rounded-full transition duration-75">
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="justify-self-start lg:mt-0 lg:justify-self-center flex flex-col items-start mt-8 md:mt-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="text-sm font-medium">
            <li className="mb-2 flex items-center hover:text-orange">
              <RiArrowRightSLine className="text-2xl" />
              <Link href="#">Home</Link>
            </li>
            <li className="mb-2 flex items-center hover:text-orange">
              <RiArrowRightSLine className="text-2xl" />
              <Link href="#">About Us</Link>
            </li>
            <li className="mb-2 flex items-center hover:text-orange">
              <RiArrowRightSLine className="text-2xl" />
              <Link href="#">Admissions</Link>
            </li>
            <li className="mb-2 flex items-center hover:text-orange">
              <RiArrowRightSLine className="text-2xl" />
              <Link href="#">Programs</Link>
            </li>
            <li className="mb-2 flex items-center hover:text-orange">
              <RiArrowRightSLine className="text-2xl" />
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; 2024 Bright Brain Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;