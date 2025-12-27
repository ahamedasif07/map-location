"use client";
import FilterBar from "@/components/FilterBar";
import HotelSearchBar from "@/components/HotelScarchBar";
import HotelCard from "@/components/HotelCard";
import TopBanner from "@/components/TopBaner";
import MapLocation from "@/components/MapLocation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMapShow, setIsMapShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // আপনি ৩০ পিক্সেল স্ক্রল করার পর ফিক্সড করতে চেয়েছেন
      if (window.scrollY > 30) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div
        className={`z-50 transition-all duration-300 ${
          isSticky
            ? "sticky top-0 left-0 w-full shadow-md bg-white"
            : "relative"
        }`}
      >
        <HotelSearchBar />
        <FilterBar const isMapShow={isMapShow} setIsMapShow={setIsMapShow} />

        <TopBanner />
      </div>

      <div className=" px-4 py-6 relative">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left side: Hotel Cards List */}
          <div className="w-full lg:w-[60%] space-y-4">
            <HotelCard />
          </div>

          {/* Right side: Map - এটি স্ক্রল করার সময় নিজের জায়গায় আটকে (Sticky) থাকবে */}
          <div className="w-full  fixed lg:w-[50%] lg:sticky lg:top-[350px] h-[calc(100-220px)]">
            <div className=" overflow-hidden border border-gray-200 shadow-sm h-[500px] lg:h-[600px]">
              <MapLocation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
