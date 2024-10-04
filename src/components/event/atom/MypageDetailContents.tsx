import { TicketInfoProps } from "../molecules/MypageTicketInfo";

const MypageDetailContents = ({ infoContents }: TicketInfoProps) => {
  return <div className="font-thin">{infoContents}</div>;
};

export default MypageDetailContents;
