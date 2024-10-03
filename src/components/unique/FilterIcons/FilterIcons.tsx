"use client";
const categories = [
  { id: 1, icon: "🏛️", title: "Hotel" },
  { id: 2, icon: "🌲", title: "Resort" },
  { id: 4, icon: "🌄", title: "Guesthouse" },
  { id: 5, icon: "🏰", title: "Apartment" },
  { id: 7, icon: "🛏️", title: "Hostel" },
];

import { useState, Dispatch, SetStateAction } from "react";
interface FilterIconsProps {
  setCategory: Dispatch<SetStateAction<string>>;
  setSearchText: Dispatch<SetStateAction<string>>;
  setStartDate: Dispatch<SetStateAction<number>>;
  setEndDate: Dispatch<SetStateAction<number>>;
}

const FilterIcons = ({
  setCategory,
  setSearchText,
  setStartDate,
  setEndDate,
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
      <ul className="flex justify-between gap-10">
        <li
          onClick={() => handleCategory("", 0)}
          className={` ${
            activeCategory === 0 && "border-gray-200"
          } flex flex-col cursor-pointer border-b-2 pb-2.5 border-white hover:border-gray-200 transition duration-300  items-center justify-center gap-1.5 text-center`}
        >
          <figure className="text-xl">🌍</figure>
          <p className="text-gray-600 text-[14px]">All</p>
        </li>
        {categories?.map((category, index) => (
          <li
            onClick={() => handleCategory(category.title, index + 1)}
            key={category.id}
            className={` ${
              activeCategory === index + 1 && "border-gray-200"
            } flex flex-col cursor-pointer border-b-2 pb-2.5 border-white hover:border-gray-200 transition duration-300  items-center justify-center gap-1.5 text-center`}
          >
            <figure className="text-xl">{category.icon}</figure>
            <p className="text-gray-600 text-[14px]">{category.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterIcons;
