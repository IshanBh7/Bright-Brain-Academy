"use client";
import Image from "next/image";
import Carousel, { consts } from "react-elastic-carousel";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const elastic = [
  {
    id: "1",
    img: "/images/carousel-1.jpg", // Adjust path as needed
    title: "Empowering Future Leaders",
    subtitle: "Building Confidence, Character, and Creativity",
  },
  {
    id: "2",
    img: "/images/gallery/img3.jpg", // Adjust path as needed (optional)
    title: "Engaging Minds, Igniting Passion",
    subtitle: "Fostering a Love for Learning at Every Step",
  },
];
export default function CarouselDiv() {
  return (
    <div className="!mx-0">
      <Carousel
        className="relative !m-0"
        breakPoints={breakPoints}
        renderPagination={({ pages, activePage, onClick }) => {
          return <div></div>;
        }}
        renderArrow={({ type, onClick, isEdge }) => {
          const pointer =
            type === consts.PREV ? (
              <IoIosArrowDropleft className="absolute bottom-48 md:bottom-10 right-10 text-white text-5xl z-10" />
            ) : (
              <IoIosArrowDropright className="absolute bottom-60 md:bottom-24 right-10 text-white text-5xl z-10" />
            );
          return (
            <div onClick={onClick} disabled={isEdge}>
              {pointer}
            </div>
          );
        }}
      >
        {elastic.map((item) => (
          <div
            className="!m-0 bg-cover bg-center relative h-screen max-h-[520px] w-screen"
            style={{
              backgroundImage: `url(${
                item.id === "1"
                  ? "/images/gallery/img2.jpg"
                  : "/images/gallery/img5.jpg"
              })`,
            }}
            key={item.id}
          >
            <div className="bg-[url('../../public/images/bg-header-top.png')] h-[10px]"></div>

            <div className="!m-0 w-[80%] md:w-[100%] absolute bottom-40 md:bottom-28 pl-4 md:pl-20 ">
              <h3 className="text-4xl md:text-6xl font-semibold text-white mb-10">
                {item.title}
              </h3>
              <p className="text-lg md:text-2xl text-white">{item.subtitle}</p>
            </div>
            <div className="absolute bottom-0 bg-[url('../../public/images/bg-header-bottom.png')] w-[100%] h-[18px]"></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
