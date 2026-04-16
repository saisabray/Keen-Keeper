"use client";
import React, { useContext, useState } from "react";
import { TimeLineContext } from "@/context/timeLineContext";

const TimeLinePage = () => {
  const { timeLine } = useContext(TimeLineContext);
  const [filter, setFilter] = useState("all");
  console.log(filter, "filter");
  const filteredTimeLine =
    filter === "all"
      ? timeLine
      : timeLine.filter((item) => item.action === filter);
  console.log(filteredTimeLine, "filteredTimeLine");
  return (
    <div className="container mx-auto h-full md:min-h-screen p-2 md:p-0 my-5 md:my-15 ">
      <h1 className="text-2xl md:text-3xl  lg:text-[48px] text-[#1F2937] mb-4 font-bold">
        Timeline
      </h1>
      <div
        className={`mt-10 mb-5 ${timeLine.length === 0 ? "hidden" : "flex"}`}
      >
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select border-0 select-sm w-auto bg-gray-200 text-base pr-10"
        >
          <option value="all">All</option>
          <option value="call">Call</option>
          <option value="video">Video</option>
          <option value="text">Text</option>
        </select>
      </div>
      <div className="bg-gray-200 p-5 rounded-xl">
        {filteredTimeLine.length === 0 ? (
          <div className="bg-gray-200 h-[50vh] rounded-2xl mt-5 flex items-center justify-center">
            <p className="md:text-4xl font-bold text-black">No activity yet</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3 md:gap-5 md:mt-5">
            {filteredTimeLine.map((item) => (
              <div
                key={`${item.id}-${new Date(item.date).getTime()}`}
                className="p-4 shadow-sm bg-white rounded-2xl flex gap-5"
              >
                
                <div className="pl-5 text-4xl flex justify-center items-center">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-base md:text-[20px] font-medium">
                    <span className="font-bold">
                      {item.action.charAt(0)?.toUpperCase() +
                        item.action.slice(1)}
                    </span>
                    &nbsp; with &nbsp;
                    {item.name}
                  </h4>

                  <p className="font-semibold text-xs md:text-sm">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeLinePage;
