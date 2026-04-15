"use client";
import BannerStats from "@/component/Banner/Stats";
import React, { useContext } from "react";
import { TimeLineContext } from "@/context/timeLineContext";

const TimeLineHandler = ({ friend, icon, text, bg }) => {
  const { timeLine, setTimeLine } = useContext(TimeLineContext);

  const handleTimeLine = () => {
    const alreadyExisted = timeLine.find(
      (item) => item.id === friend.id && item.action === text.toLowerCase()
    );

    if (alreadyExisted) {
      alert("This action already exists in the timeline.");
      return;
    }

    setTimeLine([
      ...timeLine,
      {
        ...friend,
        action: text.toLowerCase(),
        icon: icon,
        date: new Date().toISOString(),
      },
    ]);
  };

  return (
    <div>
      <button onClick={handleTimeLine}>
        <BannerStats value={icon} title={text} bg={bg} />
      </button>
    </div>
  );
};

export default TimeLineHandler;
