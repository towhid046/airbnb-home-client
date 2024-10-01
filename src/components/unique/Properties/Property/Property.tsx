import Image from "next/image";

export interface PropertyProps {
    images: string[];
    location: string;
    price: number;
    rating: number;
    startDate: number;
    endDate: number;
    amenities: string[];
    propertyType: string;
    author: {
      name: string;
      image: string;
    };
  }
const Property = ({property}:PropertyProps) => {
const {images, location, price, author:{name, image}, rating, endDate, startDate} = property;

return <div>
<figure>
   {/* {images.map(img=>(
    <Image src={img} alt='img' width={100} height={100} key={img} className="w-full h-64 object-cover rounded-xl "/>
   ))} */}
    <Image src={images[0]} alt='img' width={100} height={100} className="w-full h-64 object-cover rounded-xl "/>

</figure>
<div className="text-[15px]">
  <div className="flex justify-between">
  <h2>{location}</h2>
<p>{rating}</p>
  </div>
  <p className="text-gray-500 text-[14px]">Stay with {name}</p>
  <p className="text-gray-500 text-[14px]">Date</p>
  <p className="mt-2">
    <strong>${price} night</strong>
  </p>
  
</div>
</div>
}
export default Property;