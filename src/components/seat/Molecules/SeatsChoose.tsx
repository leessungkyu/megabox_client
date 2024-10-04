
import React, { useState, useEffect } from "react";

const col = "ABCDE".split("");
const row = ["1", "2", "3", "4", "5"];

const getBackgroundColor = (seat: string, selectedSeats: Set<string>) => {
  return selectedSeats.has(seat) ? "bg-green" : "bg-white";
};

const getBorderColor = (seat: string, selectedSeats: Set<string>) => {
  if (selectedSeats.has(seat)) return "border-green-500"; // 선택된 좌석의 테두리 색상
  if (["A", "B"].some((x) => seat.startsWith(x))) return "border-yellow";
  if (["C", "D"].some((x) => seat.startsWith(x))) return "border-red";
  return "border-black";
};

type SeatsType = {
  choose: number,
  num: number,
  setChoose: (count:number) => void,
  selectedSeats: Set<string>,
  setSelectedSeats: React.Dispatch<React.SetStateAction<Set<string>>>,
}

const SeatsChoose = ({num,choose=0, setChoose, selectedSeats, setSelectedSeats}:SeatsType) => {
//  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());

  const seats = col.flatMap((alpha) => row.map((num) => alpha + num));

  const handleClick = (seat: string) => {
    const isSeatSelected = selectedSeats.has(seat);
    
    if (!isSeatSelected && selectedSeats.size >= num) return;

    setSelectedSeats((prev: Set<string>) => {
      const updated = new Set(prev); // Create a new Set to ensure immutability
      isSeatSelected ? updated.delete(seat) : updated.add(seat);
      return updated;
    });
  };

  useEffect(() => {
    setChoose(selectedSeats.size);
  }, [selectedSeats, setChoose]);
  
  return (
    <section className="grid grid-cols-5 gap-16">
      {seats.map((seat) => (
        <div
          key={seat}
          onClick={() => handleClick(seat)}
          className={`w-12 h-12 flex items-center justify-center border cursor-pointer ${getBackgroundColor(
            seat,
            selectedSeats
          )} ${getBorderColor(seat, selectedSeats)}`}
        >
          {seat}
        </div>
      ))}
    </section>
  );
};

export default SeatsChoose;
