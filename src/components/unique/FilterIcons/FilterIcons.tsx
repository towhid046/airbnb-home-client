"use client";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useState, Dispatch, SetStateAction } from "react";
import FilterButton from "./../FilterButton/FilterButton";

// Define a type for the category items
interface Category {
  id: number;
  icon: string;
  title: string;
}

// Define the props with more specific typing for clarity
interface FilterIconsProps {
  setCategory: Dispatch<SetStateAction<string>>;
  setSearchText: Dispatch<SetStateAction<string>>;
  setStartDate: Dispatch<SetStateAction<number>>;
  setEndDate: Dispatch<SetStateAction<number>>;
  setIsTaxInclude: Dispatch<SetStateAction<boolean>>;
  isTaxInclude: boolean;
}

const categories: Category[] = [
  { id: 1, icon: "🏛️", title: "Hotel" },
  { id: 2, icon: "🌲", title: "Resort" },
  { id: 4, icon: "🌄", title: "Guesthouse" },
  { id: 5, icon: "🏰", title: "Apartment" },
  { id: 7, icon: "🛏️", title: "Hostel" },
];

const FilterIcons = ({
  setCategory,
  setSearchText,
  setStartDate,
  setEndDate,
  setIsTaxInclude,
  isTaxInclude,
}: FilterIconsProps) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  

  const handleCategory = (category: string, index: number) => {
    setActiveCategory(index);
    setCategory(category);
    setSearchText("");
    setStartDate(0);
    setEndDate(0);
  };

  return (
    <section className="mx-auto px-4 container pt-5">
      <ul className="flex justify-between gap-10 items-center">
        <li
          onClick={() => handleCategory("", 0)}
          className={` ${
            activeCategory === 0 ? "border-gray-700" : "border-white"
          } flex flex-col cursor-pointer border-b-2 pb-2.5  hover:border-gray-200 transition duration-300  items-center justify-center gap-1.5 text-center`}
        >
          <figure className="text-xl">🌍</figure>
          <p className="text-gray-600 text-[14px]">All</p>
        </li>
        {categories.map((category, index) => (
          <li
            onClick={() => handleCategory(category.title, index + 1)}
            key={category.id}
            className={` ${
              activeCategory === index + 1 ? "border-gray-700" : "border-white"
            } flex flex-col cursor-pointer border-b-2 pb-2.5  hover:border-gray-200 transition duration-300  items-center justify-center gap-1.5 text-center`}
          >
            <figure className="text-xl">{category.icon}</figure>
            <p className="text-gray-600 text-[14px]">{category.title}</p>
          </li>
        ))}
        <li className='flex items-center gap-5'>
          <FilterButton />
          <button
            onClick={() => setIsTaxInclude(!isTaxInclude)}
            className={`border py-2.5 px-4 rounded-xl hover:border-gray-700 transition duration-300 flex items-center gap-2`}
          >
            <span className="font-medium text-[14px]">
              Display total before taxes
            </span>
            <div
              className={`w-10 h-6 ${
                isTaxInclude ? "bg-gray-800 " : "hover:bg-gray-700  bg-gray-500"
              } pl-0.5 rounded-full flex items-center`}
            >
              <IoIosCheckmarkCircle
                className={`${
                  isTaxInclude
                    ? "bg-gray-800 text-2xl translate-x-4"
                    : "bg-white text-xl"
                } text-white rounded-full transition duration-500`}
              />
            </div>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default FilterIcons;
