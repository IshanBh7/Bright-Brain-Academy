"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo1.jpg";
import { useState, useRef, useEffect } from "react"; // Import useState and useRef hooks
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const menuItems = ["HOME", "ABOUT_US", "ADMISSIONS", "PROGRAMS", "GALLERY"];
  const submenuItems = {
    ABOUT_US: ["ABOUT US", "MISSION AND VISION"],
    ADMISSIONS: ["ADMISSIONS", "ADMISSION PROCESS"],
    PROGRAMS: ["PROGRAMS", "PLAYGROUP", "NURSERY", "KINDERGARDEN", "PREP"],
    GALLERY: ["GALLERY"],
  };
  const formatLinkText = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  // State to manage visibility of submenu items
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref to store the timeout ID
  const timeoutRef = useRef(null);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleMouseEnter(menuItem) {
    setActiveSubMenu(menuItem);
    clearTimeout(timeoutRef.current);
  }

  function handleMouseLeave() {
    // No need to close submenu when mouse leaves
    // Keep submenu open until mouse leaves submenu
  }

  function handleSubmenuMouseEnter() {
    // Clear the timeout when mouse enters the submenu
    clearTimeout(timeoutRef.current);
  }

  function handleSubmenuMouseLeave() {
    // Set a timeout to close the submenu after 2 seconds
    timeoutRef.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 1500);
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="nav"
        initial={{
          y: -20,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.75
        }}
        className="sticky top-0 z-50">
        <div className="flex md:justify-around items-center text-black bg-[#fbc334] py-4 md:py-4">
          <div className="block md:hidden ml-4 text-xl" onClick={toggleMenu}>
            {isMenuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
          </div>
          <div className="flex items-center ">
            <Image
              className=" ml-6 mr-1 md:mr-0 md:ml-0"
              src={logo}
              width={80}
              height={80}
              alt="logo"
            />
            <h1 className="text-xl ml-2 mr-1 md:ml-5 font-extrabold">
              BRIGHT BRAIN ACADEMY
            </h1>
          </div>
          <div className="md:flex hidden">
            {menuItems.map((menuItem, index) => (
              <motion.div
                key={index}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.75 + index * 0.3
                }}
                className="relative py-2 px-1 lg:px-2.5 text-xs lg:text-base rounded-xl font-medium transition duration-75 ease-in-out hover:text-white hover:bg-[#06346a]"
                onMouseEnter={() => handleMouseEnter(menuItem)}
              >
                {menuItem === "HOME" ? (
                  <Link href="/" className="cursor-pointer">
                    {menuItem}
                  </Link>
                ) : (
                  <>
                    <h1 className="cursor-pointer">
                      {menuItem === "ABOUT_US" ? "ABOUT US" : menuItem}
                    </h1>
                    {/* Render submenu if activeSubMenu matches */}
                    {activeSubMenu === menuItem && (
                      <div
                        className="absolute p-2 transition duration-75 ease-in-out rounded-lg mt-4 w-[200px] font-normal z-10 bg-[#06346a] border border-gray-200 "
                        onMouseEnter={handleSubmenuMouseEnter}
                        onMouseLeave={handleSubmenuMouseLeave}
                      >
                        {submenuItems[menuItem].map((subItem) => (
                          <div
                            className="transition duration-75 ease-in-out text-white hover:bg-[#fbc334] px-2 py-1 rounded-lg"
                            key={subItem}
                          >
                            <Link href={`/${formatLinkText(subItem)}`}>
                              {subItem}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </div>
          <div className="hidden md:block transition duration-100  ease-in-out hover:mb-2">
            <Link
              className="bg-[#06346a] text-white text-[10px] lg:text-sm  rounded-full font-medium py-2 px-3"
              as={Link}
              href={`${formatLinkText("CONTACT US")}`}
            >
              CONTACT US
            </Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute z-20 h-screen pt-16 overflow-hidden !text-white w-full bg-[#fbc334]">
            <Accordion>
              {menuItems.map((item, index) => (
                <AccordionItem
                  classNames={{
                    heading: "py-2",
                    title: "text-white font-semibold",
                    indicator: "text-white",
                    trigger: "text-white",
                  }}
                  key={`${item}-${index}`}
                  title={item}
                >
                  {item === "HOME" ? (
                    <div key={`${item}`}>
                      <Link
                        className="w-full text-white"
                        href="/"
                        size="lg"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        {item}
                      </Link>
                    </div>
                  ) : (
                    <div className="ml-5">
                      {submenuItems[item] &&
                        submenuItems[item].map((subItem, subIndex) => (
                          <div className="py-1" key={`${item}-${subIndex}`}>
                            <Link
                              className="hover:text-[#FE5D37] py-2 w-full text-white"
                              href={`/${formatLinkText(subItem)}`} // Format the link text for other items
                              size="lg"
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                              {subItem}
                            </Link>
                          </div>
                        ))}
                    </div>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
            <div className="container absolute bottom-[70px] mt-5 flex items-center justify-center md:justify-between">
              <div className="w-1/3 bg-[#06346a] p-[20px] rounded-tr-full"></div>

              <div className="text-center font-thin flex justify-center lg:w-1/6">
                <FaFacebookF className="mr-3 ml-2" />
                <FaTwitter className="mr-3 ml-3" />
                <FaInstagram className="mr-3 ml-3" />
                <FaLinkedinIn className="ml-3 mr-2" />
              </div>

              <div className="w-1/3 bg-[#06346a] p-[20px] rounded-tl-full"></div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
