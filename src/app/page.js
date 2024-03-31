import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Brochure from "@/components/sections/Brochure";
import CarouselDiv from "@/components/sections/Carousel";
import Mission from "@/components/sections/Mission";
import Programs from "@/components/sections/Programs";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import * as React from "react";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <CarouselDiv />
      <About />
      <Mission />
      <Programs />
      <Brochure />
      
      {/* 
      Navbar                  -    Done
      Carousel Component
      More about us           -    Done
      School Faciliities
      Mission and vision      -    Done
      Programs                -    Done
      Brochure                -    Done
      Footer
      */}
    </div>
  );
}
