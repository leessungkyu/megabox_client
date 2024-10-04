import React from "react";

interface DateSelectorProps {
  dates: string[];
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ dates, selectedDate, onSelectDate }) => {
  return (
    <div className="date-selector">
      {dates.map(date => (
        <div
          key={date}
          className={`date-item ${selectedDate === date ? "selected" : ""}`}
          onClick={() => onSelectDate(date)}
        >
          {date}
        </div>
      ))}
    </div>
  );
};

export default DateSelector;
