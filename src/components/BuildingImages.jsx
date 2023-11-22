import React from "react";
import BuildingAsset1 from "../assets/buildingasset1.png";
import BuildingAsset2 from "../assets/buildingasset2.png";

const BuildingImages = () => {
  return (
    <div className="flex flex-1 py-[20px] px-[32px]  h-[331px] rounded-[6px] bg-[#FFF]">
      <div className="flex justify-between gap-[22px] items-center">
        <div>
          <h2 className="text-[#161616] font-euclidCircularA text-xs font-light">
            BUILDING IMAGE
          </h2>
          <img
            src={BuildingAsset1}
            className="mt-[19px] rounded-[3.615px] flex-1"
          />
        </div>

        <div>
          <h2 className="text-[#161616] font-euclidCircularA text-xs font-light">
            NEARBY LANDMARK
          </h2>
          <img
            src={BuildingAsset2}
            className="mt-[19px] rounded-[3.615px] flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default BuildingImages;
