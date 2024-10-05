'use client';
import {useState} from 'react'
import { RiFilterOffLine } from "react-icons/ri";
import FilterModel from "../FilteredModel/FilterModel";
const FilterButton = () => {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setIsFilterOpen(true)}
        className="border py-2.5 px-4 rounded-xl hover:border-gray-700 transition duration-300 flex items-center gap-2"
      >
        <RiFilterOffLine />
        <span>Filter</span>
      </button>

      {isFilterOpen && <FilterModel setIsFilterOpen={setIsFilterOpen} />}
    </>
  );
};

export default FilterButton;
