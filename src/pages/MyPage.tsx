import MypageBookingContainer from "../components/event/molecules/MypageBookingContainer";

const MyPage = () => {
  return (
    <div className="w-screen p-10">
      <MypageBookingContainer title="나의 예매 내역" contents={true} />
      <MypageBookingContainer title="나의 구매 내역" contents={false} />
    </div>
  );
};

export default MyPage;
