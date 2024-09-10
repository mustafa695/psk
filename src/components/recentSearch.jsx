import React, { useState } from "react";
import { ChevronDown } from "@constant/icons/icon";

const recentSeraches = [
  { id: 1, label: "Male in a tucked shirt" },
  { id: 2, label: "Female in untucked shirt" },
  { id: 3, label: "Male in suit" },
];

const RecentSearch = () => {
  const [showDetail, setShowDetail] = useState(null);
  return (
    <div className="mt-8">
      <h4 className="sm:text-sm text-xs font-normal text-black">Recent Searches</h4>
      <div className="flex items-center sm:gap-8 gap-4 mt-4 cursor-pointer flex-nowrap">
        {recentSeraches.map((item, index) => (
          <div
            className="flex items-center sm:gap-4 sm:py-2 sm:px-3"
            key={index}
            onClick={() => setShowDetail(item)}
          >
            <p className="text-[#6D7280] sm:text-xs text-[10px] font-medium">{item.label}</p>
            <ChevronDown />
          </div>
        ))}
      </div>
      {!!showDetail && (
        <div
          className="relative w-full max-w-[528px] sm:p-6 p-4 mt-2 rounded"
          style={{
            boxShadow: "0px 6px 12px 0px #0000001A",
          }}
        >
          <p className="sm:text-xs text-[10px] text-[#4F4F4F]">
            Create an image of a male model wearing a tucked-in, slim-fit white
            dress shirt. The shirt should have long sleeves, rolled up to the
            elbows, and be paired with navy blue chinos. The model should have a
            clean, modern look, standing in a casual pose with one hand in his
            pocket. The background should be simple, like a plain white wall, to
            keep the focus on the outfit.
          </p>
          <div className="flex justify-end mt-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowDetail(null)}
                className="outline-none bg-theme-100 text-white px-4 py-2 rounded font-medium text-xs"
              >
                Okay
              </button>
              <button
                type="button"
                onClick={() => setShowDetail(null)}
                className="outline-none bg-[#F5F5F5] text-theme-100 px-4 py-2 rounded font-medium text-xs"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentSearch;
