import Image from "next/image";
import { PropertyProps } from "../Properties";
import {
  MdOutlineStarPurple500
} from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { formatDate } from "@/utils/formatDate";
import ImageComponent from "./ImageComponent/ImageComponent";

interface PropertyComponentProps {
  property: PropertyProps;
  isTaxInclude:boolean,
}

const Property = ({ property, isTaxInclude }: PropertyComponentProps) => {
  const {
    images,
    location,
    price,
    author,
    rating,
    endDate,
    startDate,
  } = property;

  return (
    <div className="group">
      <div className="relative cursor-pointer">
        <p className="absolute top-4 z-10 left-4 py-1 px-3 font-semibold bg-white rounded-full">
          Guest favorite
        </p>

        <span className="absolute top-4 right-4 cursor-pointer">
          <IoMdHeartEmpty className="text-2xl text-white" />
        </span>

        {/* Author image with hover skew effect */}
        <div className="absolute bottom-4 left-4 bg-[#ECECEC] pl-1 rounded-r-lg flex items-center justify-center border-shadow-sm transform transition-transform duration-300 group-hover:-translate-y-1">
          <div className="border-l-2 border-gray-300 py-4 pr-3">
            <Image
              width={100}
              height={100}
              src={author?.image}
              alt={author?.name}
              className="rounded-full w-10 h-10 ml-2"
            />
          </div>
        </div>

        <ImageComponent images={images}/>
      </div>

      {/* Property Information */}
      <div className="mt-3">
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg">{location}</h2>
          <p className="flex items-center gap-1">
            <MdOutlineStarPurple500 />
            {rating}
          </p>
        </div>
        <p className="text-gray-500 text-[15px]">Stay with {author?.name}</p>
        <p className="text-gray-500 text-[15px]">
          {/* Display date range */}
          {formatDate(startDate)} - {formatDate(endDate)}
        </p>
        <p className="mt-2">
          { isTaxInclude ?  
          <>
          <strong>${price * 3} </strong>
          <span>total before taxes</span>
          </>
           : 
           <>
           <strong>${price} </strong>
           <span>night</span>
           </>}
        </p>
      </div>
    </div>
  );
};

export default Property;
