"use client";
import DateRangePicker from "@/components/unique/DateRangePicker/DateRangePicker";
import * as React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function DatePicker() {
  const [isDatePickerOpen, setIsDatePickerOpen] =
    React.useState<boolean>(false);

  const checkInHandler = (e) => {
    e.stopPropagation();
    setIsDatePickerOpen(true);
  };

  return (
    <>
      <div
        onClick={() => setIsDatePickerOpen(false)}
        className="flex justify-center max-w-4xl mx-auto px-4 mt-5 mb-2 "
      >
        <div className="border bg-white w-full rounded-full flex shadow-md justify-between">
          <div className="text-[14px] px-7 py-3 flex-grow hover:bg-[#EBEBEB] transition duration-500 rounded-full cursor-pointer relative">
            <h6 className="font-medium">Where</h6>
            <p className="text-gray-600">Search Destination</p>
          </div>

          <div className="border-l border-gray-300 h-8 my-auto"></div>

          <div
            onClick={checkInHandler}
            className="text-[14px] px-7 py-3 hover:bg-[#EBEBEB] transition duration-500 rounded-full cursor-pointer relative"
          >
            <h6 className="font-medium">Check in</h6>
            <p className="text-gray-600">Add dates</p>
          </div>

          <div className="border-l border-gray-300 h-8 my-auto"></div>

          <div
            onClick={checkInHandler}
            className="text-[14px] px-7 py-3 hover:bg-[#EBEBEB] transition duration-500 rounded-full cursor-pointer relative"
          >
            <h6 className="font-medium">Check out</h6>
            <p className="text-gray-600">Add dates</p>
          </div>
          <div className="border-l border-gray-300 h-8 my-auto"></div>
          <div className="text-[14px] pl-7 pr-4 py-3 flex-grow hover:bg-[#EBEBEB] transition duration-500 rounded-full cursor-pointer flex items-center justify-between relative">
            <div>
              <h6 className="font-medium">Who</h6>
              <p className="text-gray-600">Add guests</p>
            </div>
            <button className="w-12 h-12 bg-[#FF385C] rounded-full hover:bg-[#E21A5F] text-white transition duration-300 flex items-center justify-center">
              <IoSearchOutline className="text-xl" />
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
              <DateRangePicker />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
