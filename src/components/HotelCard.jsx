"use client";

import Image from "next/image";
import banerImage from "../../public/images/baner.jpg";

import { FaStar } from "react-icons/fa";
import { MdLocationOn, MdOutlineGpsFixed } from "react-icons/md";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

export default function HotelList() {
  const hotelData = [
    {
      id: 1,
      name: "Hotel Manofa",
      stars: 2,
      location: "Amsterdam-Centrum · 0.60 km to city centre",
      reviews: "Very Good",
      reviewCount: 3912,
      rating: 7.2,
      promoCode: "WEGONEWYEAR · 6%",
      oldPrice: "US$127",
      newPrice: "US$85",
      positives: [
        "Clean Rooms",
        "Good Value",
        "Comfortable Beds",
        "Friendly Staff",
      ],
      negatives: ["Noisy At Night"],
    },
    {
      id: 2,
      name: "Grand Hotel Riverside",
      stars: 4,
      location: "Prague Old Town · 1.2 km to city centre",
      reviews: "Excellent",
      reviewCount: 1540,
      rating: 8.9,
      promoCode: "WELCOME2025 · 10%",
      oldPrice: "US$210",
      newPrice: "US$189",
      positives: ["City View", "Free Breakfast", "Luxury Spa", "Near Metro"],
      negatives: ["Pricey Mini-bar"],
    },
    {
      id: 3,
      name: "Ocean Breeze Resort",
      stars: 5,
      location: "Bali Beachfront · 5.0 km to city centre",
      reviews: "Superb",
      reviewCount: 2850,
      rating: 9.5,
      promoCode: "BEACHLIFE · 15%",
      oldPrice: "US$450",
      newPrice: "US$380",
      positives: [
        "Private Beach",
        "Infinity Pool",
        "Quiet Location",
        "Kids Club",
      ],
      negatives: ["Far from Airport"],
    },
    {
      id: 4,
      name: "Ocean Breeze Resort",
      stars: 5,
      location: "Bali Beachfront · 5.0 km to city centre",
      reviews: "Superb",
      reviewCount: 2850,
      rating: 9.5,
      promoCode: "BEACHLIFE · 15%",
      oldPrice: "US$450",
      newPrice: "US$380",
      positives: [
        "Private Beach",
        "Infinity Pool",
        "Quiet Location",
        "Kids Club",
      ],
      negatives: ["Far from Airport"],
    },
    {
      id: 5,
      name: "Ocean Breeze Resort",
      stars: 5,
      location: "Bali Beachfront · 5.0 km to city centre",
      reviews: "Superb",
      reviewCount: 2850,
      rating: 9.5,
      promoCode: "BEACHLIFE · 15%",
      oldPrice: "US$450",
      newPrice: "US$380",
      positives: [
        "Private Beach",
        "Infinity Pool",
        "Quiet Location",
        "Kids Club",
      ],
      negatives: ["Far from Airport"],
    },
    {
      id: 6,
      name: "Ocean Breeze Resort",
      stars: 5,
      location: "Bali Beachfront · 5.0 km to city centre",
      reviews: "Superb",
      reviewCount: 2850,
      rating: 9.5,
      promoCode: "BEACHLIFE · 15%",
      oldPrice: "US$450",
      newPrice: "US$380",
      positives: [
        "Private Beach",
        "Infinity Pool",
        "Quiet Location",
        "Kids Club",
      ],
      negatives: ["Far from Airport"],
    },
    {
      id: 7,
      name: "Ocean Breeze Resort",
      stars: 5,
      location: "Bali Beachfront · 5.0 km to city centre",
      reviews: "Superb",
      reviewCount: 2850,
      rating: 9.5,
      promoCode: "BEACHLIFE · 15%",
      oldPrice: "US$450",
      newPrice: "US$380",
      positives: [
        "Private Beach",
        "Infinity Pool",
        "Quiet Location",
        "Kids Club",
      ],
      negatives: ["Far from Airport"],
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-4">
      {hotelData.map((hotel) => (
        <div
          key={hotel.id}
          className="w-full max-w-5xl mx-auto border border-transparent hover:border-green-500 transition rounded-xl overflow-hidden bg-white shadow-sm"
        >
          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[230px_1fr_220px] gap-4">
            {/* IMAGE */}
            <div>
              <div className="relative h-52 sm:h-60 lg:h-full w-full lg:w-[230px] overflow-hidden">
                <Image
                  src={banerImage}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  See all
                </span>
              </div>
            </div>

            {/* DETAILS */}
            <div className="space-y-2 py-4 px-5">
              <h3 className="text-lg lg:text-xl font-semibold leading-tight">
                {hotel.name}
              </h3>

              <span className="flex text-orange-400 text-sm">
                {[...Array(hotel.stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </span>

              <div className="relative w-fit">
                <p className="flex items-center gap-1 text-sm lg:text-base text-gray-700 whitespace-nowrap">
                  <MdLocationOn />
                  {hotel.location}
                </p>

                <p className="hidden hover:flex font-semibold items-center gap-1 text-blue-800 underline cursor-pointer">
                  <MdOutlineGpsFixed />
                  View on map
                </p>
              </div>

              {/* POSITIVES / NEGATIVES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mt-3">
                {hotel.positives.map((pos, idx) => (
                  <p key={idx} className="flex items-center gap-1">
                    <BsCheckCircleFill className="text-green-600 text-xs" />
                    <span className="truncate">{pos}</span>
                  </p>
                ))}

                {hotel.negatives.map((neg, idx) => (
                  <p
                    key={idx}
                    className="flex items-center gap-1 text-red-500 sm:col-span-2"
                  >
                    <BsXCircleFill className="text-xs" />
                    {neg}
                  </p>
                ))}
              </div>
            </div>

            {/* PRICE & REVIEW */}
            <div
              className="
                border-t lg:border-t-0 lg:border-l border-dashed
                flex flex-col justify-between
                items-start lg:items-end
                text-left lg:text-right
                px-5 py-4
              "
            >
              {/* REVIEW */}
              <div className="flex items-center gap-3 lg:justify-end">
                <div>
                  <p className="font-semibold text-gray-700">{hotel.reviews}</p>
                  <p className="text-sm text-gray-600">
                    {hotel.reviewCount} Reviews
                  </p>
                </div>

                <span className="bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded">
                  {hotel.rating}
                </span>
              </div>

              {/* PRICE */}
              <div className="mt-6">
                <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded mb-2">
                  {hotel.promoCode}
                </span>

                <div className="flex items-center gap-3 lg:justify-end">
                  <p className="text-sm text-gray-600 line-through">
                    {hotel.oldPrice}
                  </p>
                  <p className="text-xl lg:text-2xl font-bold">
                    {hotel.newPrice}
                  </p>
                </div>

                <p className="text-xs text-gray-500">includes taxes and fees</p>
                <p className="text-xs text-gray-800">For 1 night</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
