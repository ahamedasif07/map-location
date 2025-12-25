"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, SlidersHorizontal, Search } from "lucide-react";

const FilterButton = ({ label, children, icon }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium bg-white text-gray-800 hover:bg-gray-50 hover:border-gray-400 transition-all duration-150 ${
          open ? "border-gray-400 bg-gray-50" : ""
        }`}
      >
        {icon}
        <span>{label}</span>
        <ChevronDown size={16} className="text-gray-500" />
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
    {
      label: "All Filters",
      icon: <SlidersHorizontal size={16} />,
    },
    {
      label: "Sort by: Recommended",
      options: [
        "Recommended",
        "Price: Low to High",
        "Price: High to Low",
        "Top Rated",
      ],
    },
    {
      label: "Hotel Name",
      isSearch: true,
    },
    {
      label: "Price Range (USD)",
      options: ["$0 – $50", "$50 – $100", "$100 – $200", "$200+"],
    },
    {
      label: "Review Score",
      options: ["Wonderful (9+)", "Very Good (8+)", "Good (7+)"],
    },
    {
      label: "Star Rating",
      options: ["★★★★★", "★★★★", "★★★"],
    },
    {
      label: "Districts / Areas",
      options: ["City Center", "Airport Area", "Beachfront"],
    },
    {
      label: "Hotel Facilities",
      options: ["Free WiFi", "Swimming Pool", "Parking", "Spa"],
    },
  ];

  return (
    <div className="w-full bg-white border rounded-xl px-3 py-3 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((filter) => {
          if (filter.isSearch) {
            // Search input
            return (
              <div key={filter.label} className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder={filter.label}
                  className="pl-9 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:border-gray-400 hover:bg-gray-50"
                />
              </div>
            );
          } else if (filter.options) {
            // Dropdown filter
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
            // Simple button (like All Filters)
            return (
              <button
                key={filter.label}
                className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium bg-white text-gray-800 hover:bg-gray-50 hover:border-gray-400 transition-all duration-150"
              >
                {filter.icon}
                <span>{filter.label}</span>
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}
