"use client";
import DateRangePicker from "@/components/unique/DateRangePicker/DateRangePicker";
import React, { Dispatch, MouseEvent, SetStateAction } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { formatDate } from "@/utils/formatDate";

interface DatePickerProps {
  setIsDatePickerOpen: Dispatch<SetStateAction<boolean>>;
  isDatePickerOpen: boolean;
  checkInHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}
const DatePicker = ({
  setIsDatePickerOpen,
  isDatePickerOpen,
  checkInHandler,
}: DatePickerProps) => {
  const [startDate, setStartDate] = useState<number>(0);
  const [endDate, setEndDate] = useState<number>(0);
  const [isActive, setIsActive] = useState<string>("");

  const handleFilterByDate = () => {
    console.log(startDate);
    console.log(endDate);
  };

  const handleClick = (value: string) => {
    if (value === "checkIn") {
      setIsActive("checkIn");
    } else {
      setIsActive("checkOut");
    }
  };

  return (
    <>
      <div
        onClick={() => setIsDatePickerOpen(false)}
        className={`flex justify-center max-w-4xl mx-auto px-4 mt-5 mb-2 `}
      >
        <div
          className={`${
            isDatePickerOpen ? "bg-[#EBEBfB] " : "bg-white"
          } border   w-full rounded-full flex shadow-md justify-between`}
        >
          <div className="text-[14px] px-7 py-3 flex-grow hover:bg-[#EBEBEB] transition duration-500 rounded-full cursor-pointer relative">
            <h6 className="font-medium">Where</h6>
            <p className="text-gray-600">Search Destination</p>
          </div>

          <div className="border-l border-gray-300 h-8 my-auto"></div>

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
                isDatePickerOpen ? "py-3 px-4" : "w-12 h-12"
              } bg-[#FF385C] rounded-full hover:bg-[#E21A5F] gap-2 text-white transition duration-300 flex items-center justify-center`}
            >
              <IoSearchOutline className="text-xl" />
              {isDatePickerOpen && <p className="text-white">Search</p>}
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
