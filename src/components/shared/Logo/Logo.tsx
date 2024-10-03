import React from "react";
import { FaAirbnb } from "react-icons/fa";

const Logo:React.FC = () => {
  return (
    <a href='/' className="text-[#FF385C] flex items-center gap-1.5 cursor-pointer">
      <FaAirbnb className="text-3xl" />
      <p className="text-2xl font-bold">airbnb</p>
    </a>
  );
};

export default Logo;
