"use client";
import React from "react";
import Logo from "./../Logo/Logo";
import { TbWorld } from "react-icons/tb";
import { MdMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import DatePicker from "./DatePicker/DatePicker";

interface NavbarProps {
  handleFilterByDate: () => void;
  setStartDate: React.Dispatch<React.SetStateAction<number>>;
  setEndDate: React.Dispatch<React.SetStateAction<number>>;
  startDate: number;
  endDate: number;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

interface NavProps {
  obj: NavbarProps;
}
const Navbar = ({ obj }: NavProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] =
    React.useState<boolean>(false);
  const [isSearchDestinationOpen, setIsSearchDestinationOpen] =
    React.useState<boolean>(false);

  const checkInHandler = () => {
    setIsDatePickerOpen(true);
    setIsSearchDestinationOpen(false);
  };

  return (
    <nav
      onClick={() => {
        setIsDatePickerOpen(false);
        setIsSearchDestinationOpen(false);
      }}
      className="py-4 bg-white z-50 border-b"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div></div>
        <ul className="flex items-center gap-7">
          <li className="text-lg text-gray-900 font-medium">Stays</li>
          <li className="text-lg text-gray-600 hover:bg-[#EfEfEf] rounded-full py-2 px-4 cursor-pointer transition duration-500">
            Experiences
          </li>
        </ul>
        <div className="flex items-center gap-1">
          <button className="text-gray-600 hover:bg-[#EfEfEf] rounded-full py-2 px-4 cursor-pointer transition duration-500 font-medium">
            Airbnb your home
          </button>
          <button className="text-gray-600 h-10 w-10 hover:bg-[#EfEfEf] rounded-full flex items-center justify-center cursor-pointer transition duration-500 font-semibold">
            <TbWorld className="text-lg" />
          </button>
          <button className="border rounded-full flex items-center gap-3 p-3 ml-1 hover:shadow-lg transition-shadow duration-500">
            <MdMenu className="text-2xl text-gray-600" />
            <FaUserCircle className="text-2xl text-gray-600" />
          </button>
        </div>
      </div>
      <div>
        {/* Render DatePicker correctly here */}
        <DatePicker
          obj={obj}
          checkInHandler={checkInHandler}
          isDatePickerOpen={isDatePickerOpen}
          setIsDatePickerOpen={setIsDatePickerOpen}
          isSearchDestinationOpen={isSearchDestinationOpen}
          setIsSearchDestinationOpen={setIsSearchDestinationOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
