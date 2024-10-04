import axios from "axios";
import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import HorizontalLine from "../components/event/atom/HorizontalLine";

const EventContents = () => {
  const { EVENT_ID } = useParams<Params>();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [begin, setBegin] = useState<Date>();
  const [end, setEnd] = useState<Date>();

  // 제목
  useEffect(() => {
    axios.get(`http://localhost:8080/api/event-title/${EVENT_ID}`).then((res) => {
      setTitle(res.data);
    });
  }, []);

  // 이미지
  useEffect(() => {
    axios.get(`http://localhost:8080/api/event-contents/${EVENT_ID}`).then((res) => {
      setContent(res.data);
    });
  }, []);

  //기간
  useEffect(() => {
    axios.get(`http://localhost:8080/api/event-begin/${EVENT_ID}`).then((res) => {
      setBegin(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/event-end/${EVENT_ID}`).then((res) => {
      setEnd(res.data);
    });
  }, []);

  return (
    <>
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
        <div className="text-xl">{title}</div>
        <div className="text-base">{`기간 | ${begin} ~ ${end}`}</div>
        <HorizontalLine />
        <img src={content} className="mt-3" />
      </div>
    </>
  );
};

export default EventContents;