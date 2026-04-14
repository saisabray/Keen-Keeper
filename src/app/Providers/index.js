"use client";
import PathNameProvider from "@/context/context";
import { Children } from "react";

const Providers = ({ children }) => {
  return <PathNameProvider>{children}</PathNameProvider>;
};
export default Providers;
