import { useSelector } from "react-redux";

import { selectSingleProductReview } from "../redux/product/selector";
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import StarRatings from "react-star-ratings";

const Review = () => {
  const reviews = useSelector(selectSingleProductReview);
  const [first, setFirst] = useState(0);
  const [limit, setLimit] = useState(3);
  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);
  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];
  const Next = () => {
    setNum(++num);
  };
  const Back = () => {
    num > 1 && setNum(--num);
  };
  // console.log(first)
  // console.log(limit)
  return (
    <div className="w-[1151px] h-[520px] mx-auto bg-[#FFFFFF] relative">
      <div className="absolute top-[24px] left-[50px] w-[235px] h-[33px] font-roboto font-bold text-[28px] leading-[32.81px]">
        <p>Customer Reviews</p>
      </div>
      <div className="absolute top-[78px] left-[50px] ">
        {reviews.slice(first, limit).map((review) => (
          <div className="w-[1051px] h-[130px] flex border-b-2 border-[#D8D8D8]">
            <img
              src={review.userReview.avatar}
              alt=""
              className="w-[56px] h-[56.48px] rounded-full
                ml-[13px] mt-[14.12px] mr-[27px]"
            />
            <div className="mt-[-5px]">
              <p className="font-roboto font-bold text-[18px] mb-[3px] mt-[7px] ">
                {review.userReview.username}
              </p>
              <StarRatings
                rating={review.rating}
                starHoverColor="#FFD333"
                starRatedColor="#FFD333"
                starDimension="20px"
                starSpacing="0"
              />
              <p className="font-normal font-roboto text-[18px] mt-[15px] w-[947px] h-[28.37px] leading-[16.41px]">
                {review.content}
              </p>
              <p className="w-[93px] h-[14px]font-roboto font-bold text-[#5A5A5A] text-[12px] mt-[-18px] ">
                {review.createdAt.slice(0, 10).split("-").reverse().join("/")}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-[469px] left-[460px] mt-[15px]">
        <div className="flex w-[230px] h-[32px] ">
          <button
            onClick={Back}
            className={`w-[32px] h-[32px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px] flex justify-center align-middle
                hover:bg-[#919EAB] hover:text-[#FFD333]
                    `}
          >
            <RiArrowLeftSLine size={20} className="my-auto" />
          </button>
          {pages.map((pg, i) => (
            <button
              key={i}
              onClick={() => {
                setCur(pg.page)
                
                if(pg.page > 1) {
                  setFirst((2 * (pg.page - 1)) + 1)
                setLimit((3 * pg.page) - 1)
                }
                else if(pg.page === 1) {
                  setFirst(0)
                  setLimit(3)
                }
                
                }}
              className={`w-[32px] h-[32px] ml-[8px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px] 
                ${cur === pg.page && " bg-yellow-400"}`}
            >
              {pg.page}
            </button>
          ))}
          <button
            onClick={Next}
            className="w-[32px] h-[32px] ml-[8px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px]  hover:bg-[#919EAB] hover:text-[#FFD333] flex justify-center align-middle"
          >
            <RiArrowRightSLine size={20} className="my-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
