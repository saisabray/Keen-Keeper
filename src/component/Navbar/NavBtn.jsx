"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";

const icons = {
  "/": RiHome2Line,
  "/timeline": IoTimeOutline,
  "/stats": TfiStatsUp,
};
const NavBtn = ({ item }) => {
  const pathName = usePathname();
  const Icon = icons[item.path];
  return (
    <Link
      href={item.path}
      className={`text-[#64748b] flex justify-between items-center text-base ${pathName === item.path ? "font-semibold py-3 px-5 rounded bg-[#244d3f] text-white" : ""}`}
    >
      {" "}
      {Icon && <Icon className="inline-block mr-1" />}
      {item.name}
    </Link>
  );
};

export default NavBtn;
