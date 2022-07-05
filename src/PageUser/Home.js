import React, { useEffect, useState } from "react";
import Categories from "../Components/CategoriesBar";
import FreeShipping from "../Components/FreeShipping";
import img1 from "../Components/imgs/image 1.png";
import ProductCard from "../Components/ProductCard";
import ProfileBanner from "../Components/ProfileBanner";
import { useNavigate } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { getAllProducts, getSingleProduct } from "../redux/product/action";
import { selectAllProducts } from "../redux/product/selector";
import StarRatings from "react-star-ratings";
import { BsCartPlus } from "react-icons/bs";



const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(30);
  useEffect(() => {
    getAllProducts(dispatch, page, size);
  }, []);

  const products = useSelector(selectAllProducts);
  console.log(products);
  const handleClick = async (id) => {
    await getSingleProduct(dispatch, id);
    navigate("/productdetail");
  };
  const [noOfElement, setNoOfElement] = useState(7);
  const slice = products?.slice(0, noOfElement);

  return (
    <div className="mx-[144px] mt-[11px]">
      <div className="flex">
        <Categories />
        <div className="w-[862px] ml-[11px] grid grid-cols-3">
          <div className="col-span-3 col-start-1 w-[862px] ">
            <img src={img1} className="h-[100%]" />
          </div>
          <div className="col-span-1 col-start-1 w-[284px] mt-[5px]">
            <img src={img1} className="h-[100%] " />
          </div>
          <div className="col-span-1 col-start-2 w-[284px] mt-[5px] ml-[5px]">
            <img src={img1} className="h-[100%] " />
          </div>
          <div className="col-span-1 col-start-3 w-[284px] mt-[5px] ml-[5px]">
            <img src={img1} className="h-[100%] " />
          </div>
        </div>
      </div>
      <div className="mt-[8px] w-[1164px] grid grid-cols-4">
        <FreeShipping className="col-span-1 col-start-1" />
        <FreeShipping className="col-span-1 col-start-2" />
        <FreeShipping className="col-span-1 col-start-3" />
        <FreeShipping className="col-span-1 col-start-4" />
      </div>
      <ProfileBanner className="mt-[19px]" noOfElement={noOfElement} setNoOfElement={setNoOfElement} />
      <div className="mt-[19px] w-[1145px] grid grid-cols-4 gap-4">
        {slice
          ?.filter((item) => parseInt(item.rating) === 5)
          .map((product) => (
            <div
              key={product.id}
              className="w-[285px] h-[395px]  border border-solid border-[#B4B1B1] rounded-[5px] bg-[#FFFFFF]"
            >
              <img
                src={product.images[0].url}
                alt=""
                className="w-[254px] h-[200px] mt-[8px] mx-auto rounded-[5px] shadow-image cursor-pointer"
                onClick={() => handleClick(product.id)}
              />
              <div className="ml-[17px] mr-[26px] mt-[15px]">
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
                  <StarRatings
                    rating={parseInt(product.rating)}
                    starRatedColor="#FFD333"
                    starDimension="20px"
                    starSpacing="0"
                  />
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

                <button className="w-[98px] h-[24px] text-white text-[14px] font-Almarai rounded-full bg-[#00A71180] cursor-defaultborder border-solid border-[#00CA14]">
                  Available
                </button>
              </div>
            </div>
          ))}
      </div>{" "}
    </div>
  );
};

export default Home;
