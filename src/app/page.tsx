"use client";
import { useEffect, useState } from "react";
import Properties, {
  PropertyProps,
} from "./../components/unique/Properties/Properties";
import axios from "axios";
import Navbar from "@/components/shared/Navbar/Navbar";

const Home = (): JSX.Element => {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<number>(0);
  const [endDate, setEndDate] = useState<number>(0);
  const [isFilter, setIsFilter] = useState<boolean>(false);

  const handleFilterByDate = () => {
    if (startDate && endDate) {
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
  };

  useEffect(() => {
    const loadProperties = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/properties?startDate=${startDate}&endDate=${endDate}`
        );
        setProperties(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    // Load properties only if the filter state changes or on initial load
    loadProperties();
  }, [isFilter]);

  if (isLoading) {
    return (
      <div className="text-xl font-bold min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <header className="top-0 sticky z-20">
        <Navbar obj={obj} />
      </header>
      <section>
        <Properties properties={properties} />
      </section>
    </>
  );
};

export default Home;
