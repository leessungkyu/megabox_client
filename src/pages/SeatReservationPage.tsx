import { useSearchParams } from "react-router-dom";
import Body from "../components/seat/Organisms/Body"
import Head from "../components/seat/Organisms/Heade"

const SeatReservationPage = () => {
    const [params, setParams] = useSearchParams();
    const movie = Number(params.get("movie"));
    const region = Number(params.get("region"));
    const theater = Number(params.get("theater"));
    const time  = Number(params.get("time"));
    
    return (
        <div>
            <Head />
            <Body movie={movie} region={region} theater={theater} time={time}/>
        </div>
    )
}

export default SeatReservationPage;