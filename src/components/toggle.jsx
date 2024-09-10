import React, { useState } from "react";

const Toggle = ({ label = "Toggle" }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <label className="inline-flex cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={toggle}
          onChange={(e) => setToggle(e.target.checked)}
        />
        <div className="relative min-w-9 w-9 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
        <div className="flex flex-col ms-3">
          <p className="sm:text-sm text-xs font-normal text-black">{label}</p>
          <p className="font-normal text-theme-200 sm:text-xs text-[10px]">
            Toggle this if you what to remove the background of the image
          </p>
        </div>
      </label>
    </>
  );
};

export default Toggle;
