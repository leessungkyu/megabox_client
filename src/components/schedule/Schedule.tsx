import React from "react";

interface ScheduleListProps {
  times: string[];
}

const ScheduleList: React.FC<ScheduleListProps> = ({ times }) => {
  return (
    <div className="schedule-list">
      {times.map(time => (
        <div key={time} className="schedule-item">
          {time}
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;
