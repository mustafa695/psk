import React, { useState } from "react";
import { Images } from "@constant";
import { HumbergIcon } from "@constant/icons/icon";

const Header = () => {
  const Menu = ["Create Photos", "History", "Sign In"];
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="relative">
      <div className="bg-white p-8 top-0 left-0 right-0 w-full flex items-center justify-between">
        {/* === Desktop Logo ====  */}
        <img
          src={Images.Logo}
          className="w-[218px] h-[46px] object-contain sm:block hidden"
          alt="logo"
        />
        {/* === Mobile Logo ===  */}
        <img
          src={Images.MobileLogo}
          className="size-9 object-contain sm:hidden block"
          alt="logo"
        />

        {/* ===== Humberg Menu ====  */}
        <button
          className="outline-none z-50 sm:hidden block"
          onClick={() => setOpenMobileMenu(true)}
        >
          <HumbergIcon />
        </button>
      </div>
      <div className="fixed -top-20 -left-[85px]f">
        <img
          src={Images.Ellipse1}
          className="size-[600px] object-cover"
          alt="ellipse"
        />
      </div>

      {/* ========== Mobile Menu =========  */}
      <div
        className={`left-0 top-0 bottom-0 bg-black/25 w-full h-full z-[999] sm:hidden fixed transition-all ease-in-out duration-200 ${
          openMobileMenu ? "visible" : "invisible w-0"
        }`}
      >
        <div
          className={`bg-white w-4/6 px-6 pb-4 pt-12 h-full ${
            !openMobileMenu ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
        >
          <img
            src={Images.MobileLogo}
            className="size-9 object-contain sm:hidden block"
            alt="logo"
          />
          <div className="pt-12 px-2">
            {Menu.map((item, index) => (
              <a
                href="#"
                className="block pb-7 text-sm tetx-[#444444]"
                key={index}
                onClick={() => setOpenMobileMenu(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
