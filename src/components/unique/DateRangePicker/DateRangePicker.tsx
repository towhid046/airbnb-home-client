"use client";
import React, { useState, Dispatch, SetStateAction } from "react";
import { DateRange, RangeKeyDict, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";

interface DateRangePickerProps {
  setStartDate: Dispatch<SetStateAction<number>>;
  setEndDate: Dispatch<SetStateAction<number>>;
}

const DateRangePicker = ({ setStartDate, setEndDate }: DateRangePickerProps) => {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges: RangeKeyDict) => {
    const selection = ranges.selection as Range; // Type assertion to Range
    setState([selection]);

    // Ensure `selection.startDate` and `selection.endDate` are defined before calling `.getTime()`
    if (selection.startDate && selection.endDate) {
      setStartDate(selection.startDate.getTime());
      setEndDate(selection.endDate.getTime());
    }
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
