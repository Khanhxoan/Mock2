import React from "react";

const ProfileBanner = ({noOfElement, setNoOfElement}) => {
    const handleShowMore = () => {
        setNoOfElement(noOfElement + noOfElement)
    }
  return (
    <div className="h-[43px] w-[1151px] flex items-center justify-between px-[28px] mt-[19px]">
      <p className="text-[22px] font-bold leading-[25.3px] mb-0">Bestsellers</p>
      <button 
      onClick={handleShowMore}
      className="font-bold text-[16px] leading-[18.4px] w-[131px] h-[31px] rounded-[56px] border-solid border-[#F0E36A] border-[1px]">
        Show more...
      </button>
    </div>
  );
};

export default ProfileBanner;
