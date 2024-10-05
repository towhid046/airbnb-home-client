"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { IoWifiOutline } from "react-icons/io5";

// Define types for the state and slider values

interface SetFilterProps {
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>;
}

const FilterModel = ({ setIsFilterOpen }: SetFilterProps) => {
  // Initialize the state with the range type
  const [minPrice, setMinPrice] = useState<number>(50);
  const [maxPrice, setMaxPrice] = useState<number>(500);

  // Event handler for when the slider value changes
  const handleSliderChange = (value: number | number[]): void => {
    if (Array.isArray(value)) {
      setMinPrice(value[0]);
      setMaxPrice(value[1]);
    }
  };

  return (
    <section
      onClick={() => setIsFilterOpen(false)}
      className="fixed left-0 top-0 bg-black bg-opacity-50 w-full min-h-screen flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white py-6 rounded-xl max-w-[32rem] mx-auto space-y-4 overflow-y-scroll relative"
      >
        <header className="flex justify-between px-6">
          <button
            className="hover:bg-gray-100 transition duration-300 rounded-full h-8 w-8 flex items-center justify-center"
            onClick={() => setIsFilterOpen(false)}
          >
            <RxCross2 className="text-lg" />
          </button>
          <h2 className="font-bold text-lg">Filters</h2>
          <div></div>
        </header>
        <hr />
        <div className="px-6 space-y-6">
          {/* price range */}
          <div className=" space-y-5">
            <label htmlFor="" className="inline-block">
              <h3 className="text-lg font-semibold text-gray-800">
                Price Range
              </h3>
              <p className="text-gray-600">
                Nightly price before fees and taxes
              </p>
            </label>
            <div>
              <Slider
                range
                min={50}
                max={500}
                defaultValue={[50, 500]}
                onChange={handleSliderChange}
                allowCross={false}
                className="w-full"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col items-center justify-center gap-1">
                <p className="text-gray-500 font-semibold text-[14px]">
                  Minimum
                </p>
                <span className="border w-16 h-10 rounded-full flex justify-center items-center">
                  ${minPrice}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <p className="text-gray-500 font-semibold text-[14px]">
                  Maximum
                </p>
                <span className="border w-20 h-10 rounded-full flex justify-center items-center">
                  ${maxPrice} {maxPrice === 500 && "+"}
                </span>
              </div>
            </div>
          </div>
          <hr />
          {/* Amenities */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-800">Amenities</h3>
            <ul className="flex flex-wrap gap-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <li className="flex items-center px-4 py-2.5 transition duration-300 hover:border-gray-800 cursor-pointer rounded-full border gap-2" key={item}>
                  <IoWifiOutline />
                  <span>Wifi</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Options */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-800">Booking Options</h3>
            <ul className="flex flex-wrap gap-3">
              {[1, 2, 3].map((item) => (
                <li className="flex items-center px-4 py-2.5 transition duration-300 hover:border-gray-800 cursor-pointer rounded-full border gap-2" key={item}>
                  <IoWifiOutline />
                  <span>Instance Booking</span>
                </li>
              ))}
            </ul>
          </div>
          <hr />

          {/* Property type */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-800">Property Type</h3>
            <ul className="flex flex-wrap gap-3">
              {[1, 2, 3].map((item) => (
                <li className="flex items-center px-4 py-2.5 transition duration-300 hover:border-gray-800 cursor-pointer rounded-full border gap-2" key={item}>
                  <IoWifiOutline />
                  <span>House</span>
                </li>
              ))}
            </ul>
          </div>
          <hr />
          {/* Property type */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-800">Host Language</h3>
            <ul className="flex flex-wrap gap-3">
              {[1, 2, 3].map((item) => (
               <input type='checkbox' value={'English'} key={item}/>
              ))}
            </ul>
          </div>
          <hr />




        </div>
      </div>
    </section>
  );
};

export default FilterModel;
