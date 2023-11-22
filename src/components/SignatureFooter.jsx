import React from "react";
import NewLogo1 from "../assets/New-logo 1.png";
import NewLogo2 from "../assets/New-logo 2.png";

const SignatureFooter = () => {
  return (
    <div className="mt-[16px] px-4  md:px-8 pt-[22px] pb-[32px] flex-1 rounded-[6px] bg-[#FFF] flex flex-col">
      <h2 className="text-[#161616] font-euclidCircularA text-xs font-light">
        CERTIFICATION
      </h2>
      <div className="flex flex-col md:flex-row items-center  gap-8 lg:gap-[123px]">
        <div className="flex flex-wrap flex-1">
          <p className="text-[#161616] text-justify flex-wrap font-euclidCircularA text-base uppercase">
            I <span className="bg-black w-[268px] h-[1px] inline-block" />{" "}
            hereby certify that the information presented for the above named
            customer for address verification is true and accurate.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row   items-center gap-4 md:gap-[32px]">
          <div className="cursor-pointer flex flex-col items-center justify-center">
            {/* Signature Line */}
            <div className="w-[268px] h-[1px] bg-black" />
            <h2 className="mt-[8px] text-[#667085] font-euclidCircularA text-sm">
              SIGNATURE & DATE
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img src={NewLogo1} alt="Logo 1" className="w-[60px] h-[60px]" />
            <img src={NewLogo2} alt="Logo 2" className="mt-[4px] w-[94px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureFooter;
