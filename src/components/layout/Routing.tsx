import { Route, Routes } from "react-router-dom";
import Event from "../../pages/Event";
import EventContents from "../../pages/EventContents";
import MainPage from "../../pages/MainPage";
import MyPage from "../../pages/MyPage";
import Layout from "./Layout";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";
import SeatReservationPage from "../../pages/SeatReservationPage";
import StorePage from "../../pages/StorePage";
import UserFindPage from "../../pages/UserFindPage";
import GuestPage from "../../pages/GuestPage";
import MovieSchedulePage from "../../pages/MovieSchedulePage";

const Routing = () => {
  return (
    <div className="w-full font-Pretendard">
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:Id" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event-contents/:EVENT_ID" element={<EventContents />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/userfind" element={<UserFindPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/guest" element={<GuestPage />} />
          <Route path="/seatreservation" element={<SeatReservationPage />} />
          <Route path="/reservation/:id" element={<MovieSchedulePage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default Routing;
