import React from "react";

interface TheaterListProps {
  theaters: string[];
  selectedTheater: string;
  onSelectTheater: (theater: string) => void;
}

const TheaterList: React.FC<TheaterListProps> = ({ theaters, selectedTheater, onSelectTheater }) => {
  return (
    <div className="theater-list">
      {theaters.map(theater => (
        <div
          key={theater}
          className={`theater-item ${selectedTheater === theater ? "selected" : ""}`}
          onClick={() => onSelectTheater(theater)}
        >
          {theater}
        </div>
      ))}
    </div>
  );
};

export default TheaterList;
