import React, { use } from "react";
import NavBtn from "./NavBtn";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Timeline", path: "/timeline" },
    { name: "Stats", path: "/stats" },
  ];
  return (
    <div className="navbar bg-base-100 py-3 shadow-sm ">
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
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems.map((item, index) => (
                <li key={index} className="text-[#64748b]">
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link href="/">
              <Image src={Logo} alt="logo" width={200} height={200} />
            </Link>
          </div>
        </div>
        <div className="navbar-end flex-row gap-5 hidden md:flex">
          {navItems.map((item, index) => (
            <NavBtn key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
