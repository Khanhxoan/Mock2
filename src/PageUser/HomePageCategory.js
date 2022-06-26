import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getAllProducts,
  getSingleProduct,
} from "../redux/product/action";
import StarRatings from "react-star-ratings";
import PaginationHome from "./PaginationHomepage";
import NavTabs from "../Components/NavTabs";
import { selectAllProducts } from "../redux/product/selector";

function Productpage() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(selectAllProducts);
  useEffect(() => {
    console.log(products);
  })

  const handleClick = async (id) => {
    await getSingleProduct(dispatch, id);
    navigate("/productdetail");
  };

  return (
    <div>
      <NavTabs />
      <div className="w-[1350px] grid grid-cols-4 gap-[0px] my-[20px] mx-[60px]">
        {products?.map((product) => (
          <div
            key={product.id}
            className="w-[305px] h-[395px]  border border-solid border-[#B4B1B1] rounded-[5px] bg-[#FFFFFF]"
          >
            <img
              src={product.images[0].url}
              alt=""
              className="w-[254px] h-[200px] mt-[8px] mx-auto rounded-[5px] shadow-image cursor-pointer"
              onClick={() => handleClick(product.id)}
            />
            <div className="ml-[25px] mr-[26px] mt-[15px]">
              <div className="w-[254x] h-[37px] mr-[68px]">
                <p className="font-sans text-[29px] w-[254px] h-[37px] leading-[36.8px] font-bold hover:underline hover:underline-offset-1 ">
                  {product.name}
                </p>
              </div>
              <div className="w-[212px] h-[28px] mr-[68px] mb-[5px]">
                <p className="font-sans text-[18px] font-semibold">
                  ID: {product.id}
                </p>
              </div>
              <div className="flex h-[18px] mb-[10px]">
                <StarRatings rating={parseInt(product.rating)} starRatedColor="#FFD333" starDimension="20px" starSpacing="0" />
                <p className="text-[#D70000] ml-[69px] mt-[-3px] font-sans text-[16px] font-semibold">
                  50% Off
                </p>
              </div>

              <div className="flex h-[28px] mb-[10px]">
                <p className="font-sans text-[24px] font-semibold">
                  $ {product.price}
                </p>
                <BsCartPlus className="ml-[118px] w-[31px] h-[28px] mt-[3px] text-[#212529] cursor-pointer" />
              </div>

              <button
                className="w-[98px] h-[24px] text-white text-[14px] 
      font-Almarai rounded-full bg-[#00A71180] cursor-default
      border border-solid border-[#00CA14]
       "
              >
                Available
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto w-screen flex justify-center mb-[10px]">
        <PaginationHome />
      </div>
    </div>
  );
}

export default Productpage;
