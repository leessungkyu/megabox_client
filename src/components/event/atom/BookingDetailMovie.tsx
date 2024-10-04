import MypageTicketInfo from "../molecules/MypageTicketInfo"

type PropsType = {
    srcurl: string,
    bookingId: string,
    movieNM: string,
    theatersNm: string,
    time: string,
    seats: string[],
}
const BookingDetailMovie = ({bookingId,movieNM, seats,srcurl,theatersNm,time}:PropsType) => {
    return <div className="w-full py-5 flex justify-center items-center">
        <div className="w-full p-5 border border-gray rounded flex gap-5">
          {/* 좌측 포스터 */}
          <div className="w-40 h-56 bg-gray">
            <img
              className="w-full h-full object-cover"
              src={srcurl}
            />
          </div>

          {/* 우측 예매정보 */}
          <div className="flex flex-col justify-between">
            <MypageTicketInfo infoTitle="예매번호" infoContents={bookingId} />
            <MypageTicketInfo infoTitle="영화명" infoContents={movieNM} />
            <MypageTicketInfo infoTitle="극장/상영관" infoContents={theatersNm} />
            <MypageTicketInfo
              infoTitle="관람일시"
              infoContents={time}
            />
            <MypageTicketInfo infoTitle="관람인원" infoContents={String(seats.length)} />
            <MypageTicketInfo infoTitle="관람좌석" infoContents={seats.join(", ")} />
          </div>
        </div>
    </div>
}