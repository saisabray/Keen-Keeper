"use client";
import PathNameProvider from "@/context/pathNameContext";
import TimeLineProvider from "@/context/timeLineContext";
import { Children } from "react";

const Providers = ({ children }) => {
  return (
    <TimeLineProvider>
      <PathNameProvider>{children}</PathNameProvider>
    </TimeLineProvider>
  );
};
export default Providers;
