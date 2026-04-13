import React, { use } from "react";
import NavBtn from "./NavBtn";





const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/"  },
    { name: "Timeline", path: "/timeline" },
    { name: "Stats", path: "/stats" },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="w-11/12 mx-auto flex justify-between">
        <div className="navbar-start flex items-center ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
          </div>
          <div>
            <a className="text-2xl font-semibold text-[#244d3f]">
              <span className="font-extrabold text-[#1f2937]">Keen</span>keeper
            </a>
          </div>
        </div>
        <div className="navbar-end flex-row gap-5">
          {navItems.map((item, index) => (
            <NavBtn key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
