import React from "react";

const AddressInformation = () => {
  return (
    <div className="pt-[22px] flex flex-col flex-1 px-[32px] pb-[82px] bg-[#FFF] rounded-[6px] gap-[24px]">
      <div className="flex items-start gap-[10px]">
        <h2 className="text-[#161616] font-euclidCircularA text-xs font-light">
          ADDRESS INFORMATION
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center self-stretch h-[186px]">
        <div className="flex flex-col justify-between items-start self-stretch">
          <div>
            <h2 className="text-[#161616] font-euclidCircularA text-base font-medium">
              25 Abule-Oja road, Akoka, Yaba
            </h2>
            <p className="mt-[4px] text-[#667085] font-euclidCircularA text-xs font-normal">
              CURRENT ADDRESS
            </p>
          </div>

          <div>
            <h2 className="text-[#161616] font-euclidCircularA text-base font-medium">
              Somolu
            </h2>
            <p className="mt-[4px] text-[#667085] font-euclidCircularA text-xs font-normal">
              LGA
            </p>
          </div>

          <div>
            <div className="flex gap-[4px] items-center cursor-pointer">
              <h2 className="text-[#027A48] font-euclidCircularA text-sm font-medium">
                View Map URL
              </h2>

              <div className="w-[20px] h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_6305_73)">
                    <path
                      d="M8.33398 10.0007C8.33398 10.4427 8.50958 10.8666 8.82214 11.1792C9.1347 11.4917 9.55862 11.6673 10.0007 11.6673C10.4427 11.6673 10.8666 11.4917 11.1792 11.1792C11.4917 10.8666 11.6673 10.4427 11.6673 10.0007C11.6673 9.55862 11.4917 9.1347 11.1792 8.82214C10.8666 8.50958 10.4427 8.33398 10.0007 8.33398C9.55862 8.33398 9.1347 8.50958 8.82214 8.82214C8.50958 9.1347 8.33398 9.55862 8.33398 10.0007Z"
                      stroke="#027A48"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 10C15.5 13.3333 13 15 10 15C7 15 4.5 13.3333 2.5 10C4.5 6.66667 7 5 10 5C13 5 15.5 6.66667 17.5 10Z"
                      stroke="#027A48"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6305_73">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <p className="mt-[4px] text-[#667085] font-euclidCircularA text-xs font-normal">
              MAP URL
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col justify-between items-start self-stretch">
          <div>
            <h2 className="text-[#161616] font-euclidCircularA text-base font-medium">
              Lagos
            </h2>
            <p className="mt-[4px] text-[#667085] font-euclidCircularA text-xs font-normal">
              STATE
            </p>
          </div>

          <div>
            <h2 className="text-[#161616] font-euclidCircularA text-base font-medium">
              University of Lagos
            </h2>
            <p className="mt-[4px] text-[#667085] font-euclidCircularA text-xs font-normal">
              NEARBY LANDMARK
            </p>
          </div>

          <div>
            <div className="flex gap-[4px] items-center cursor-pointer">
              <h2 className="text-[#027A48] font-euclidCircularA text-sm font-medium">
                View Electricity Bill
              </h2>

              <div className="w-[20px] h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_6305_73)">
                    <path
                      d="M8.33398 10.0007C8.33398 10.4427 8.50958 10.8666 8.82214 11.1792C9.1347 11.4917 9.55862 11.6673 10.0007 11.6673C10.4427 11.6673 10.8666 11.4917 11.1792 11.1792C11.4917 10.8666 11.6673 10.4427 11.6673 10.0007C11.6673 9.55862 11.4917 9.1347 11.1792 8.82214C10.8666 8.50958 10.4427 8.33398 10.0007 8.33398C9.55862 8.33398 9.1347 8.50958 8.82214 8.82214C8.50958 9.1347 8.33398 9.55862 8.33398 10.0007Z"
                      stroke="#027A48"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 10C15.5 13.3333 13 15 10 15C7 15 4.5 13.3333 2.5 10C4.5 6.66667 7 5 10 5C13 5 15.5 6.66667 17.5 10Z"
                      stroke="#027A48"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6305_73">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <p className="mt-[4px] text-[#667085] font-euclidCircularA text-xs font-normal">
              ELECTRICITY BILL URL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressInformation;
