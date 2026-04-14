import React from "react";
import BannerStats from "./Stats";

const Banner = () => {
  return (
    <div className="container mx-auto py-8 md:py-16 px-4 flex flex-col items-center">
      <h1 className="text-[24px] md:text-5xl font-bold text-base text-center">
        Friends to keep close in your life
      </h1>

      <p className="mt-4 text-base text-center max-w-xl">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="btn mt-6 font-medium bg-[#244d3f] hover:bg-[#011811] text-white border-none">
        + Add a Friend
      </button>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        <BannerStats value="10" title="Total Friends"></BannerStats>
        <BannerStats value="3" title="On Track"></BannerStats>
        <BannerStats value="6" title="Need Attention"></BannerStats>
        <BannerStats value="12" title="Interactions This Month"></BannerStats>
      </div>
    </div>
  );
};

export default Banner;
