import Banner from "@/component/Banner/Banner";
import Friends from "@/component/Friends/Friends";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Banner />
      <hr className="container mx-auto bg-gray-100" />
      <Friends />
    </div>
  );
}
