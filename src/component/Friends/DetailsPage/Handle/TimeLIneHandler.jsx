"use client";
import React, { useContext } from "react";
import { TimeLineContext } from "@/context/timeLineContext";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";

const TimeLineHandler = ({ friend, icon, text, bg }) => {
  const { timeLine, setTimeLine } = useContext(TimeLineContext);
  const pathName = usePathname();

  const handleTimeLine = () => {
    const action = text.toLowerCase();

    const alreadyExisted = timeLine.find(
      (item) => item.id === friend.id && item.action === action,
    );

    if (alreadyExisted) {
      toast.error(`${text} already exists in timeline!`);
      return;
    }

   const newEntry = {
     ...friend,
     action,
     icon,
     date: new Date(),
   };


    setTimeLine([...timeLine, newEntry]);

    toast.success(`${text} added to timeline!`);
  };

  return (
    <div
      onClick={handleTimeLine}
      className={`card ${bg ? "bg-gray-100  px-30 active:scale-101" : "bg-base-100"} shadow-sm p-10 rounded-2xl flex flex-col items-center gap-3
      ${pathName === "/" ? "hover:scale-105 transition-transform duration-300 ease-in" : ""}`}
    >
      <p className="stat-value text-[#244D3F] font-medium text-3xl ">{text}</p>

      <div className="stat-title text-[#64748b] font-semibold text-3xl">
        {icon}
      </div>
    </div>
  );
};

export default TimeLineHandler;
