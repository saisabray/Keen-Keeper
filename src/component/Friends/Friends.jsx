import React from "react";
import Friend from "./Friend";

const FetchFriends = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const Friends = async () => {
  const friends = await FetchFriends();
  console.log(friends);

  return (
    <div className="container mx-auto py-8 md:py-16 px-4 ">
      <h2 className="font-semibold text-[#1f2937] text-2xl">Your Friends</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8  px-1 md:px-0">
        {
          friends.map((friend) => {
            return <Friend key={friend.id} friend={friend} />;
          })
        }
      </div>
    </div>
  );
};

export default Friends;


