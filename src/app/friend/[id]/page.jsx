import DetailsPageCol1 from "@/component/Friends/DetailsPage/Col-1/DetailsPageCol1";
import DetailsPageCol2 from "@/component/Friends/DetailsPage/Col-2/DetailsPageCol2";

const FetchFriends = async () => {
  const res = await fetch("https://keen-keeper-ten-chi.vercel.app/data.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const friends = await FetchFriends();
  const friend = friends.find((friend) => String(friend.id) === id);

  if (!friend) {
    return {
      title: `Not found - Keen Keeper`,
    };
  }

  return {
    title: `${friend.name} - Keen Keeper`,
    description: friend.description,
  };
}

const FriendDetailsPage = async ({ params }) => {
  const friends = await FetchFriends();
  const { id } = await params;
  const friend = friends.find((f) => String(f.id) === id);

  console.log(id, "id");
  return (
    <div className="mt-5 md:mt-20 container mx-auto grid grid-cols-12 gap-8  ">
      <div className="col-span-12 p-2 md:p-0 md:col-span-4 ">
        <DetailsPageCol1 friend={friend} />
      </div>
      <div className="col-span-12 p-2 md:p-0 md:col-span-8 flex flex-col gap-5">
        <DetailsPageCol2 friend={friend} />
      </div>
    </div>
  );
};

export default FriendDetailsPage;
