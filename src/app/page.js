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
      setIsSticky(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Sticky Top Section */}
      <div
        className={`z-50 transition-all duration-300 ${
          isSticky
            ? "sticky top-0 left-0 w-full shadow-md bg-white"
            : "relative"
        }`}
      >
        <HotelSearchBar />
        <FilterBar isMapShow={isMapShow} setIsMapShow={setIsMapShow} />
        <TopBanner />
      </div>

      {/* Content */}
      <div className="px-4 py-6 relative">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Hotel List */}
          <div
            className={`w-full lg:w-[60%] space-y-4 ${
              isMapShow ? "hidden lg:block" : "block"
            }`}
          >
            <HotelCard />
          </div>

          {/* Map */}
          <div
            className={`w-full ${
              isMapShow ? "block" : "hidden lg:block"
            }  lg:sticky lg:top-[350px] lg:w-[50%]`}
          >
            <div className="overflow-hidden border border-gray-200 shadow-sm h-[500px] lg:h-[600px]">
              <MapLocation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
