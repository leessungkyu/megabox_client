import SeeMoreButton from "../atom/SeeMoreButton";
import { MypageBookingContainerProps } from "./MypageBookingContainer";

const CategoryTitle = ({ title }: MypageBookingContainerProps) => {
  return (
    <div className="w-full flex justify-between items-end mb-3">
      <div className="text-lg font-bold text-primaryColor">{title}</div>
      <SeeMoreButton />
    </div>
  );
};

export default CategoryTitle;
