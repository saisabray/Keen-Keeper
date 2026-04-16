import Image from "next/image";
import Link from "next/link";
import React from "react";

const Friend = ({ friend }) => {
  console.log(friend, "friend");
  return (
    <Link
      href={`/friend/${friend.id}`}
      className="card bg-base-100 mt-5 md:mt-10 py-3 hover:scale-105 transition duration-300 ease-in-out shadow-sm"
    >
      <figure className="px-10 pt-10">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={100}
            height={100}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-[20px] text-[#1f2937] font-semibold">
          {friend.name}
        </h2>
        <p className="text-base text-[#64748b]">
          {friend.days_since_contact}d ago
        </p>
        <div className="flex gap-3">
          {friend.tags.map((word, index) => (
            <p
              key={index}
              className="text-sm text-[#1f2937] bg-[#cbfadb] rounded-full px-3 py-2 font-medium"
            >
              {word.toUpperCase()}
            </p>
          ))}
        </div>
        <p
          className={`text-base text-white ${friend.status === "almost due" ? "bg-amber-400" : friend.status === "overdue" ? "bg-[#ef4444]" : "bg-[#244d3f]"} rounded-full px-3 py-2 font-medium`}
        >
          {friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
        </p>
      </div>
    </Link>
  );
};

export default Friend;
