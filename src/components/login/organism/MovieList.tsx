import { useState, useEffect } from "react";
import MovieItem from "../molecules/MoveItem";
import axios from "axios";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// MovieType을 개별 영화 항목으로 정의
type MovieType = {
    movieId: number;
    movie_name: string;
    movies_imgurl: string;
    useyn: string;
};


const MovieList = () => {
    const [movies, setMovies] = useState<MovieType[]>([]); // 배열로 수정
    const [loading, setLoading] = useState<boolean>(true); // 초기값을 true로 설정
    const [current, setCurrent] = useState<number>(0); //현재 

    useEffect(() => {
        getMovieRangeList();
    }, []);

    const getMovieRangeList = async () => {
        try {
            const result = await axios.get<MovieType[]>('http://localhost:8080/api/movies?startId=1&endId=7');
            setMovies(result.data);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false); // 데이터 로딩 완료 후 false로 설정
        }
    };

    const prev = () => {
        if (current >= 1){
            setCurrent(current -1);
        }
    }

    const next = () => {
        if (current <= (movies.length-1-4)){
            setCurrent(current + 1);
        }
    }
 
    return (
        <div>
            {loading ? (
                <div>Loading...</div> // 로딩 중 표시
            ) : (
                <div className="flex">
                    <div className="h-full my-auto mx-2 cursor-pointer" onClick={prev}><ArrowBackIosIcon/></div>
                    <div className="flex gap-2">
                            {movies.map((movie, idx) => (
                                <div key={movie.movieId} className={ idx >= current && idx <= current + 3 ? "block": "hidden"}>
                                    <MovieItem
                                        srcUrl={movie.movies_imgurl}
                                        alt={movie.movie_name}
                                        movieno={movie.movieId.toString()}
                                    />
                                </div>
                            ))}
                    </div>
                    <div className="h-full my-auto mx-2 cursor-pointer" onClick={next}><ArrowForwardIosIcon/></div>
                </div>
            )}
        </div>
    );
};

export default MovieList;
