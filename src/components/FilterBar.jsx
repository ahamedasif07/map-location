"use client";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import {
  ChevronDown,
  SlidersHorizontal,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AllFiltersDropdown from "./AllFilterButton";

/**
 * FilterButton Component with Portal support
 * এটি ড্রপডাউন মেনুটিকে বডির ঠিক নিচে রেন্ডার করে যাতে overflow-x-auto মেনুকে কেটে না দেয়।
 */
const FilterButton = ({ label, children, icon }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  // বাটনের পজিশন অনুযায়ী মেনুর পজিশন সেট করা
  const updatePosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  };

  useLayoutEffect(() => {
    if (open) {
      updatePosition();
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition, true);
    }
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open]);

  useEffect(() => {
    const handler = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        // ড্রপডাউন পোর্টালের ভেতরে ক্লিক করলে যেন বন্ধ না হয়
        if (!e.target.closest(".portal-dropdown")) {
          setOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex-shrink-0">
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium bg-white text-gray-800 hover:bg-gray-50 hover:border-gray-400 transition-all duration-150 whitespace-nowrap ${
          open ? "border-gray-800 bg-gray-50 shadow-sm" : "border-gray-300"
        }`}
      >
        {icon}
        <span>{label}</span>
        {children && (
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {open &&
        children &&
        createPortal(
          <div
            className="portal-dropdown absolute z-[9999] mt-2 min-w-[220px] bg-white border border-gray-200 rounded-xl shadow-2xl py-2 animate-in fade-in zoom-in-95 duration-100"
            style={{
              top: `${coords.top}px`,
              left: `${coords.left}px`,
            }}
          >
            {children}
          </div>,
          document.body
        )}
    </div>
  );
};

export default function FilterBar() {
  const containerRef = useRef(null);

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

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full border-y border-gray-100 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 relative flex items-center">
        {/* Navigation Arrows for Mobile */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md z-10 md:hidden border border-gray-200 active:scale-95"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md z-10 md:hidden border border-gray-200 active:scale-95"
        >
          <ChevronRight size={18} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={containerRef}
          className="flex items-center gap-2 overflow-x-auto scrollbar-none scroll-smooth pb-1"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {filters.map((filter, index) => {
            // Case 1: All Filters
            if (filter.label === "All Filters") {
              return (
                <FilterButton
                  key={index}
                  label={filter.label}
                  icon={filter.icon}
                >
                  <AllFiltersDropdown />
                </FilterButton>
              );
            }

            // Case 2: Search Input
            if (filter.isSearch) {
              return (
                <div key={index} className="relative flex-shrink-0">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder={filter.label}
                    className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-800 hover:bg-gray-50 transition-all w-48"
                  />
                </div>
              );
            }

            // Case 3: Standard Dropdown
            if (filter.options) {
              return (
                <FilterButton
                  key={index}
                  label={filter.label}
                  icon={filter.icon}
                >
                  <ul className="max-h-64 overflow-y-auto">
                    {filter.options.map((option) => (
                      <li
                        key={option}
                        className="px-4 py-2.5 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 hover:text-black transition-colors"
                        onClick={() => console.log(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </FilterButton>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
}
