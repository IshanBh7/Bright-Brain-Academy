"use client";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import img from "../../../public/images/gallery/img1.jpeg";

const photos = [
  {
    src: "images/gallery/img1.jpeg",
    width: 150,
    height: 150,
  },
  { src: "images/gallery/img2.jpg", width: 150, height: 150 },
  { src: "images/gallery/img3.jpg", width: 150, height: 150 },
  { src: "images/gallery/img4.jpg", width: 150, height: 150 },
  { src: "images/gallery/img5.jpg", width: 150, height: 150 },
  { src: "images/gallery/img6.jpg", width: 150, height: 150 },
  { src: "images/gallery/img7.jpg", width: 150, height: 150 },
  { src: "images/gallery/img8.jpeg", width: 150, height: 150 },
  { src: "images/gallery/img9.jpeg", width: 150, height: 150 },
  { src: "images/gallery/img10.jpeg", width: 150, height: 150 },
  { src: "images/gallery/img11.jpg", width: 150, height: 150 },
];
export default function Gallery() {
  const [index, setIndex] = useState(-1);
  return (
    <div>
      {/* <div className="bg-[#65B741] text-white flex justify-between items-center px-10 h-16">
        <div className="font-semibold">GALLERY</div>
        <div>
          <Link className="mr-3 hover:text-orange" href="/">
            Home
          </Link>
          |
          <Link className="ml-3 hover:text-orange" href="gallery">
            Gallery
          </Link>
        </div>
      </div> */}
      <div className="px-20 ">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold mt-10 mb-10 md:mb-16 text-center ">
          Gallery
        </h1>
        <PhotoAlbum
          layout="rows"
          photos={photos}
          onClick={({ index: current }) => setIndex(current)}
        />
        <Lightbox
          index={index}
          slides={photos.map((photo) => ({
            src: photo.src,
            width: 600,
            height: 600,
          }))}
          open={index >= 0}
          close={() => setIndex(-1)}
          plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        />
      </div>
    </div>
  );
}
