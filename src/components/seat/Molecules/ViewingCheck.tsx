
import { useState, useEffect } from "react";
import ViewingButton from "../Atom/ViewingButton";
import { Payment } from "../utils/util";
import axios from "axios";

// 영화명, *관, 시간, 금액
type CheckProps = {
  movie: number,
  region: number,
  theater: number,
  time: number,
  num: number,
  selected: Set<string>,
}
type apiType = {
  movie?: number,
  movienm?: string,
  movieurl?:string,
  moviehall?: string,
  movietime?: string,
}

const ViewingCheck = ({movie, region, theater, time, num, selected}:CheckProps) => {
  const [movieInfo, setMoviInfo] = useState();
  const [apiinfo, setApiinfo] = useState<apiType>();
  const [totalPrice, setTotalPrice] = useState(0);
  const price = 10000;

  useEffect(()=>{
    getMovie();
    getTimes();
  },[])

  useEffect(()=>{
    const result = Payment({ number:num });
    setTotalPrice(result);
  },[num])

  const getCurrentDateAndDay = () => {
    const today = new Date();
    
    // 날짜 포맷팅 (예: YYYY-MM-DD)
    const date = today.toISOString().split('T')[0];
    
    // 요일 구하기
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const day = daysOfWeek[today.getDay()];

    return { date, day };
  };

  const { date, day } = getCurrentDateAndDay();

  const getMovie = async () => {
    const result = await axios.get(`http://localhost:8080/api/movie?id=${movie}`);
    setApiinfo((prev)=>({...prev, 
      movie:result.data.movieId, 
      movienm:result.data.movies_name,
      movieurl:result.data.movies_imgurl,
    }))
  }

  const getTimes = async () => {
    const result = await axios.get(`http://localhost:8080/api/reservation_time?time=${time}`)
    setApiinfo((prev)=>({...prev, moviehall:result.data.hall, movietime:result.data.time}))
  }

  return (
    <div
      className="flex flex-col w-72  rounded-xl bg-primaryColor gap-2 text-white"
      style={{ paddingTop: "20px", paddingLeft: "15px", height: "500px" }}
    >
      <span className="flex flex-row font-extrabold text-2xl py-6">
        {apiinfo?.movienm}
      </span>
      <div className="flex flex-col gap-5 font-medium">
        <span>{apiinfo?.moviehall}</span>
        <span>{date + '(' + day + ')'}</span>
        <span>{apiinfo?.movietime}</span>
      </div>
      <div className="w-32 h-36 mr-8 relative">
        <img
          className="w-full h-full absolute left-32 bottom-32"
          src={apiinfo?.movieurl}
          alt=""
        />
      </div>
      <div>
        <span className="flex justify-around font-semibold p">
          최종결제금액 {totalPrice.toLocaleString()}
        </span>
        <div className="flex justify-center items-center pt-9">
          <ViewingButton time={time} selected={selected} date={date}/>
        </div>
      </div>
    </div>
  );
};
export default ViewingCheck;