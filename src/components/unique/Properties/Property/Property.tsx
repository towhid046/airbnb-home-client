import Image from "next/image";
import { PropertyProps } from "../Properties";
import { MdOutlineStarPurple500 } from "react-icons/md";
interface PropertyComponentProps {
  property: PropertyProps;
}

const Property = ({ property }: PropertyComponentProps) => {
  const {
    images,
    location,
    price,
    author: { name, image },
    rating,
    endDate,
    startDate,
  } = property;

  return (
    <div>
      <figure>
        {/* Uncomment this if you want to display multiple images */}
        {/* {images.map((img) => (
          <Image
            src={img}
            alt="img"
            width={100}
            height={100}
            key={img}
            className="w-full h-64 object-cover rounded-xl"
          />
        ))} */}
      <Image
          src={images[0]}
          alt="img"
          width={100}
          height={100}
          className="w-full h-64 object-cover rounded-xl"
        />
      </figure>

      <div className=" mt-3">
        <div className="flex justify-between">
          <h2 className='font-semibold text-lg'>{location}</h2>
          <p className="flex items-center gap-1">
          <MdOutlineStarPurple500/>
            {rating}
            </p>
        </div>
        <p className="text-gray-500 text-[15px]">Stay with {name}</p>
        <p className="text-gray-500 text-[15px]">
          {/* Display date range */}
          {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
        </p>
        <p className="mt-2">
          <strong>${price} </strong>night
        </p>
      </div>
    </div>
  );
};

export default Property;
