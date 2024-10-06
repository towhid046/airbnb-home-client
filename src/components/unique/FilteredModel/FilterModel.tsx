'use client'
import { Dispatch, SetStateAction, useEffect, useState, } from "react";
import { RxCross2 } from "react-icons/rx";
import Amenities from './Amenities/Amenities';
import PropertyTypes from './PropertyTypes/PropertyTypes'
import BookingOptions from "./BookingOptions/BookingOptions";
import HostLanguages from "./HostLanguages/HostLanguages";
import PriceRange from "./PriceRange/PriceRange";
import { PropertyProps } from "../Properties/Properties";
import axios from "axios";

// Define types for the state and slider values

interface SetFilterProps {
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>;
  setProperties: Dispatch<SetStateAction<PropertyProps[]>>;
}

const FilterModel = ({ setIsFilterOpen, setProperties }: SetFilterProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [propertiesLength, setPropertiesLength] = useState<number>(0)

  // Initialize state for Price range
  const [minPrice, setMinPrice] = useState<number>(75);
  const [maxPrice, setMaxPrice] = useState<number>(250);

  // State for Booking Options
  const [propertyType, setPropertyType] = useState<string>('')

  // State for Amenities
  const [amenities, setAmenities] = useState<string[]>([])

  // State for Booking Options
  const [bookingOptions, setBookingOptions] = useState<string[]>([])


  // State for host languages
  const [hostLanguages, setHostLanguages] = useState<string[]>([])

  // const min and max price;
  const [min,setMin] = useState<number>(75)
  const [max,setMax] = useState<number>(250)

  const filterCount = async (type: string) => {
    setIsLoading(true)
    try {
      const res = await axios.get<PropertyProps[]>(`https://airbnb-replica-server.vercel.app/filter-properties?minPrice=${minPrice}&maxPrice=${maxPrice}&category=${propertyType}&amenities=${amenities}&bookingOptions=${bookingOptions}&hostLanguages=${hostLanguages}`)
      if (type === 'count') {
        setPropertiesLength(res?.data?.length)
      }
      if (type === 'data') {
        setProperties(res.data)
      }
    } catch (error) {
      console.error(error)

    } finally {
      setIsLoading(false)
    }
  }


  useEffect(() => {
    filterCount('count')
  }, [minPrice, maxPrice, propertyType, amenities, bookingOptions, hostLanguages])


  const handelClearAll = () => {
    setMinPrice(75)
    setMaxPrice(250)
    setPropertyType('')
    setAmenities([])
    setBookingOptions([])
    setHostLanguages([])
    setMin(75)
    setMax(250)
  }

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
            <PriceRange min={min} max={max} maxPrice={maxPrice} minPrice={minPrice} setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} />
            <hr />
            {/* Amenities */}
            <Amenities amenities={amenities} setAmenities={setAmenities} />

            {/* Booking Options */}
            <BookingOptions bookingOptions={bookingOptions} setBookingOptions={setBookingOptions} />
            <hr />

            {/* Property type */}
            <PropertyTypes setPropertyType={setPropertyType} propertyType={propertyType} />
            <hr />
            {/* Host languages */}
            <HostLanguages hostLanguages={hostLanguages} setHostLanguages={setHostLanguages} />
          </div>
          <footer className='flex justify-between bg-white py-4 px-5 border-t sticky bottom-0 z-50 '>
            <button
              onClick={handelClearAll}
              className="py-2.5 px-4 rounded-lg hover:bg-gray-100 transition duration-300  font-semibold">Clear All</button>
            <button onClick={() => {
              filterCount('data');
              setIsFilterOpen(false)
            }
            } className="py-2.5 px-4 rounded-lg  font-semibold text-white bg-[#222222] hover:bg-black transition duration-300">{isLoading ? 'Loading...' : `Show ${propertiesLength} places`}</button>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default FilterModel;
