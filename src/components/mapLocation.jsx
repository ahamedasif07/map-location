"use client";

import Image from "next/image";
import banerImage from "../../public/images/baner.jpg";

import { FaStar } from "react-icons/fa";
import { MdLocationOn, MdOutlineGpsFixed } from "react-icons/md";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

export default function HotelCard() {
  return (
    <div className="w-full max-w-4xl mx-auto border border-transparent group hover:border-green-500 transition rounded-xl overflow-hidden bg-white shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Image Section */}
        <div className="md:col-span-1">
          <div
            className="
            relative 
            h-52 md:h-full 
            w-full md:w-[230px] 
            rounded-t-lg md:rounded-l-lg md:rounded-tr-none 
            overflow-hidden
          "
          >
            <Image src={banerImage} alt="Hotel" fill className="object-cover" />
            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-8 bg-black/70 text-white text-xs px-2 py-1 rounded">
              See all
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="md:col-span-2 space-y-2 py-4 px-5">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            Hotel Manofa
          </h3>

          <span className="flex text-orange-400">
            <FaStar />
            <FaStar />
          </span>

          <div className="relative w-fit">
            <p className="flex items-center gap-1 text-gray-700 group-hover:hidden transition">
              <MdLocationOn className="text-md" />
              Amsterdam-Centrum · 0.60 km to city centre
            </p>

            <p className="hidden group-hover:flex font-semibold items-center gap-1 text-blue-800 underline cursor-pointer transition">
              <MdOutlineGpsFixed className="text-md" />
              View on map
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm mt-3">
            <p className="flex items-center gap-1">
              <BsCheckCircleFill className="text-xs text-green-600" />
              Clean Rooms
            </p>
            <p className="flex items-center gap-1">
              <BsCheckCircleFill className="text-xs text-green-600" />
              Good Value
            </p>
            <p className="flex items-center gap-1">
              <BsCheckCircleFill className="text-xs text-green-600" />
              Comfortable Beds
            </p>
            <p className="flex items-center gap-1">
              <BsCheckCircleFill className="text-xs text-green-600" />
              Friendly Staff
            </p>
            <p className="flex items-center gap-1 text-red-500 col-span-2">
              <BsXCircleFill className="text-xs" />
              Noisy At Night
            </p>
          </div>
        </div>

        {/* Price Section */}
        <div className="py-4">
          <div
            className="
            md:col-span-1 
            border-t md:border-t-0 
            md:border-l border-dashed 
            flex flex-col justify-between 
            items-end text-right 
            px-5 md:pr-4
          "
          >
            {/* review section */}
            <div className="flex items-center gap-3 justify-end">
              <div className="flex flex-col text-right">
                <span className="text-md text-gray-700 font-semibold">
                  Very Good
                </span>
                <span className="text-sm text-gray-600">3912 Reviews</span>
              </div>

              <span className="bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded">
                7.2
              </span>
            </div>

            <div className="mt-6 md:mt-16">
              <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded mb-2">
                WEGONEWYEAR · 6%
              </span>

              <div className="flex gap-3 items-center justify-end">
                <p className="text-md text-gray-600 font-semibold line-through">
                  US$127
                </p>
                <p className="text-2xl font-bold">US$85</p>
              </div>

              <p className="text-xs text-gray-500">includes taxes and fees</p>
              <p className="text-xs text-gray-800">For 1 night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
