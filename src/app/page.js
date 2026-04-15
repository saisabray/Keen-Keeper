import Banner from "@/component/Banner/Banner";
import Friends from "@/component/Friends/Friends";
import FriendsLoading from "@/component/Friends/FriendsLoading";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Banner />
      <hr className="container mx-auto bg-gray-100" />
      <Suspense fallback={<FriendsLoading/>}>
        <Friends />
      </Suspense>
    </div>
  );
}
