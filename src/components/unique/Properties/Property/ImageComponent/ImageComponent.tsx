"use client";
import Image from "next/image";
import { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

interface ImageComponentProps {
  images: string[];
}

const ImageComponent = ({ images }: ImageComponentProps) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const handleNextImg = () => {
    if (activeImgIndex < images.length - 1) {
      setActiveImgIndex(activeImgIndex + 1);
    }
  };
  const handlePrevImg = () => {
    if (activeImgIndex >= 1) {
      setActiveImgIndex(activeImgIndex - 1);
    }
  };
  return (
    <>
      <Image
        src={images[activeImgIndex]}
        alt="img"
        width={100}
        height={100}
        className="w-full h-72 object-cover rounded-xl"
      />

      {/* Left Arrow Button */}
      <button
        onClick={handlePrevImg}
        className={`
        ${activeImgIndex === 0 && "hidden"}
        w-8 h-8 bg-gray-300 hover:bg-white hover:border transition duration-300 flex items-center justify-center absolute left-4 top-[44%] rounded-full opacity-0 group-hover:opacity-100`}
      >
        <MdOutlineKeyboardArrowLeft className="text-xl" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={handleNextImg}
        className={`
          ${activeImgIndex === images.length - 1 && "hidden"}
          w-8 h-8 bg-gray-300 hover:bg-white hover:border transition duration-300 flex items-center justify-center absolute right-4 top-[44%] rounded-full opacity-0 group-hover:opacity-100`}
      >
        <MdOutlineKeyboardArrowRight className="text-xl" />
      </button>
      <ul className="absolute left-[40%] bottom-3 flex items-center gap-1">
        {images.map((e, i) => (
          <li
            key={i}
            className={`w-1.5 h-1.5  rounded-full
            ${activeImgIndex === i ? "bg-white" : "bg-gray-400"}
            `}
          ></li>
        ))}
      </ul>
    </>
  );
};

export default ImageComponent;
