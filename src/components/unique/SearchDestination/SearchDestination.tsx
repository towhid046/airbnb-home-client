"use client";

import axios from "axios";
import { useEffect, useState, SetStateAction, Dispatch } from "react";
import { SlLocationPin } from "react-icons/sl";

interface SearchDestinationProps {
  setIsSearchDestinationOpen: Dispatch<SetStateAction<boolean>>;
  setIsDatePickerOpen: Dispatch<SetStateAction<boolean>>;
  setSearchText: Dispatch<SetStateAction<string>>;
  setCategory: Dispatch<SetStateAction<string>>;
  setStartDate: Dispatch<SetStateAction<number>>;
  setEndDate: Dispatch<SetStateAction<number>>;
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
  setCategory,
  setStartDate,
  setEndDate,
}: SearchDestinationProps) => {
  const [locations, setLocations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadLocation = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `https://airbnb-replica-server.vercel.app/locations?search=${searchText}`
        );
        setLocations(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadLocation();
  }, [searchText]);

  const handleSearchDestination = (e) => {
    e.stopPropagation();
    handleClick("destination");
    setIsSearchDestinationOpen(true);
    setIsDatePickerOpen(false);
    setCategory("");
    setStartDate(0);
    setEndDate(0);
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
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {isSearchDestinationOpen && (
        <div className="fixed w-full min-h-screen top-24">
          <ul className="flex flex-col shadow-xl bg-white p-5 gap-2 text-lg text-gray-600 rounded-2xl absolute top-[84px] left-4">
            {isLoading ? (
              <p className="px-4">Loading...</p>
            ) : (
              !locations.length && <p className="px-4">Location Not Found</p>
            )}
            {locations.slice(0, 5).map((location: string, index: number) => (
              <li
                className="cursor-pointer hover:text-black transition duration-300 flex items-center gap-5 px-4 py-2 hover:bg-[#F4F4F4] rounded-lg"
                key={index}
              >
                <span className="p-3 text-xl rounded-lg bg-[#F4F4F4]">
                  <SlLocationPin />
                </span>
                <span onClick={(e) => setSearchText(e.target?.innerText)}>
                  {location}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default SearchDestination;
