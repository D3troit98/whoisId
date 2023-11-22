import React from "react";
import IdImage from "../assets/idImage.png";

const CustomerInformation = () => {
  return (
    <div className="pt-[22px] px-4 sm:px-8  pb-[25px] flex flex-col gap-[24px] rounded-[6px] bg-[#FFF] flex-1 items-center sm:items-start">
      <h3 className="text-[#161616] font-euclidCircularA text-xs font-light ">
        CUSTOMER INFORMATION
      </h3>

      <div className="flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-[71px]">
        <div className="flex flex-col items-center ">
          <img
            src={IdImage}
            alt="your ID"
            className="w-32 h-32 sm:w-[139px] sm:h-[139px] object-contain"
          />
          <h2 className="mt-[16px] text-[#161616] font-euclidCircularA text-sm font-medium">
            12345H
          </h2>
          <p className="mt-[2px] text-[#667085] font-euclidCircularA text-xs font-normal">
            CUSTOMER NUMBER
          </p>
        </div>

        <div className="flex flex-col justify-start items-start gap-4 sm:gap-[32px] self-stretch">
          <div className="flex flex-col">
            <h2 className="text-[#161616] font-euclidCircularA text-base font-medium">
              Victor
            </h2>
            <p className="mt-[4px] text-[#667085] font-euclidCircularA text-xs">
              FIRST NAME
            </p>
          </div>

          <div>
            <h2 className="text-[#161616] font-euclidCircularA text-base font-medium">
              Adebowale
            </h2>
            <p className="mt-[4px] text-[#667085] font-euclidCircularA text-xs">
              LAST NAME
            </p>
          </div>

          <div>
            <h2 className="text-[#161616] font-euclidCircularA text-base font-medium">
              01/04/2023 09:22am
            </h2>
            <p className="mt-[4px] text-[#667085] font-euclidCircularA text-xs">
              VERIFICATION TIME STAMP
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-4 sm:gap-[32px] self-stretch">
          <div className="flex flex-col">
            <h2 className="text-[#161616] font-euclidCircularA text-base font-medium">
              Nigeria
            </h2>
            <p className="mt-[4px] text-[#667085] font-euclidCircularA text-xs">
              COUNTRY
            </p>
          </div>

          <div>
            <h2 className="text-[#161616] font-euclidCircularA text-base font-medium">
              0902 234 5678
            </h2>
            <p className="mt-[4px] text-[#667085] font-euclidCircularA text-xs">
              PHONE NUMBER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInformation;
