"use client";
import React, { useContext, useState } from "react";
import { TimeLineContext } from "@/context/timeLineContext";

const TimeLinePage = () => {
  const { timeLine } = useContext(TimeLineContext);


  return (
    <div className="container mx-auto min-h-screen my-15 ">
      <h1 className="text-[48px] text-[#1F2937] font-bold">Timeline</h1>

      <div className="bg-gray-200 p-5 rounded-xl">
        {timeLine.length === 0 ? (
          <div className="bg-gray-200 h-[50vh] rounded-2xl mt-5 flex items-center justify-center">
            <p className="text-4xl font-bold text-black">No activity yet</p>
          </div>
        ) : (
          <div className="flex flex-col gap-5 mt-5">
            {timeLine.map((item) => (
              <div
                key={item.id}
                className="p-4 shadow-sm bg-white rounded-2xl flex gap-5"
              >
                <div className="pl-5 text-4xl flex justify-center items-center">
                  {item.icon}
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-medium">
                    <span className="font-bold">{item.action} </span> with
                    &nbsp;
                    {item.name}
                  </h4>

                  <p className="font-semibold">
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
