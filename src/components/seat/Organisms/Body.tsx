
import { useState } from "react";
import NumberOfSpectators from "../Molecules/NumberOfSpectators";
import SeatsChoose from "../Molecules/SeatsChoose";
import ViewingCheck from "../Molecules/ViewingCheck";

type CheckProps = {
  movie: number,
  region: number,
  theater: number,
  time: number,
};

type hanleNum = () => void;

const Body = ({movie, region, theater, time}:CheckProps) => {
    const [num, setNum] = useState<number>(0);
    const [choose, setChoose] = useState<number>(0);
    const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());

    const plusNum: hanleNum = () => {
       setNum((prev) => (prev >= 2 ? 2 : prev + 1));
      };

    const minusNum :hanleNum= () => {
      setNum((prev) => (prev <= 0 ? 0 : prev - 1));
    };
    // const plusChoose:hanleNum = () => {
    //   setChoose((prev) => (prev >= 2 ? 2 : prev + 1));
    // };
    // const minusChoose:hanleNum = () => {
    //   setChoose((prev) => (prev <= 0 ? 0 : prev - 1));
    // }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start">
        <div className="w-[1030px] ml-32"><span>선택인원 : </span>{num}</div>
        <div
          className="w-full max-w-5xl flex gap-5 justify-center"
          style={{ paddingBottom: "50px" }}
        >
          <NumberOfSpectators handlePlus={plusNum} handleMinus={minusNum} num={num}/>
        </div>
        <div className="flex justify-start items-center relative ">
          <SeatsChoose num={num} choose={choose} setChoose={setChoose} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>
          <div className="flex absolute inset-y-0 right-[-400px]">
            <ViewingCheck movie={movie} region={region} theater={theater} time={time} num={num} selected={selectedSeats}/>
          </div>
        </div>
    </div>
  );
};
export default Body;