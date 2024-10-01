// components/shared/DateRangePicker/DateRangePicker.tsx
'use client'
import React, { useState } from 'react';
import { DateRange, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main CSS file for DateRangePicker
import 'react-date-range/dist/theme/default.css'; // Theme CSS file
import { addDays } from 'date-fns';

const DateRangePicker: React.FC = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  const handleSelect = (ranges: RangeKeyDict) => {
    const { selection } = ranges;
    setState([selection]);
    console.log('Selected range:', selection); // Log the selected range for debugging
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
