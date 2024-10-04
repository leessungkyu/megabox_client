type EventCardProps = {
  EVENT_CARD_IMG?: string;
  EVENT_TITLE?: string;
  EVENT_BEGIN?: string;
  EVENT_END?: string;
};

const EventCard = ({
  EVENT_CARD_IMG = "/img/eventLinkImg-1.jpg",
  EVENT_TITLE = "title",
  EVENT_BEGIN = "2024.00.00",
  EVENT_END = "2024.00.00",
}: EventCardProps) => {
  return (
    <div className="w-60 h-96 snap-center rounded border border-gray flex flex-col hover:cursor-pointer">
      <img src={EVENT_CARD_IMG} />
      <div className="flex flex-col px-3 gap-3 my-7">
        <div className="text-base font-bold h-14">{EVENT_TITLE}</div>
        <div className="text-sm text-darkgray flex items-center">
          {EVENT_BEGIN} ~ {EVENT_END}
        </div>
      </div>
    </div>
  );
};

export default EventCard;