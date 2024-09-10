import React from "react";
import { Images } from "@constant";

const Loader = () => {
  return (
    <div className="bg-black/60 fixed inset-0 z-[999] flex items-center justify-center backdrop-blur-sm overflow-hidden">
      <img
        src={Images.LoaderIcon}
        alt="logo"
        className="size-[150px] object-contain grayscale loader"
      />
    </div>
  );
};

export default Loader;
