import React from "react";

const VerificationStatus = () => {
  return (
    <div className="pt-[22px] px-[32px] pb-[40px] flex flex-col gap-[4px] rounded-[6px] bg-[#FFF] flex-1">
      <div className="flex items-center w-full  justify-between">
        <h2 className="text-[#161616] font-euclidCircularA text-xs font-light">
          VERIFICATION STATUS
        </h2>
        <div className="flex w-[92px] items-start">
          <div className="flex py-[12px] px-[8px] justify-center items-center rounded-[8px] bg-[#ECFDF3]">
            <p className="text-[#027A48] text-center font-euclidCircularA text-base font-medium">
              Verified
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <div className="flex px-[24px] py-[12px] justify-between items-center self-stretch border-b border-[#EAECF0]">
          <h2 className="text-[#161616] font-euclidCircularA text-base">
            Valid address
          </h2>
          <div className="w-[18px] h-[15px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.1241 0.891887L5.38111 10.7591L2.53032 7.86037C2.00517 7.38914 1.17994 7.36058 0.579771 7.76041C-0.0053927 8.17452 -0.170439 8.90279 0.189661 9.48825L3.5656 14.7146C3.8957 15.2001 4.46586 15.5 5.11104 15.5C5.72621 15.5 6.31137 15.2001 6.64146 14.7146C7.18161 14.0435 17.4895 2.34841 17.4895 2.34841C18.8399 1.03468 17.2044 -0.12197 16.1241 0.877607V0.891887Z"
                fill="#00AF66"
              />
            </svg>
          </div>
        </div>

        <div className="flex px-[24px] py-[12px] justify-between items-center self-stretch border-b border-[#EAECF0]">
          <h2 className="text-[#161616] font-euclidCircularA text-base">
            Address building
          </h2>
          <div className="w-[18px] h-[15px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.1241 0.891887L5.38111 10.7591L2.53032 7.86037C2.00517 7.38914 1.17994 7.36058 0.579771 7.76041C-0.0053927 8.17452 -0.170439 8.90279 0.189661 9.48825L3.5656 14.7146C3.8957 15.2001 4.46586 15.5 5.11104 15.5C5.72621 15.5 6.31137 15.2001 6.64146 14.7146C7.18161 14.0435 17.4895 2.34841 17.4895 2.34841C18.8399 1.03468 17.2044 -0.12197 16.1241 0.877607V0.891887Z"
                fill="#00AF66"
              />
            </svg>
          </div>
        </div>

        <div className="flex px-[24px] py-[12px] justify-between items-center self-stretch border-b border-[#EAECF0]">
          <h2 className="text-[#161616] font-euclidCircularA text-base">
            Customer resides at the declared address
          </h2>
          <div className="w-[18px] h-[15px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.1241 0.891887L5.38111 10.7591L2.53032 7.86037C2.00517 7.38914 1.17994 7.36058 0.579771 7.76041C-0.0053927 8.17452 -0.170439 8.90279 0.189661 9.48825L3.5656 14.7146C3.8957 15.2001 4.46586 15.5 5.11104 15.5C5.72621 15.5 6.31137 15.2001 6.64146 14.7146C7.18161 14.0435 17.4895 2.34841 17.4895 2.34841C18.8399 1.03468 17.2044 -0.12197 16.1241 0.877607V0.891887Z"
                fill="#00AF66"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationStatus;
