"use client";
import React, { createContext, useState } from "react";

export const TimeLineContext = createContext();

const TimeLineProvider = ({ children }) => {
 const [timeLine, setTimeLine] = useState([]);
  return (
    <TimeLineContext.Provider value={{ timeLine, setTimeLine }}>
      {children}
    </TimeLineContext.Provider>

  );
};

export default TimeLineProvider;
