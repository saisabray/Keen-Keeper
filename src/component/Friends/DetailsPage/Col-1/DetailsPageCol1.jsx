import Image from "next/image";
import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { IoArchive } from "react-icons/io5";
import { RiNotificationSnoozeLine } from "react-icons/ri";

const DetailsPageCol1 = ({ friend }) => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="card bg-base-100 py-3  shadow-sm">
        <figure className="px-10 pt-10">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={100}
              height={100}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[20px] text-[#1f2937] font-semibold">
            {friend.name}
          </h2>
          <p className="text-base text-[#64748b]">
            {friend.days_since_contact}d ago
          </p>
          <div className="flex gap-3">
            {friend.tags.map((word, index) => (
              <p
                key={index}
                className="text-sm text-[#1f2937] bg-[#cbfadb] rounded-full px-3 py-2 font-medium"
              >
                {word.toUpperCase()}
              </p>
            ))}
          </div>
          <p
            className={`text-base text-white ${friend.status === "almost due" ? "bg-amber-400" : friend.status === "overdue" ? "bg-[#ef4444]" : "bg-[#244d3f]"} rounded-full px-3 py-2 font-medium`}
          >
            {friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
          </p>
          <p className="italic font-bold  text-[#64748b]">"{friend.bio}"</p>
          <p className="text-[#64748b] text-[14px] font-semibold">
            Preferred: Email
          </p>
        </div>
      </div>
      <div className="flex  flex justify-center items-center bg-base-100 shadow-sm py-3 rounded-2xl  ">
        <p className="text-[16px] font-medium text-[#1f2937]">
          <RiNotificationSnoozeLine className="text-xl inline-block" /> Snooze 2
          weeks
        </p>
      </div>
      <div className="flex  flex justify-center items-center bg-base-100 shadow-sm py-3  rounded-2xl">
        <p className="text-[16px] font-medium text-[#1f2937]">
          <IoArchive className="text-xl inline-block" /> Archive
        </p>
      </div>
      <div className="flex  flex justify-center items-center bg-base-100 shadow-sm py-3 rounded-2xl ">
        <p className="text-[16px] font-medium text-[#1f2937]">
          <AiTwotoneDelete className="text-xl inline-block" />
          Delete
        </p>
      </div>
    </div>
  );
};

export default DetailsPageCol1;
