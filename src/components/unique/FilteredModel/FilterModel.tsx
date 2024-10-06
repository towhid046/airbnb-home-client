
import { Dispatch, SetStateAction, } from "react";
import { RxCross2 } from "react-icons/rx";
import Amenities from './Amenities/Amenities';
import PropertyTypes from './PropertyTypes/PropertyTypes'
import BookingOptions from "./BookingOptions/BookingOptions";
import HostLanguages from "./HostLanguages/HostLanguages";
import PriceRange from "./PriceRange/PriceRange";

// Define types for the state and slider values

interface SetFilterProps {
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>;
}

const FilterModel = ({ setIsFilterOpen }: SetFilterProps) => {





  return (
    <section
      onClick={() => setIsFilterOpen(false)}
      className="fixed left-0 top-0  bg-black bg-opacity-50 w-full min-h-screen flex justify-center items-center z-50"
    >
      <div className='max-w-xl'>
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl w-full h-[90vh] overflow-y-auto mx-auto space-y-4  relative"
        >
          <header className="flex justify-between px-5 sticky top-0 z-50 bg-white py-4 border-b">
            <button
              className="hover:bg-gray-100 transition duration-300 rounded-full h-8 w-8 flex items-center justify-center"
              onClick={() => setIsFilterOpen(false)}
            >
              <RxCross2 className="text-lg" />
            </button>
            <h2 className="font-bold text-lg">Filters</h2>
            <div></div>
          </header>
          <div className="px-5 space-y-6">
            {/* price range */}
            <PriceRange />
            <hr />
            {/* Amenities */}
            <Amenities />

            {/* Booking Options */}
            <BookingOptions />
            <hr />

            {/* Property type */}
            <PropertyTypes />
            <hr />
            {/* Host languages */}
            <HostLanguages />


          </div>
          <footer className='flex justify-between bg-white py-4 px-5 border-t sticky bottom-0 z-50 '>
            <button className="py-2.5 px-4 rounded-lg hover:bg-gray-100 transition duration-300  font-semibold">Clear All</button>
            <button className="py-2.5 px-4 rounded-lg  font-semibold text-white bg-[#222222] hover:bg-black transition duration-300">Show 100 + places</button>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default FilterModel;
