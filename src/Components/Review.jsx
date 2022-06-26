import Avatar from "../Assets/Avatar.svg";
import PaginationComponent from "./Pagination";
import Stars from "./Stars";
const Review = () => {
  return (
    <div className="w-[1151px] h-[520px] mx-auto bg-[#FFFFFF] relative">
      <div className="absolute top-[24px] left-[50px] w-[235px] h-[33px] font-roboto font-bold text-[28px] leading-[32.81px]">
        <p>Customer Reviews</p>
      </div>
      <div className="absolute top-[78px] left-[50px] ">
        <div className="w-[1051px] h-[130px] flex border-b-2 border-[#D8D8D8]">
          <img
            src={Avatar}
            alt=""
            className="w-[56px] h-[56.48px] rounded-full
                ml-[13px] mt-[14.12px] mr-[27px]"
          />
          <div className="mt-[-5px]">
            <p className="font-roboto font-bold text-[18px] mb-[3px] mt-[7px] ">
              Samantha Smith
            </p>
            <Stars />
            <p className="font-normal font-roboto text-[14px] mt-[5px] w-[947px] h-[28.37px] leading-[16.41px]">
              Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae
              sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus,
              at porttitor dui iaculis id. Curabitur imperdiet ultrices
              fermentum.
            </p>
            <p className="w-[93px] h-[14px]font-roboto font-bold text-[#5A5A5A] text-[12px] ">
              27 May, 2018
            </p>
          </div>
        </div>
        <div className="w-[1051px] h-[130px] flex border-b-2 border-[#D8D8D8]">
          <img
            src={Avatar}
            alt=""
            className="w-[56px] h-[56.48px] rounded-full
                ml-[13px] mt-[14.12px] mr-[27px]"
          />
          <div className="mt-[-5px]">
            <p className="font-roboto font-bold text-[18px] mb-[3px] mt-[7px]">
              Samantha Smith
            </p>
            <Stars />
            <p className="font-normal font-roboto text-[14px] mt-[5px] w-[947px] h-[28.37px] leading-[16.41px]">
              Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae
              sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus,
              at porttitor dui iaculis id. Curabitur imperdiet ultrices
              fermentum.
            </p>
            <p className="w-[93px] h-[14px]font-roboto font-bold text-[#5A5A5A] text-[12px]">
              27 May, 2018
            </p>
          </div>
        </div>
        <div className="w-[1051px] h-[130px] flex border-b-2 border-[#D8D8D8]">
          <img
            src={Avatar}
            alt=""
            className="w-[56px] h-[56.48px] rounded-full
                ml-[13px] mt-[14.12px] mr-[27px]"
          />
          <div>
            <p className="font-roboto font-bold text-[18px] mb-[3px] mt-[3px]">
              Samantha Smith
            </p>
            <Stars />
            <p className="font-normal font-roboto text-[14px] mt-[5px] w-[947px] h-[28.37px] leading-[16.41px]">
              Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae
              sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus,
              at porttitor dui iaculis id. Curabitur imperdiet ultrices
              fermentum.
            </p>
            <p className="w-[93px] h-[14px]font-roboto font-bold text-[#5A5A5A] text-[12px]">
              27 May, 2018
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[469px] left-[460px] mt-[15px]">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default Review;
