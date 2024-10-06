"use client";
import { useEffect, useState } from "react";
import Properties, { PropertyProps } from "./../components/unique/Properties/Properties";
import axios from "axios";
import Navbar from "@/components/shared/Navbar/Navbar";
import FilterIcons from "./../components/unique/FilterIcons/FilterIcons";


const Home = (): JSX.Element => {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<number>(0);
  const [endDate, setEndDate] = useState<number>(0);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [isTaxInclude, setIsTaxInclude] = useState<boolean>(false);

  const handleFilterByDate = () => {
    if ((startDate && endDate) || searchText) {
      setIsLoading(true);
      setIsFilter((prev) => !prev);
    }
  };

  const obj = {
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
    const loadProperties = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get<PropertyProps[]>(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/properties?startDate=${startDate}&endDate=${endDate}&search=${searchText}&category=${category}`
        );
        setProperties(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProperties();
  }, [isFilter, searchText, category]);

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
        setProperties={setProperties}
      />
      {isLoading && (
        <div className="text-xl font-bold py-12 flex items-center justify-center">
          Loading...
        </div>
    )}
      <section>
        <Properties isTaxInclude={isTaxInclude} properties={properties} />
      </section>
    </>
  );
};

export default Home;
