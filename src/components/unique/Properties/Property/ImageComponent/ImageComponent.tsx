'use client'
import Image from "next/image";
import {
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardArrowLeft
  } from "react-icons/md";

const ImageComponent = ({images}:string[]) => {
    return(
        <>
        <Image
          src={images[0]}
          alt="img"
          width={100}
          height={100}
          className="w-full h-72 object-cover rounded-xl"
        />


        {/* Left Arrow Button */}
        <button className="w-8 h-8 bg-gray-300 hover:bg-white hover:border transition duration-300 flex items-center justify-center absolute left-4 top-[44%] rounded-full opacity-0 group-hover:opacity-100">
          <MdOutlineKeyboardArrowLeft className="text-xl" />
        </button>

        {/* Right Arrow Button */}
        <button className="w-8 h-8 bg-gray-300 hover:bg-white hover:border transition duration-300 flex items-center justify-center absolute right-4 top-[44%] rounded-full opacity-0 group-hover:opacity-100">
          <MdOutlineKeyboardArrowRight className="text-xl" />
        </button>
        <ul className="absolute left-[40%] bottom-3 flex items-center gap-1">
          {images.map((e,i)=>(
            <li key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></li>
          ))}
        </ul>
        </>
    )
}

export default ImageComponent;