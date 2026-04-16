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
      className={`card 
  ${bg ? "bg-gray-100" : "bg-base-100"} 
  shadow-sm p-5 sm:p-6 md:p-8 
  rounded-2xl flex flex-col items-center justify-center 
  gap-2 sm:gap-3 
  w-full
  active:scale-95 transition-transform duration-200 cursor-pointer
`}
    >
      <p className="text-[#244D3F] font-medium text-xl sm:text-2xl md:text-3xl">
        {text}
      </p>

      <div className="text-[#64748b] text-2xl sm:text-3xl md:text-4xl">
        {icon}
      </div>
    </div>
  );
};

export default TimeLineHandler;
