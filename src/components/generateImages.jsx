import React from "react";

const GenerateImages = ({ images, handleRegenerateImage }) => {
  return (
    <div className="relative z-10 2xl:w-3/5 max-w-[614px] w-4/5 mx-auto">
      <div className="flex flex-col items-center card-image sm:py-0 sm:px-0 px-10 py-8 sm:bg-transparent bg-white">
        <div className="flex gap-3 sm:border-0 border border-[#E3E3E3] sm:w-auto w-full">
          <div className="flex-col gap-2 sm:flex hidden">
            {Array.from({ length: 4 }).map((_item, index) => (
              <img
                key={index}
                src={URL.createObjectURL(images)}
                alt="thumb-image"
                className={`w-[60px] h-[75px] ${index !== 0 && "opacity-40"}`}
              />
            ))}
          </div>
          <div className="flex-1">
            <div className="">
              <img
                src={URL.createObjectURL(images)}
                alt="image"
                className="w-full sm:h-[672px] h-[258px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-2.5 mt-6 mb-20">
          <button
            type="button"
            onClick={handleRegenerateImage}
            className="min-w-[220px] outline-none bg-theme-100 text-white px-5 py-3 rounded sm:text-lg text-sm"
          >
            Download Image
          </button>
          <button
            type="button"
            onClick={handleRegenerateImage}
            className="min-w-[220px] outline-none border border-theme-100 text-theme-100 px-5 py-2.5 rounded sm:text-lg text-sm"
          >
            Regenerate
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateImages;
