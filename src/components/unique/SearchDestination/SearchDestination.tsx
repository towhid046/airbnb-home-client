"use client";

import axios from "axios";
import { useEffect, useState, SetStateAction, Dispatch } from "react";
import { SlLocationPin } from "react-icons/sl";

interface SearchDestinationProps {
  setIsSearchDestinationOpen: Dispatch<SetStateAction<boolean>>;
  setIsDatePickerOpen: Dispatch<SetStateAction<boolean>>;
  setSearchText: Dispatch<SetStateAction<string>>;
  isSearchDestinationOpen: boolean;
  handleClick: (value: string) => void;
  isActive: string;
  searchText: string;
}

const SearchDestination = ({
  setIsSearchDestinationOpen,
  isSearchDestinationOpen,
  handleClick,
  isActive,
  setIsDatePickerOpen,
  searchText,
  setSearchText,
}: SearchDestinationProps) => {
  const [locations, setLocations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadLocation = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/locations");
        setLocations(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadLocation();
  }, []);

  const handleSearchDestination = (e) => {
    e.stopPropagation();
    handleClick("destination");
    setIsSearchDestinationOpen(true);
    setIsDatePickerOpen(false);
  };
  return (
    <>
      <div
        onClick={(e) => handleSearchDestination(e)}
        className={`group text-[14px] px-7 py-3 flex-grow
           ${isActive === "destination" && "bg-white hover:bg-white"} 
        hover:bg-[#EBEBEB] transition duration-500 rounded-full relative`}
      >
        <h6 className="font-medium">Where</h6>
        <input
          type="text"
          placeholder="Search Destination"
          className="border-none outline-none text-gray-600 bg-transparent "
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {isSearchDestinationOpen && (
        <ul className="flex flex-col shadow-xl bg-white p-5 gap-2 text-lg text-gray-600 rounded-2xl absolute top-[84px] left-4">
          {locations.slice(0, 5).map((location: string, index: number) => (
            <li
              className="cursor-pointer hover:text-black transition duration-300 flex items-center gap-5 px-4 py-2 hover:bg-[#F4F4F4] rounded-lg"
              key={index}
            >
              <span className="p-3 text-xl rounded-lg bg-[#F4F4F4]">
                <SlLocationPin />
              </span>
              <span>{location}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default SearchDestination;
