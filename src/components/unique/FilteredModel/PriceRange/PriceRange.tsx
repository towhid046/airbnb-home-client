'use client'
import React, { useState } from 'react'

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRange = () => {
    // Initialize the state with the range type
    const [minPrice, setMinPrice] = useState<number>(50);
    const [maxPrice, setMaxPrice] = useState<number>(200);

    // Event handler for when the slider value changes
    const handleSliderChange = (value: number | number[]): void => {
        if (Array.isArray(value)) {
            setMinPrice(value[0]);
            setMaxPrice(value[1]);
        }
    };
    return (
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
                    max={200}
                    defaultValue={[50, 200]}
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
                        ${maxPrice} {maxPrice === 200 && "+"}
                    </span>
                </div>
            </div>
        </div>

    )
}

export default PriceRange