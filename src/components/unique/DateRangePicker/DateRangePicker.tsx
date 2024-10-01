// components/shared/DateRangePicker/DateRangePicker.tsx
"use client";
import React, { useState, Dispatch, SetStateAction } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
interface DateRangePickerProps {
  setStartDate: Dispatch<SetStateAction<number>>;
  setEndDate: Dispatch<SetStateAction<number>>;
}
const DateRangePicker = ({ setStartDate, setEndDate }:DateRangePickerProps) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);


  const handleSelect = (ranges: RangeKeyDict) => {
    const { selection } = ranges;
    setState([selection]);
    setStartDate(new Date(selection?.startDate).getTime());
    setEndDate(new Date(selection?.endDate).getTime());
  };

  return (
    <div className="flex justify-center mt-4">
      <DateRange
        editableDateInputs={true}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </div>
  );
};

export default DateRangePicker;
