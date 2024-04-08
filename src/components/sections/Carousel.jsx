"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import {motion,AnimatePresence} from "framer-motion"
 
const ElasticCarousel = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const updateImageHeight = () => {
      const windowHeight = window.innerHeight;
      setImageHeight(windowHeight - 80);
    };

    updateImageHeight(); // Initial call to set height
    // window.addEventListener("resize", updateImageHeight); // Update height on resize

    // return () => {
    //   window.removeEventListener("resize", updateImageHeight); // Cleanup
    // };
  }, []);

  const nextItem = () => {
    setCurrentItem((prevItem) =>
      prevItem === items.length - 1 ? 0 : prevItem + 1
    );
  };

  const prevItem = () => {
    setCurrentItem((prevItem) =>
      prevItem === 0 ? items.length - 1 : prevItem - 1
    );
  };

  return (
    <AnimatePresence mode="wait">
    <div className="relative">
      <div className="overflow-x-hidden">
        <div
          className="flex relative transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentItem * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-none relative overflow-hidden w-full max-h-[600px] md:max-h-screen"
              style={{ height: `${imageHeight}px` }}
            >
              <div className="absolute top-0 left-0 w-full  h-full bg-black opacity-10" />
              <Image
                src={item.img}
                width={800}
                height={imageHeight}
                alt={item.title}
                className="block w-full h-full max-h-[600px] md:max-h-screen object-center object-cover"
              />
              <div 
              className="absolute bottom-52 md:bottom-28 md:left-10 p-4 text-white">
                <motion.h3 
                initial={{
                  x:-60,
                  opacity:1
                }} 
                animate={{
                  x:0,
                  opacity:1
                }}
                end={{
                  x:0,
                  opacity:1
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 1,
                  delay:0.5
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-10">
                  {item.title}
                </motion.h3>
                <motion.p initial={{
                  x:60,
                  opacity:1
                }} 
                animate={{
                  x:0,
                  opacity:1
                }}
                end={{
                  x:0,
                  opacity:1
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 1,
                  delay:0.5
                }} className="text-base md:text-xl mg:text-2xl">
                  {item.subtitle}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
        <motion.button
        initial={{
          y:60,
          opacity:1
        }} 
        animate={{
          y:0,
          opacity:1
        }}
        end={{
          y:0,
          opacity:1
        }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay:0.5
        }}
          className="absolute text-5xl font-semibold top-[75%] md:top-[75%] right-8 md:right-12 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-15 h-15 flex items-center justify-center"
          onClick={prevItem}
        >
          <IoIosArrowDropleft />
        </motion.button>
        <motion.button
        initial={{
          y:-60,
          opacity:1
        }} 
        animate={{
          y:0,
          opacity:1
        }}
        end={{
          y:0,
          opacity:1
        }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay:0.5
        }}
          className="absolute text-5xl font-semibold top-[85%] md:top-[85%] right-8 md:right-12 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-15 h-15 flex items-center justify-center"
          onClick={nextItem}
        >
          <IoIosArrowDropright />
        </motion.button>
      </div>
    </div>
    
    </AnimatePresence>
  );
};

// Usage:
const elastic = [
  {
    id: "1",
    img: "/images/gallery/img5.jpg",
    title: "Great People Great Future",
    subtitle: "Building Confidence, Character, and Creativity",
  },
  {
    id: "2",
    img: "/images/gallery/img3.jpg",
    title: "Engaging Minds, Igniting Passion",
    subtitle: "Fostering a Love for Learning at Every Step",
  },

  {
    id: "3",
    img: "/images/gallery/img2.jpg",
    title: "A Tapestry of Learning",
    subtitle: "Crafting a Brighter Future, One Student at a Time",
  },

  {
    id: "4",
    img: "/images/gallery/img10.jpeg",
    title: "Journey of Discovery",
    subtitle: "Unleashing Potential, Igniting Passion",
  },
];

const App = () => {
  return (
    <div>
      <ElasticCarousel items={elastic} />
    </div>
  );
};

export default App;
