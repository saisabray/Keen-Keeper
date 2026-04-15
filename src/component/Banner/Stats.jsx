"use client";
import { useContext } from "react";
import { PathNameContext } from "@/context/pathNameContext";

const BannerStats = ({ value, title, bg }) => {
  const pathName = useContext(PathNameContext);

  return (
    <div
      className={`card ${bg ? "bg-gray-100 px-30 active:scale-101" : "bg-base-100"} shadow-sm p-10 rounded-2xl flex flex-col items-center gap-3
      ${pathName === "/" ? "hover:scale-105 transition-transform duration-300 ease-in" : ""}`}
    >
      <div className="stat-value text-[#244D3F] font-bold text-[32px]">
        {value}
      </div>

      <div className="stat-title text-[#64748b] font-semibold text-[18px]">
        {title}
      </div>
    </div>
  );
};

export default BannerStats;
