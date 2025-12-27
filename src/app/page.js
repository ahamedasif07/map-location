import FilterBar from "@/components/FilterBar";
import HotelSearchBar from "@/components/HotelScarchBar";
import HotelCard from "@/components/mapLocation";
import TopBanner from "@/components/TopBaner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden ">
      <HotelSearchBar />
      <FilterBar />
      <TopBanner />
      <HotelCard />
    </div>
  );
}
