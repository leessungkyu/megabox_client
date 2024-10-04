import MypageDetailContents from "../atom/MypageDetailContents";
import MypageDetailTitle from "../atom/MypageDetailTitle";

export type TicketInfoProps = {
  infoTitle?: string;
  infoContents?: string;
};

const MypageTicketInfo = ({
  infoTitle = "타이틀",
  infoContents = "상세내용",
}: TicketInfoProps) => {
  return (
    <div className="flex gap-2">
      <MypageDetailTitle infoTitle={infoTitle} />
      <MypageDetailContents infoContents={infoContents} />
    </div>
  );
};

export default MypageTicketInfo;
