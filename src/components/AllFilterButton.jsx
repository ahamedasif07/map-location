import {
  FaDollarSign,
  FaStar,
  FaMapMarkerAlt,
  FaHotel,
  FaHome,
  FaThumbsUp,
  FaTag,
} from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";

const sidebarMenu = [
  {
    label: "Price Range (USD)",
    icon: <FaDollarSign />,
  },
  {
    label: "Review Score",
    icon: <MdRateReview />,
  },
  {
    label: "Star Rating",
    icon: <FaStar />,
  },
  {
    label: "Hotel Facilities",
    icon: <FaHotel />,
  },
  {
    label: "Districts / Areas",
    icon: <FaMapMarkerAlt />,
  },
  {
    label: "Accommodation Type",
    icon: <FaHome />,
  },
  {
    label: "Highly Rated",
    icon: <FaThumbsUp />,
  },
  {
    label: "Rate Type",
    icon: <FaTag />,
  },
  {
    label: "Chains",
    icon: <RiHotelLine />,
  },
  {
    label: "Brand",
    icon: <SlBadge />,
  },
];
const AllFiltersDropdown = () => {
  return (
    <div className="w-[90vw] md:w-[900px] border-2 border-red-600 bg-white max-h-[80vh] overflow-y-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
        {/* LEFT FILTER MENU */}
        <div className="space-y-6 border-r pr-4 hidden md:block">
          {sidebarMenu.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 text-left text-md font-medium text-gray-700 hover:text-black transition"
            >
              <span className="text-gray-500">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-8  ">
          {/* PRICE RANGE */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Price Range (USD)</h3>

            {/* Histogram */}
            <div className="flex items-end gap-1 h-20 mb-4">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gray-200 rounded"
                  style={{ height: `${20 + i * 4}px` }}
                />
              ))}
            </div>

            {/* Slider fake */}
            <div className="relative h-1 bg-gray-200 rounded mb-6">
              <div className="absolute left-1/4 right-1/6 h-1 bg-green-500 rounded" />
              <div className="absolute left-1/4 -top-2 w-4 h-4 bg-white border-2 border-green-500 rounded-full" />
              <div className="absolute right-1/6 -top-2 w-4 h-4 bg-white border-2 border-green-500 rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Min"
                className="border rounded-lg px-3 py-2 text-sm"
              />
              <input
                type="number"
                placeholder="Max"
                className="border rounded-lg px-3 py-2 text-sm"
              />
            </div>

            <div className="flex gap-6 mt-4 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="priceType" defaultChecked />
                Total Stay
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="priceType" />
                Price Per Night
              </label>
            </div>
          </div>

          {/* REVIEW SCORE */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Review Score</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                "Excellent • 9.1+",
                "Very Good • 8.1+",
                "Good • 7.1+",
                "Pleasant • 6.1+",
                "Fair • 5.1+",
                "Poor • 5.0 & below",
              ].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex justify-between items-center border-t pt-4">
            <button className="text-sm font-medium text-gray-600 hover:underline">
              Reset All Filters
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-green-700">
              Show Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllFiltersDropdown;
