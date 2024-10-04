import SubNavbar from "../components/event/organism/SubNavbar";
import CategoryTitle from "../components/event/molecules/CategoryTitle";
import EventCardGroup from "../components/event/molecules/EventCardGroup";
import EventSlideImg from "../components/event/organism/EventSlideImg";

const Event = () => {
  return (
    <>
      <SubNavbar />
      <div className="w-full h-8"></div>
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="py-7 text-lg font-bold">전체</div>
        <EventSlideImg />

        <CategoryTitle title="미소지기 Pick" />
        <EventCardGroup />
        <CategoryTitle title="영화" />
        <EventCardGroup />
        <CategoryTitle title="제휴할인" />
        <EventCardGroup />
      </div>
    </>
  );
};

export default Event;