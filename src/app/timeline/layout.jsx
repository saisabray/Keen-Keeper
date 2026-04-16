import React from "react";

export const metadata = {
  title: "Timeline - Keen Keeper",
  description: "This is the timeline page of Keen Keeper.",
};
const TimeLineLayout = ({ children }) => {
  return <div className=" bg-gray-100">{children}</div>;
};

export default TimeLineLayout;
