import React from 'react';

const BannerStats = ({value,title}) => {
    return (
      <div className="card bg-base-100 shadow-sm p-10 md:w  rounded-2xl flex flex-col items-center gap-3 hover:scale-105 transition duration-300 ease-in-out ">
        <div className="stat-value text-[#244D3F] font-bold text-[32px]">
          {value}
        </div>
        <div className="stat-title text-[#64748b] font-semibold text-[18px]">{title}</div>
      </div>
    );
};

export default BannerStats;