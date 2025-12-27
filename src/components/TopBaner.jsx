import React from "react";

const TopBanner = () => {
  return (
    <div>
      {/* Top Banner */}
      <div className="flex items-center justify-between    border border-green-500 rounded-xl m-4 py-3 px-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🎄</div>
          <div>
            <p className=" font-semibold text-[24px]">
              <span className="text-green-600"> Sign In,</span> save up to 50%!
            </p>
            <p className="text-md text-gray-800 ">
              Enjoy exclusive rates in Amsterdam just for Wego members.
            </p>
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold">
          Login
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
