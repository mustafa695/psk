import React from "react";
import { UploadFileIcon } from "@constant/icons/icon";

const UploadGarment = ({ handleFile }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="sm:text-xl text-sm text-black mt-12 mb-1">Upload Garment</p>
      <div className="relative border border-dashed border-[#00000040] rounded-[10px] px-8 py-5 flex sm:flex-row flex-col gap-4 justify-between items-center">
        <div className="flex sm:flex-row flex-col items-center sm:gap-6 gap-4">
          <UploadFileIcon />
          <div className="sm:text-left text-center">
            <p className="text-black sm:text-sm text-xs">
              Select a file or drag and drop here
            </p>
            <p className="text-black/40 sm:text-xs text-[10px]">
              JPG or PNG, file size no more than 20MB
            </p>
          </div>
        </div>
        <button
          type="button"
          className="outline-none border border-theme-100 uppercase sm:text-sm text-xs text-theme-100 sm:py-3 py-2 sm:px-4 px-3 rounded-[5px]"
        >
          Select File
        </button>

        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="absolute inset-0 w-full h-full z-40 opacity-0"
        />
      </div>
    </div>
  );
};

export default UploadGarment;
