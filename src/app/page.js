import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Brochure from "@/components/sections/Brochure";
import CarouselDiv from "@/components/sections/Carousel";
import Mission from "@/components/sections/Mission";
import Programs from "@/components/sections/Programs";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import * as React from "react";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <CarouselDiv />
      <About />
      <Mission />
      <Programs />
      <Brochure />
      <Testimonials/>
    </div>
  );
}
