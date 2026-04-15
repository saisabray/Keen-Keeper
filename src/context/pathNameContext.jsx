"use client";
import { usePathname } from "next/navigation";
import React, { createContext } from "react";

export const PathNameContext = createContext();

const PathNameProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <PathNameContext.Provider value={pathName}>
      {children}
    </PathNameContext.Provider>
  );
};

export default PathNameProvider;
