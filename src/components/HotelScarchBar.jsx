import React from "react";
import { Search, ChevronDown } from "lucide-react";

const HotelSearchBar = () => {
  return (
    <div className="w-full px-4 py-8 ">
      <div className="">
        <div className="flex flex-col lg:flex-row items-stretch gap-3">
          {/* 1. Destination Section - Separate Box */}
          <div className="flex-[1.2] flex flex-col justify-center px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-gray-400 cursor-pointer transition-all">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
              Destination
            </p>
            <p className="text-sm md:text-lg font-bold text-gray-900 mt-1">
              Dhaka, Bangladesh
            </p>
          </div>

          {/* 2. Date Range Section - Combined Box with internal divider */}
          <div className="flex-1 flex bg-white border border-gray-200 rounded-xl shadow-sm ">
            {/* Check In */}
            <div className="flex-1 px-5 py-3 border-r border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                Check In
              </p>
              <p className="text-sm md:text-lg font-bold text-gray-900 mt-1 whitespace-nowrap">
                Sat, 27 Dec 2025
              </p>
            </div>
            {/* Check Out */}
            <div className="flex-1 px-5 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                Check Out
              </p>
              <p className="text-sm md:text-lg font-bold text-gray-900 mt-1 whitespace-nowrap">
                Sun, 28 Dec 2025
              </p>
            </div>
          </div>

          {/* 3. Guests & Rooms Section - Separate Box */}
          <div className="flex-1 px-5 py-3 flex items-center justify-between bg-white border border-gray-200 rounded-xl shadow-sm hover:border-gray-400 cursor-pointer transition-all">
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                Guests & Rooms
              </p>
              <p className="text-sm md:text-lg font-bold text-gray-900 mt-1">
                2 Adults in 1 room
              </p>
            </div>
            <ChevronDown size={18} className="text-gray-400" />
          </div>

          {/* 4. Search Button Section */}
          <div className="flex items-center">
            <button className="w-full lg:w-16 h-14 lg:h-full min-h-[56px] bg-[#44B111] hover:bg-[#3a960e] text-white rounded-xl flex items-center justify-center transition-all shadow-md active:scale-95">
              <Search size={24} strokeWidth={2.5} />
              <span className="lg:hidden ml-2 font-bold uppercase tracking-wider">
                Search Hotels
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchBar;
