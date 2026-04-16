import Friend from "./Friend";

const FetchFriends = async () => {
  const res = await fetch("https://keen-keeper-ten-chi.vercel.app/data.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const Friends = async () => {
  const friends = await FetchFriends();
  console.log(friends);

  return (
    <div className="container mx-auto py-8 md:py-16 px-2 md:px-0">
      <h2 className="font-semibold text-[#1f2937] text-2xl">Your Friends</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8  px-1 md:px-0">
        {friends.map((friend) => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default Friends;
