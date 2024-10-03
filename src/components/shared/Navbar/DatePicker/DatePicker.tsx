"use client";
import DateRangePicker from "@/components/unique/DateRangePicker/DateRangePicker";
import React, { Dispatch, MouseEvent, SetStateAction } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { formatDate } from "@/utils/formatDate";
import SearchDestination from "./../../../unique/SearchDestination/SearchDestination";

interface DatePickerProps {
  setIsDatePickerOpen: Dispatch<SetStateAction<boolean>>;
  isDatePickerOpen: boolean;
  setIsSearchDestinationOpen: Dispatch<SetStateAction<boolean>>;
  isSearchDestinationOpen: boolean;
  checkInHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  obj: {
    handleFilterByDate: () => void;
    setStartDate: Dispatch<SetStateAction<number>>;
    setEndDate: Dispatch<SetStateAction<number>>;
    setSearchText:Dispatch<SetStateAction<string>>;
    startDate: number;
    endDate: number;
    searchText:string;
  };
}
const DatePicker = ({
  setIsSearchDestinationOpen,
  isSearchDestinationOpen,
  setIsDatePickerOpen,
  isDatePickerOpen,
  checkInHandler,
  obj,
}: DatePickerProps) => {
  const [isActive, setIsActive] = useState<string>("");
  const { handleFilterByDate, setStartDate, setEndDate, startDate, endDate, searchText, setSearchText } =
    obj;

  const handleClick = (value: string) => {
    if (value === "checkIn") {
      setIsActive("checkIn");
    }
    if (value=== "checkOut") {
      setIsActive("checkOut");
    }
    if (value=== "destination") {
      setIsActive("destination");
    }
  };

  return (
    <>
      <div
        onClick={() => {
          setIsDatePickerOpen(false);
        }}
        className={`flex justify-center max-w-4xl mx-auto px-4 mt-5 mb-2 relative `}
      >
        <div
          className={`${
            (isDatePickerOpen || isSearchDestinationOpen)  ? "bg-[#EBEBfB] " : "bg-white"
          } border   w-full rounded-full flex shadow-md justify-between`}
        >
          {/* Search Destination */}
          <SearchDestination
            isSearchDestinationOpen={isSearchDestinationOpen}
            setIsSearchDestinationOpen={setIsSearchDestinationOpen}
            handleClick={handleClick}
            isActive={isActive}
            setIsDatePickerOpen={setIsDatePickerOpen}
            setSearchText={setSearchText}
            searchText={searchText}
          />

          <div className="border-l border-gray-300 h-8 my-auto"></div>

          {/* Check In button */}

          <button
            onClick={(e) => {
              handleClick("checkIn");
              checkInHandler(e);
            }}
            className={`${
              isActive === "checkIn" && "bg-white hover:bg-white"
            } text-[14px] px-7 py-3 hover:bg-[#EBEBEB]  transition duration-500 rounded-full cursor-pointer relative`}
          >
            <p className="font-medium">Check in</p>
            <p className="text-gray-600">
              {!startDate ? "Add dates" : formatDate(startDate)}
            </p>
          </button>

          <div className="border-l border-gray-300 h-8 my-auto"></div>

          {/* Check out button */}
          <button
            onClick={(e) => {
              handleClick("checkOut");
              checkInHandler(e);
            }}
            className={`${
              isActive === "checkOut" && "bg-white hover:bg-white"
            }  text-[14px] px-7 py-3 hover:bg-[#EBEBEB] transition duration-500 rounded-full cursor-pointer relative`}
          >
            <p className="font-medium">Check out</p>
            <p className="text-gray-600">
              {!endDate ? "Add dates" : formatDate(endDate)}
            </p>
          </button>

          <div className="border-l border-gray-300 h-8 my-auto"></div>
          <div className="text-[14px] pl-7 pr-4 py-3 flex-grow hover:bg-[#EBEBEB] transition duration-500 rounded-full cursor-pointer flex items-center justify-between relative">
            <div>
              <h6 className="font-medium">Who</h6>
              <p className="text-gray-600">Add guests</p>
            </div>
            <button
              onClick={handleFilterByDate}
              className={` ${
                (isDatePickerOpen || isSearchDestinationOpen) ? "py-3 px-4" : "w-12 h-12"
              } bg-[#FF385C] rounded-full hover:bg-[#E21A5F] gap-2 text-white transition duration-300 flex items-center justify-center`}
            >
              <IoSearchOutline className="text-xl" />
              {(isDatePickerOpen || isSearchDestinationOpen) && <p className="text-white">Search</p>}
            </button>
          </div>
        </div>
      </div>
      {isDatePickerOpen && (
        <div
          onClick={() => setIsDatePickerOpen(false)}
          className=" min-h-screen -z-10  fixed w-full top-28  mx-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="border rounded-[28px] shadow-lg max-w-md pb-8 mx-auto bg-white"
          >
            <div>
              <DateRangePicker
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DatePicker;
