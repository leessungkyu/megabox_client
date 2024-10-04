import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useState } from "react";

const EventSlideImg = () => {
  const trainImgSrc = ["1", "2", "3", "4", "5", "6"]; // url 받아오기
  const [curSlide, setCurSlide] = useState(0);

  const FIRST_SLIDE_INDEX = 0;
  const LAST_SLIDE_INDEX = trainImgSrc.length - 1;
  const MOVE_SLIDE_INDEX = 1;

  const handlePrev = () =>
    curSlide === FIRST_SLIDE_INDEX
      ? setCurSlide(LAST_SLIDE_INDEX)
      : setCurSlide(curSlide - MOVE_SLIDE_INDEX);
  const handleNext = () =>
    curSlide === LAST_SLIDE_INDEX
      ? setCurSlide(FIRST_SLIDE_INDEX)
      : setCurSlide(curSlide + MOVE_SLIDE_INDEX);

  return (
    <div className="flex gap-3 items-center mb-20">
      <div onClick={handlePrev}>
        <ArrowBackIosNewRoundedIcon className="hover:cursor-pointer" />
      </div>
      <div className="w-full h-96 max-w-screen-lg mx-auto bg-gray flex overflow-hidden -z-20">
        {trainImgSrc.map((item, index) => (
          <div
            className="w-full h-96 shrink-0 text-xl border bg-white flex justify-center items-center -z-10"
            style={{
              transform: `translateX(${-952 * curSlide}px)`,
              transition: "all 0.4s ease-in-out",
            }}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      <div onClick={handleNext}>
        <ArrowForwardIosRoundedIcon className="hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default EventSlideImg;
