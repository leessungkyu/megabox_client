import MypageTicketInfo from "./MypageTicketInfo";

const MypageBookingDetail = () => {
  return (
    <div>
      {/* 예매정보 박스 */}
      <div className="w-full py-5 flex justify-center items-center">
        <div className="w-full p-5 border border-gray rounded flex gap-5">
          {/* 좌측 포스터 */}
          <div className="w-40 h-56 bg-gray">
            <img
              className="w-full h-full object-cover"
              src="https://i.namu.wiki/i/_2rXSKS4AcZ0YQUuJwPfnJC40Pl8c96Mb2esJnv5USdbtcbu9kCPqo1DxhCo8hA55U4WiuZNaxm0XTe0H5RnSg.webp"
            />
          </div>

          {/* 우측 예매정보 */}
          <div className="flex flex-col justify-between">
            <MypageTicketInfo infoTitle="예매번호" infoContents="000-000-000" />
            <MypageTicketInfo infoTitle="영화명" infoContents="인사이드아웃" />
            <MypageTicketInfo infoTitle="극장/상영관" infoContents="강남역" />
            <MypageTicketInfo
              infoTitle="관람일시"
              infoContents="0000.00.00 (월) 00:00 (0회차)"
            />
            <MypageTicketInfo infoTitle="관람인원" infoContents="성인 0명" />
            <MypageTicketInfo infoTitle="관람좌석" infoContents="A열 01" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageBookingDetail;
