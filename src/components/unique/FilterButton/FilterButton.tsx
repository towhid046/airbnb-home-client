'use client';
import { useState, useEffect, SetStateAction, Dispatch } from 'react'
import { RiFilterOffLine } from "react-icons/ri";
import FilterModel from "../FilteredModel/FilterModel";
import { PropertyProps } from './../Properties/Properties';
interface FilterButtonProps {
  setProperties: Dispatch<SetStateAction<PropertyProps[]>>;

}
const FilterButton = ({ setProperties }: FilterButtonProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  useEffect(() => {
    if (isFilterOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup to remove the class when the modal closes
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isFilterOpen]);

  return (
    <>
      <button
        onClick={() => setIsFilterOpen(true)}
        className="border py-2.5 px-4 rounded-xl hover:border-gray-700 transition duration-300 flex items-center gap-2"
      >
        <RiFilterOffLine />
        <span>Filter</span>
      </button>

      {isFilterOpen && <FilterModel setIsFilterOpen={setIsFilterOpen} setProperties={setProperties} />}
    </>
  );
};

export default FilterButton;
