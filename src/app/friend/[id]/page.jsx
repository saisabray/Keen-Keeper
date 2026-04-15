import DetailsPageCol1 from "@/component/Friends/DetailsPage/Col-1/DetailsPageCol1";
import DetailsPageCol2 from "@/component/Friends/DetailsPage/Col-2/DetailsPageCol2";

const FetchFriends = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
const FriendDetailsPage = async ({ params }) => {
  const friends = await FetchFriends();
  const { id } = await params;
  const friend = friends.find((f) => String(f.id) === id);

  console.log(id, "id");
  return (
    <div className="mt-20 container mx-auto grid grid-cols-12 gap-8  ">
      <div className="col-span-4">
        <DetailsPageCol1 friend={friend} />
      </div>
      <div className="col-span-8 flex flex-col gap-5">
        <DetailsPageCol2 friend={friend}/>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
