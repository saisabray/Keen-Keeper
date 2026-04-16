import React from "react";
export const metadata = {
  title: "Stats - Keen Keeper",
  description: "This is the stats page of Keen Keeper.",
};
const StatsLayout = ({ children }) => {
  return <div className=" bg-gray-100">{children}</div>;
};

export default StatsLayout;
