import React, { useState, useEffect } from 'react';
import '../components/JES/style.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

type ParamType = {
  key: number,
  value: string,
}[];

type times = {
  key: number,
  value: string,
  hall: string,
  seat: string,
}[]

const MovieSchedulePage: React.FC = () => {
  const [movieList, setMovieList] = useState<ParamType>();
  const [regionList, setRegionList] = useState<ParamType>();
  const [theaterList, setTheaterList] = useState<ParamType>();
  const [timeList, setTimeList] = useState<times>();

  const [selectedMovie, setSelectedMovie] = useState<number>(1);
  const [selectedRegion, setSelectedRegion] = useState<number>(1);
  const [selectedTheater, setSelectedTheater] = useState<number>(1);
  const [selectedTime, setSelectedTime] = useState<number>(1);

  const param = useParams();
  const movieid = Number(param.id);
  // const movienm = movies[movieid];

  // 지역이 변경될 때 마다 해당 지역의 첫 번째 영화관과 첫 번째 시간을 선택하도록 설정
  useEffect(() => {
    gettheaterList();
  }, [selectedRegion]);

  // 영화관이 변경될 때 마다 첫 번째 시간을 선택하도록 설정
  useEffect(() => {
    gettiemList();
  }, [selectedTheater]);


  // 컴포넌트가 처음 렌더링될 때 초기 상태 설정
  useEffect(() => {  
    setSelectedMovie(movieid);
    getMovieList();
    getRegionList();
    gettheaterList();
  }, []);

  const getMovieList = async () => {
    const result =  await axios.get("http://localhost:8080/api/reservation_movieList");
    const filtermovies = result.data.map((movie:any)=>({
      key : Number(movie.movieId),
      value: movie.movies_name,
    }))
    setMovieList(filtermovies);
  }

  const getRegionList = async () => {
    const result = await axios.get("http://localhost:8080/api/reservation_regions");
    const filterregion = result.data.map((region:any)=>({
      key : Number(region.regions_id),
      value: region.regions_name,
    }))
    setRegionList(filterregion);
  }

  const gettheaterList = async () => {
    const result = await axios.get(`http://localhost:8080/api/reservation_theaters?region=${selectedRegion}`);
    const filtertheater = result.data.map((theater:any)=>({
      key : Number(theater.theaters_id),
      value: theater.theaters_name,
    }))
    setTheaterList(filtertheater);
  }  
  
  const gettiemList = async () => {
    const result = await axios.get(`http://localhost:8080/api/reservation_times?movie=${selectedMovie}&theater=${selectedTheater}`);
    const filtertime = result.data.map((time:any)=>({
      key : Number(time.times_id),
      value: time.time,
      hall: time.hall,
      seat: time.seats,
    }))
    setTimeList(filtertime);
    
  }

  return (
    <div className="movie-schedule-app" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      {/* 상단 헤더 */}
      <div className="movie-schedule-header" style={{ width: '100%', paddingBottom: '10px', marginBottom: '20px' }}>
        <h2>영화 스케줄</h2>
      </div>

      {/* 전체 컨테이너: Flex를 사용하여 가로 정렬 */}
      <div className="movie-schedule-container" style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        {/* 영화 목록 */}
        <div className="movie-schedule-section" style={{ flex: 1 }}>
          <h3>영화</h3>
          <ul className="movie-list" key={1}>
            {
              movieList?.map((movie) => (
                <li 
                  key={movie.key}
                  onClick={() => setSelectedMovie(movie.key)}
                  style={{ backgroundColor: movie.key === selectedMovie ? '#ddd' : '#f0f0f0', cursor: 'pointer', padding: '5px', marginBottom: '5px' }}
                >
                  {movie.value}
                </li>
              ))
            }
          </ul>
        </div>

        {/* 지역 목록 */}
        <div className="movie-schedule-section" style={{ flex: 1 }}>
          <h3>지역</h3>
          <ul className="region-list">
          {regionList?.map((region) => (
              <li
                key={region.key}
                onClick={() => setSelectedRegion(region.key)}
                style={{ backgroundColor: region.key === selectedRegion ? '#ddd' : '#f0f0f0', cursor: 'pointer', padding: '5px', marginBottom: '5px' }}
              >
                {region.value}
              </li>
            ))}
          </ul>
        </div>

        {/* 영화관 목록 */}
        <div className="movie-schedule-section" style={{ flex: 1 }}>
          <h3>영화관 지점</h3>
          <ul className="theater-list">
            {theaterList?.map((theater) => (
              <li
                key={theater.key}
                onClick={() => setSelectedTheater(theater.key)}
                style={{ backgroundColor: theater.key === selectedTheater ? '#ddd' : '#f0f0f0', cursor: 'pointer', padding: '5px', marginBottom: '5px' }}
              >
                {theater.value}
              </li>
            ))}
          </ul>
        </div>

        {/* 시간 목록 */}
        <div className="movie-schedule-section" style={{ flex: 2 }}>
          <h3>시간</h3>
          <ul className="schedule-list">
            {timeList?.map((schedule) => (
              <li
                key={schedule.key}
                onClick={() => setSelectedTime(schedule.key)}
                style={{ backgroundColor: schedule.key === selectedTime ? '#ddd' : '#f0f0f0', cursor: 'pointer', padding: '5px', marginBottom: '5px' }}
              >
                <div>{schedule.value}</div>
                <div>{schedule.hall}</div>
                <div>{schedule.seat}</div> 
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Link to={`/seatreservation?movie=${movieid}&region=${selectedRegion}&theater=${selectedTheater}&time=${selectedTime}`}>
          <button className='border px-16 py-3 rounded-md hover:bg-darkgray'>다음</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieSchedulePage;
