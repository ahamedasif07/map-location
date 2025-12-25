import React from "react";

const topBanner = () => {
  return (
    <div>
      {/* Top Banner */}
      <div className="flex items-center justify-between border border-green-500 rounded-xl m-4 p-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🎄</div>
          <div>
            <p className="text-green-600 font-semibold text-lg">
              Sign In, save up to 50%!
            </p>
            <p className="text-sm text-gray-600">
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

export default topBanner;
