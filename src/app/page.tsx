"use client";
import { useEffect, useState } from "react";
import Properties, { PropertyProps } from "./../components/unique/Properties/Properties";
import axios from "axios";
import Navbar from "@/components/shared/Navbar/Navbar";
import FilterIcons from "./../components/unique/FilterIcons/FilterIcons";

// Define the types for Navbar props
interface NavbarProps {
  handleFilterByDate: () => void;
  setStartDate: React.Dispatch<React.SetStateAction<number>>;
  setEndDate: React.Dispatch<React.SetStateAction<number>>;
  startDate: number;
  endDate: number;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Home = (): JSX.Element => {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<number>(0);
  const [endDate, setEndDate] = useState<number>(0);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [isTaxInclude, setIsTaxInclude] = useState<boolean>(false);

  // Function to handle filter by date and toggle isFilter state
  const handleFilterByDate = (): void => {
    if ((startDate && endDate) || searchText) {
      setIsLoading(true);
      setIsFilter((prev) => !prev);
    }
  };

  // Define the `obj` to be passed to Navbar with appropriate typing
  const obj: NavbarProps = {
    handleFilterByDate,
    setStartDate,
    setEndDate,
    startDate,
    endDate,
    searchText,
    setSearchText,
    setCategory,
  };

  useEffect(() => {
    const loadProperties = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const res = await axios.get<PropertyProps[]>(
          `https://airbnb-replica-server.vercel.app/properties?startDate=${startDate}&endDate=${endDate}&search=${searchText}&category=${category}`
        );
        setProperties(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    // Load properties only if the filter state changes or on initial load
    loadProperties();
  }, [isFilter, searchText, category, startDate, endDate]);

  return (
    <>
      <header className="top-0 sticky z-20">
        <Navbar obj={obj} />
      </header>
      <FilterIcons
        isTaxInclude={isTaxInclude}
        setIsTaxInclude={setIsTaxInclude}
        setCategory={setCategory}
        setSearchText={setSearchText}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      {isLoading && (
        <div className="text-xl font-bold py-12 flex items-center justify-center">
          Loading...
        </div>
      )}
      <section>
        <Properties
          isTaxInclude={isTaxInclude}
          properties={properties}
        />
      </section>
    </>
  );
};

export default Home;
