"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// Define types for the state and slider values

interface SetFilterProps {
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>;
}
const FilterModel = ({ setIsFilterOpen }: SetFilterProps) => {
  // Initialize the state with the range type
  const [minPrice, setMinPrice] = useState<number | string>(50)
  const [maxPrice, setMaxPrice] = useState<number | string>(500)

  // Event handler for when the slider value changes
  const handleSliderChange = (value: number |  number[]):void => {
    // console.log(value)
    setMinPrice(value[0])
    setMaxPrice(value[1])
  };

  return (
    <section
      onClick={() => setIsFilterOpen(false)}
      className="fixed left-0 top-0 bg-black bg-opacity-50 w-full min-h-screen flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white py-6 rounded-xl w-2xl mx-auto space-y-4 "
      >
        <header className="flex justify-between px-6">
          <button
            className="hover:bg-gray-200 transition duration-300 rounded-full h-8 w-8 flex items-center justify-center"
            onClick={() => setIsFilterOpen(false)}
          >
            <RxCross2 className="text-lg" />
          </button>
          <h2 className="font-bold text-lg">Filters</h2>
          <div></div>
        </header>
        <hr />
        {/* price range */}
        <div className="px-6 space-y-4">
          <div className=" space-y-3">
            <label htmlFor="" className="inline-block">
              <h3 className="text-lg font-semibold">Price Range</h3>
              <p className="text-gray-600">
                Nightly price before fees and taxes
              </p>
            </label>
            <div>
              <Slider range
                min={0}
                max={500}
                defaultValue={[50, 500]}
                onChange={handleSliderChange}
                allowCross={false} 
                className='w-full'
              />
            </div>
            <div className="flex justify-between">
              <div>
                <p>Minimum</p>
                <span className="border w-16 h-10 rounded-full flex justify-center items-center">
                  ${minPrice}
                </span>
              </div>
              <div>
                <p>Maximum</p>
                <span className="border w-20 h-10 rounded-full flex justify-center items-center">
                  ${maxPrice} {maxPrice === 500 && '+'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterModel;
