import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { selectImage, selectSingleProduct } from "../redux/product/selector";
import StarRatings from "react-star-ratings";
import NavTabs from "../Components/NavTabs";
import Rating from "../Components/Rating";
import ProductDetailBar from "../Components/ProductDetailBar";
import Review from "../Components/Review";
import WriteReview from "../Components/WriteReview";
import RelatedProducts from "../Components/RelatedProduct";

function ProductDetail() {
  const [rating, setRating] = useState(0);
  const product = useSelector(selectSingleProduct);
  console.log(product);
  const image = useSelector(selectImage);
  console.log(image);
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  return (
    <div>
      <div>
        <NavTabs />
        <div className="w-[1439px] h-[612px] relative flex bg-[#FFFDFD] mx-auto">
          <div className="absolute left-[143px] top-[12px] flex flex-col">
            <div>
              <img
                src={image.url}
                className="w-[474px] h-[474px] rounded-[5px]"
              />
            </div>
            <div className="flex w-[474px] h-[87px] mt-[21px]">
              <img
                src={image.url}
                className="w-[87px] h-[87px] rounded-[5px]"
              />
              <img
                src={image.url}
                className="w-[87px] h-[87px] ml-[11px] rounded-[5px]"
              />
              <img
                src={image.url}
                className="w-[87px] h-[87px] ml-[8px] rounded-[5px]"
              />
              <img
                src={image.url}
                className="w-[87px] h-[87px] ml-[10px] rounded-[5px]"
              />
              <img
                src={image.url}
                className="w-[87px] h-[87px] ml-[10px] rounded-[5px]"
              />
            </div>
          </div>
          <div className="absolute left-[627px] top-[12px] w-[668px] h-[580px] bg-[#FFFEFE]">
            <div className="flex flex-col">
              <p className="w-[608px] h-[47px] font-roboto font-bold text-[40px] ml-[21px] mt-[30px]">
                {product.name}
              </p>
              <div className="ml-[5px] mt-[-21px]">
                <Rating />
              </div>
              <p
                className="w-[625px] h-[80px] font-roboto text-[16px] 
              leading-[18.75px] ml-[21px] mt-[26px] border-b border-solid border-[#737070]"
              >
                {product.description}
              </p>
              <div className="h-[280px] w-[625px] ml-[21px] flex flex-col">
                <div className=" flex">
                  <p className="text-[#5A5A5A] font-roboto text-[14px] leading-[16.41px]">
                    Availability:{" "}
                    <span className="text-[#04941B]">In Stock</span>
                  </p>
                  <p className="text-[#5A5A5A] font-roboto text-[14px] leading-[16.41px] ml-[49px]">
                    Brand: {product.brand}
                  </p>
                  <p className="text-[#5A5A5A] font-roboto text-[14px] leading-[16.41px] ml-[33px]">
                    SKU: 83690/32
                  </p>
                </div>
                <div className="flex h-[60px] ">
                  <p className="w-[120px] h-[53.44px] font-roboto font-bold text-[32px]">
                    $ {product.price}
                  </p>
                  <div
                    className="w-[76px] h-[30px] mt-[8px] rounded-[5px] bg-[#FFD333] 
                  border border-solid border-[#BABABA66] ml-[22px] text-[#C90404] text-[16px] leading-[18.75px] font-roboto font-bold"
                  >
                    <p className="mt-[5.83px] mb-[6.67px] text-center">
                      50% Off
                    </p>
                  </div>
                </div>
                <div className="w-[93px] h-[22.06px] font-roboto font-bold text-[16px] text-[#5A5A5A] leading-[18.75px]">
                  <p>Select Color:</p>
                </div>
                <div className="flex mt-[11.06px]">
                  <div className="w-[27.3px] h-[27.3px] hover:border-2 hover:border-[#6d9ee2] rounded-full">
                    <div className="w-[27.3px] h-[27.3px] hover:w-[19px] hover:h-[19px] hover:mx-auto hover:mt-[2.46px] rounded-full bg-[#006CFF]"></div>
                  </div>

                  <div className="w-[27.3px] h-[27.3px]  ml-[25px] hover:border-2 hover:border-[#eb6b67] rounded-full">
                    <div className="w-[27.3px] h-[27.3px] hover:w-[19px] hover:h-[19px] hover:mx-[2.21px] hover:mt-[2.46px] rounded-full bg-[#FC3E39]"></div>
                  </div>
                  <div className="w-[27.3px] h-[27.3px] ml-[25px] hover:border-2 hover:border-[#4e4b4b] rounded-full">
                    <div className="w-[27.3px] h-[27.3px]  hover:w-[19px] hover:h-[19px] hover:mx-auto hover:mt-[2.46px] rounded-full bg-[#171717]"></div>
                  </div>
                  <div className="w-[27.3px] h-[27.3px] ml-[25px] hover:border-2 hover:border-[#f3ee4e] rounded-full">
                    <div className="w-[27.3px] h-[27.3px]  hover:w-[19px] hover:h-[19px] hover:mx-auto hover:mt-[2.46px] rounded-full bg-[#FFF600]"></div>
                  </div>
                </div>
                <div className="w-[66px] h-[21.51px] mt-[12.69px] font-roboto font-bold text-[16px] leading-[18.75px] text-[#5A5A5A]">
                  <p>Quantity:</p>
                </div>
                <div className="mt-[11.45px] flex h-[45px]">
                  <div className="w-[162.37px] h-[42.08px] bg-[#E2E4E5] border border-solid border-[#959595] rounded-[5px] flex">
                    <button className="flex-1 text-[#33A0FF] text-[24px] ">
                      -
                    </button>
                    <p className="flex-1 font-roboto text-[16px] text-[#959595] leading-[19.49px] font-light text-center py-[12px]">
                      1
                    </p>
                    <button className="flex-1 text-[#33A0FF] text-[24px]">
                      +
                    </button>
                  </div>
                  <button className="w-[164px] flex h-[42px] bg-[#FFD333] rounded-[5px] ml-[18.63px]">
                    <BsCartPlus className="ml-[29px] w-[15px] h-[15px] mt-[13px] text-[#212529]" />
                    <p className="w-[80px] h-[20px] font-roboto font-bold text-[16px] ml-[7px] mt-[8px]">
                      Add to cart
                    </p>
                  </button>
                </div>
                <div className="mt-[11.92px] h-[25px] font-roboto font-bold text-[16px] text-[#5A5A5A] leading-[18.75px] ">
                  <p>Rate:</p>
                </div>
                <StarRatings
                  rating={rating}
                  changeRating={changeRating}
                  starHoverColor="#FFD333"
                  starRatedColor="#FFD333"
                  starDimension="20px"
                  starSpacing="0"
                />
              </div>
            </div>
          </div>
        </div>

        <ProductDetailBar />
        <Review />
        <WriteReview />
        <RelatedProducts />
      </div>
    </div>
  );
}

export default ProductDetail;
