import { TicketInfoProps } from "../molecules/MypageTicketInfo";

const MypageDetailTitle = ({ infoTitle }: TicketInfoProps) => {
  return <div className="font-bold w-24">{infoTitle}</div>;
};

export default MypageDetailTitle;
