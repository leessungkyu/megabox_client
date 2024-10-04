import { Link } from "react-router-dom";
import EventContents from "../../../pages/EventContents"
import EventCard from "../atom/EventCard";

const EventCardGroup = () => {
  const eventDummyData = [
    {
      EVENT_ID: 1,
      EVENT_TITLE: "[디즈니 시네마] 애니메이션 컬렉션 프리퀀시",
      EVENT_BEGIN: "2024-09-11",
      EVENT_END: "2024-09-24",
      EVENT_CARD_IMG:
        "https://img.megabox.co.kr/SharedImg/event/2024/09/05/Yfvtj9xnSqkYEskueS6afzCARIz4bLlP.jpg",
    },
    {
      EVENT_ID: 2,
      EVENT_TITLE: "[굿즈] <메가박스X위글위글> 콜드컵 신규 런칭!",
      EVENT_BEGIN: "2024-09-11",
      EVENT_END: "2024-11-30",
      EVENT_CARD_IMG:
        "https://img.megabox.co.kr/SharedImg/event/2024/09/05/UMox4t62Vc7wHuEbOTO6YDRSKE6UgpOX.jpg",
    },
    {
      EVENT_ID: 3,
      EVENT_TITLE: "메가박스 앵콜 아트그라피 <룩백>",
      EVENT_BEGIN: "2024-09-09",
      EVENT_END: "2024-09-10",
      EVENT_CARD_IMG:
        "https://img.megabox.co.kr/SharedImg/event/2024/09/03/fEP5BLYoU7XxlUI5j0JUKbSproZmGbbU.jpg",
    },
    {
      EVENT_ID: 4,
      EVENT_TITLE: "<룩백> 원작 도서 굿즈패키지 상영회",
      EVENT_BEGIN: "2024-09-13",
      EVENT_END: "2024-09-15",
      EVENT_CARD_IMG:
        "https://img.megabox.co.kr/SharedImg/event/2024/08/29/IuI9AmI7VlWNgryd3f0sVGlTHwrRadm2.jpg",
    },
  ];

  return (
    <div className="w-full max-w-screen-lg flex justify-between mb-20">
      {eventDummyData.map((v) => (
        <Link to={`/event-contents/${v.EVENT_ID}`}>
          <EventCard {...v} />
        </Link>
      ))}
    </div>
  );
};

export default EventCardGroup;