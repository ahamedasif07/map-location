"use client";

import Image from "next/image";
import banerImage from "../../public/images/baner.jpg";

import { FaStar } from "react-icons/fa";
import { MdLocationOn, MdOutlineGpsFixed } from "react-icons/md";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

export default function HotelList() {
  // ১. কার্ডের ডেটা অনুযায়ী Array of Objects তৈরি
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
      {/* ২. Map ফাংশন ব্যবহার করে কার্ডগুলো রেন্ডার করা */}
      {hotelData.map((hotel) => (
        <div
          key={hotel.id}
          className="w-full max-w-4xl mx-auto border border-transparent group hover:border-green-500 transition rounded-xl overflow-hidden bg-white shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Image Section */}
            <div className="md:col-span-1">
              <div className="relative h-52 md:h-full w-full md:w-[230px] rounded-t-lg md:rounded-l-lg md:rounded-tr-none overflow-hidden">
                <Image
                  src={banerImage}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 md:bottom-6 right-4 md:right-8 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  See all
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="md:col-span-2 space-y-2 py-4 px-5">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                {hotel.name}
              </h3>

              <span className="flex text-orange-400">
                {[...Array(hotel.stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </span>

              <div className="relative w-fit">
                <p className="flex items-center gap-1 text-gray-700 group-hover:hidden transition">
                  <MdLocationOn className="text-md" />
                  {hotel.location}
                </p>

                <p className="hidden group-hover:flex font-semibold items-center gap-1 text-blue-800 underline cursor-pointer transition">
                  <MdOutlineGpsFixed className="text-md" />
                  View on map
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                {hotel.positives.map((pos, idx) => (
                  <p key={idx} className="flex items-center gap-1">
                    <BsCheckCircleFill className="text-xs text-green-600" />
                    {pos}
                  </p>
                ))}

                {hotel.negatives.map((neg, idx) => (
                  <p
                    key={idx}
                    className="flex items-center gap-1 text-red-500 col-span-2"
                  >
                    <BsXCircleFill className="text-xs" />
                    {neg}
                  </p>
                ))}
              </div>
            </div>

            {/* Price & Review Section */}
            <div className="py-4">
              <div className="md:col-span-1 border-t md:border-t-0 md:border-l border-dashed flex flex-col justify-between items-end text-right px-5 md:pr-4 h-full">
                {/* review section */}
                <div className="flex items-center gap-3 justify-end">
                  <div className="flex flex-col text-right">
                    <span className="text-md text-gray-700 font-semibold">
                      {hotel.reviews}
                    </span>
                    <span className="text-sm text-gray-600">
                      {hotel.reviewCount} Reviews
                    </span>
                  </div>

                  <span className="bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded">
                    {hotel.rating}
                  </span>
                </div>

                {/* price section */}
                <div className="mt-6 md:mt-16">
                  <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded mb-2">
                    {hotel.promoCode}
                  </span>

                  <div className="flex gap-3 items-center justify-end">
                    <p className="text-md text-gray-600 font-semibold line-through">
                      {hotel.oldPrice}
                    </p>
                    <p className="text-2xl font-bold">{hotel.newPrice}</p>
                  </div>

                  <p className="text-xs text-gray-500">
                    includes taxes and fees
                  </p>
                  <p className="text-xs text-gray-800">For 1 night</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
