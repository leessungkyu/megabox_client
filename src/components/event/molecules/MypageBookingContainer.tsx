import HorizontalLine from "../atom/HorizontalLine";
import CategoryTitle from "./CategoryTitle";
import MypageBookingDetail from "./MypageBookingDetail";
import MypageNoBooking from "./MypageNoBooking";

export type MypageBookingContainerProps = {
  title?: string;
  contents?: boolean;
};

const MypageBookingContainer = ({
  title = "",
  contents = false,
}: MypageBookingContainerProps) => {
  return (
    <div className="max-w-3xl mx-auto mb-20">
      {/* 나의 ~~ 내역 */}
      <CategoryTitle title={title} />
      <HorizontalLine />
      {/* 내역있없 */}
      {contents ? <MypageBookingDetail /> : <MypageNoBooking />}
    </div>
  );
};

export default MypageBookingContainer;
