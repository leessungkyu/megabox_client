import React, { useState } from "react";

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

const SeatsChoose = () => {
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());

  const seats = col.flatMap((alpha) => row.map((num) => alpha + num));

  const handleClick = (seat: string) => {
    setSelectedSeats((prev) => {
      const updated = new Set(prev);
      if (updated.has(seat)) {
        updated.delete(seat); // 이미 선택된 좌석이면 선택 해제
      } else {
        updated.add(seat); // 선택되지 않은 좌석이면 선택
      }
      return updated;
    });
  };

  return (
    <section className="grid grid-cols-5 gap-20">
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