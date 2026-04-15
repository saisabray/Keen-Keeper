import BannerStats from "@/component/Banner/Stats";
import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import TimeLineHandler from "../Handle/TimeLIneHandler";

const DetailsPageCol2 = ({ friend }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-8">
        <BannerStats
          value={friend.days_since_contact}
          title="Days Since Contact"
        />
        <BannerStats value={friend.goal} title="Goal(Days)" />
        <BannerStats value={friend.next_due_date} title="Next Due" />
      </div>
      <div>
        <div className="card bg-base-100 shadow-sm p-10 md:w  rounded-2xl flex flex-col  gap-3  ">
          <div className="flex justify-between items-center gap-5">
            <p className="text-[20px] text-[#244d3f] font-medium">
              Relationship Goal
            </p>
            <button className="btn py-2 px-4 bg-gray-300"> Edit</button>
          </div>
          <p className="text-[18px] text-[#64748b]">
            Connect every
            <span className="font-bold text-[#f2937] "> 30 days</span>
          </p>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-sm">
        <h3>Ouick Check In</h3>
        <div className="grid grid-cols-3 gap-8 mt-5">
          <TimeLineHandler friend={friend} icon={<IoCallOutline />} text="Call" bg='bg'/>
          <TimeLineHandler friend={friend} icon={<FaRegMessage />} text="Text" bg='bg'/>
          <TimeLineHandler friend={friend} icon={<IoVideocamOutline />} text="Video" bg='bg'/>
        </div>
      </div>
    </div>
  );
};

export default DetailsPageCol2;
