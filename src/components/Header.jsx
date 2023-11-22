import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="mt-2 md:mt-4 ">
      <div className=" px-4 md:px-8 flex gap-[24px] items-center py-4 rounded-[8px] bg-[#FFF]">
        <div className="flex w-[62px] h-[62px]  flex-col justify-center items-center flex-shrink-0 rounded-full bg-[#0F595C]">
          <img src={Logo} alt="logo" className="object-contain" />
        </div>

        <h1 className="text-black text-center font-euclidCircularA text-[28px] font-medium leading-[39px]">
          Digital Address Verification Report
        </h1>
      </div>
    </div>
  );
};

export default Header;
