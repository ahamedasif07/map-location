import HotelCard from "@/components/mapLocation";
import TopBanner from "@/components/TopBaner";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <TopBanner />
      <HotelCard />
    </div>
  );
}
