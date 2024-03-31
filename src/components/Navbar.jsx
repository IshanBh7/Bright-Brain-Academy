"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { AcmeLogo } from "./AcmeLogo";
import Image from "next/image";
import Logo from "../../public/images/logo.jpg";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["HOME", "ABOUT_US", "ADMISSIONS", "PROGRAMS", "GALLERY"];
  const submenuItems = {
    ABOUT_US: ["ABOUT US", "MISSION AND VISION"],
    ADMISSIONS: ["ADMISSIONS", "ADMISSION PROCESS"],
    PROGRAMS: ["PROGRAMS", "PLAY GROUP", "NURSERY", "KINDERGARDEN", "PREP"],
    GALLERY: ["GALLERY"],
  };
  const formatLinkText = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <Navbar
      isBordered
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="py-3 bg-orange !max-w-[2000px]"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand className="ml-6"> 
    <div className="flex items-center pr-12">
      <Image
        alt={'BBA-logo'}
        height={30}
        width={30}
        src='/images/BBAlogo.png'
      />
      <p className="text-xl text-blue font-bold text-inherit ml-2">BRIGHT BRAIN ACADEMY</p>
    </div>
  </NavbarBrand>
      </NavbarContent>

      

      <NavbarContent  className="hidden sm:flex ">
  <NavbarBrand className="ml-6"> 
    <div className="flex items-center pr-12">
      <Image
      className="!w-[7rem] !h-[2rem]"
        alt={'BBA-logo'}
        width={50}
        height={50}
        src='/images/BBAlogo.png'
      />
      <p className="md:text-base lg:text-xl text-blue font-bold text-inherit ml-2">BRIGHT BRAIN ACADEMY</p>
    </div>
  </NavbarBrand>
</NavbarContent>


      <NavbarContent className="hidden w-[50%] sm:flex justify-center font-medium">
        <NavbarItem>
          <Link
            className="cursor-pointer hover:bg-blue py-2 px-3 hover:text-white text-black hover:underline hover:underline-offset-2 hover:rounded-xl"
            href="/"
          >
            HOME
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem className="cursor-pointer hover:bg-blue hover:text-white hover:p-2 hover:px-3 hover:rounded-xl hover:underline hover:underline-offset-2">
            <DropdownTrigger>ABOUT US</DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem
              className="hover:!bg-blue hover:!text-white"
              href={`${formatLinkText("ABOUT US")}`}
              key="home"
            >
              ABOUT US
            </DropdownItem>
            <DropdownItem
              className="hover:!bg-blue hover:!text-white"
              href={`${formatLinkText("MISSION AND VISION")}`}
              key="home"
            >
              MIISION AND VISION
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem className="cursor-pointer hover:bg-blue hover:text-white hover:p-2 hover:px-3 hover:rounded-xl hover:underline hover:underline-offset-2">
            <DropdownTrigger>ADMISSIONS</DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem
              className="hover:!bg-blue hover:!text-white"
              href={`${formatLinkText("ADMISSIONS")}`}
              key="home"
            >
              ADMISSION
            </DropdownItem>
            <DropdownItem
              className="hover:!bg-blue hover:!text-white"
              href={`${formatLinkText("ADMISSION PROCESS")}`}
              key="home"
            >
              ADMISSION PROCESS
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem className="cursor-pointer hover:bg-blue hover:text-white hover:p-2 hover:px-3 hover:rounded-xl hover:underline hover:underline-offset-2">
            <DropdownTrigger>PROGRAMS</DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem
              className="hover:!bg-blue hover:!text-white"
              href={`${formatLinkText("PROGRAMS")}`}
              key="home"
            >
              PROGRAMS
            </DropdownItem>
            <DropdownItem
              className="hover:!bg-blue hover:!text-white"
              href={`${formatLinkText("PLAYGROUP")}`}
              key="home"
            >
              PLAY GROUP
            </DropdownItem>
            <DropdownItem
              className="hover:!bg-blue hover:!text-white"
              href={`${formatLinkText("NURSERY")}`}
              key="home"
            >
              NURSERY
            </DropdownItem>
            <DropdownItem
              className="hover:!bg-blue hover:!text-white"
              href={`${formatLinkText("KINDERGARDEN")}`}
              key="home"
            >
              KINDERGARDEN
            </DropdownItem>
            <DropdownItem
              className="hover:!bg-blue hover:!text-white"
              href={`${formatLinkText("PREP")}`}
              key="home"
            >
              PREP
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem className="cursor-pointer hover:bg-blue hover:text-white hover:p-2 hover:px-3 hover:rounded-xl hover:underline hover:underline-offset-2">
            <DropdownTrigger>GALLERY</DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem
              className="hover:!bg-blue hover:!text-white"
              href={`${formatLinkText("GALLERY")}`}
              key="home"
            >
              GALLERY
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent className="hidden md:block md:flex items-center" justify="end">
        <NavbarItem className="relative">
          <Button
            className="bg-blue text-white rounded-full font-medium mr-7"
            as={Link}
            href={`${formatLinkText("CONTACT US")}`}
          >
            CONTACT US
          </Button>
          {/* <FaArrowRight className="absolute top-[30%] right-2 text-white" /> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="mt-60">
        <Accordion>
          {menuItems.map((item, index) => (
            <AccordionItem key={`${item}-${index}`} title={item}>
              {item === "HOME" ? (
                <NavbarMenuItem key={`${item}`}>
                  <Link className="w-full text-black" href="/" size="lg">
                    {item}
                  </Link>
                </NavbarMenuItem>
              ) : (
                <div className="ml-5">
                  {submenuItems[item] &&
                    submenuItems[item].map((subItem, subIndex) => (
                      <NavbarMenuItem key={`${item}-${subIndex}`}>
                        <Link
                          className="hover:text-orange w-full text-black"
                          href={`/${formatLinkText(subItem)}`} // Format the link text for other items
                          size="lg"
                        >
                          {subItem}
                        </Link>
                      </NavbarMenuItem>
                    ))}
                </div>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </NavbarMenu>
    </Navbar>
  );
}
