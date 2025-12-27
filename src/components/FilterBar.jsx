"use client";
import React, { useRef } from "react";
import {
  ChevronDown,
  SlidersHorizontal,
  Search,
  ChevronLeft,
  ChevronRight,
  FileVideo,
} from "lucide-react";

const FilterButton = ({ label, children, icon }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative flex-shrink-0">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium bg-white text-gray-800 hover:bg-gray-50 hover:border-gray-400 transition-all duration-150 ${
          open ? "border-gray-400 bg-gray-50" : ""
        }`}
      >
        {icon}
        <span>{label}</span>
        {children && <ChevronDown size={16} className="text-gray-500" />}
      </button>

      {open && children && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white border rounded-xl shadow-lg z-50">
          {children}
        </div>
      )}
    </div>
  );
};

export default function FilterBar() {
  const filters = [
    { label: "All Filters", icon: <SlidersHorizontal size={16} /> },
    {
      label: "Sort by: Recommended",
      options: [
        "Recommended",
        "Price: Low to High",
        "Price: High to Low",
        "Top Rated",
      ],
    },
    { label: "Hotel Name", isSearch: true },
    {
      label: "Price Range (USD)",
      options: ["$0 – $50", "$50 – $100", "$100 – $200", "$200+"],
    },
    {
      label: "Review Score",
      options: ["Wonderful (9+)", "Very Good (8+)", "Good (7+)"],
    },
    { label: "Star Rating", options: ["★★★★★", "★★★★", "★★★"] },
    {
      label: "Districts / Areas",
      options: ["City Center", "Airport Area", "Beachfront"],
    },
    {
      label: "Hotel Facilities",
      options: ["Free WiFi", "Swimming Pool", "Parking", "Spa"],
    },
  ];

  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full border-y border-gray-400 mt-4">
      <div
        className=" max-w-7xl mx-auto bg-white 
     rounded-xl px-3 py-3  relative"
      >
        {/* Left Arrow - small devices only */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md z-10 flex md:hidden items-center justify-center"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow - small devices only */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md z-10 flex md:hidden items-center justify-center"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={containerRef}
          className="flex gap-2 overflow-x-auto md:overflow-x-visible scroll-smooth px-8 scrollbar-none"
        >
          {filters.map((filter) => {
            if (filter.isSearch) {
              return (
                <div key={filter.label} className="relative flex-shrink-0">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder={filter.label}
                    className="pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-gray-400 hover:bg-gray-50"
                  />
                </div>
              );
            } else if (filter.options) {
              return (
                <FilterButton
                  key={filter.label}
                  label={filter.label}
                  icon={filter.icon}
                >
                  <ul>
                    {filter.options.map((option) => (
                      <li
                        key={option}
                        className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 transition"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </FilterButton>
              );
            } else {
              return (
                <button
                  key={filter.label}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium bg-white text-gray-800 hover:bg-gray-50 hover:border-gray-400 transition-all duration-150"
                >
                  {filter.icon}
                  <span>{filter.label}</span>
                </button>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
