import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BsCartPlus } from "react-icons/bs";
import StarRatings from "react-star-ratings";
import { useEffect, useState } from "react";
import { selectAllProducts } from "../redux/product/selector";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllProducts,
  getSingleProduct,
} from "../redux/product/action";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RelatedProduct.css";

const RelatedProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const products = useSelector(selectAllProducts);
  const [size, setSize] = useState(30)

  useEffect(() => {
    getAllProducts(dispatch, page, size);
  }, []);

  const handleClick = async (id) => {
    await getSingleProduct(dispatch, id);
    navigate("/productdetail");
  };

  function SampleNextArrow(props) {
    const { className,  onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
      <RiArrowRightSLine
            size={15}
            color={"#706D6D"}
            className="w-[26px] h-[25px] bg-[#C4C4C4] rounded-[5px] ml-[-47.5px] mt-[-232px] cursor-pointer"

          />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
      <RiArrowLeftSLine
            size={15}
            color={"#706D6D"}
            className="w-[26px] h-[25px] bg-[#C4C4C4] rounded-[5px] ml-[1100px] mt-[-232px] cursor-pointer"
         
          />
      </div>
    );
  }



  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[1151px] h-[450px] bg-[#FFFFFF] mx-auto ">
      <div className=" mt-[11px] ml-[15px] mr-[16px] flex">
        <p className="w-[200px] h-[28px] text-[24px] font-sans font-bold mt-[-7px]">
          Related Products
        </p>
        <hr className="w-[841px] ml-[9px] mt-[11px] border border-solid border-[#5A5A5A]" />
        
      </div>
{/* ref={slideRef.current.slickPlay()} */}

      <Slider  {...settings}>
        {products?.map((product) => {
          return (
            <div
              key={product.id}
              // className={position}
              className="w-[305px] h-[395px] mx-[20px]  border border-solid border-[#B4B1B1] rounded-[5px] bg-[#FFFFFF]"
            >
              <img
                src={product.images[0].url}
                alt=""
                className="w-[254px] h-[200px] mt-[8px] mx-auto rounded-[5px] shadow-image cursor-pointer"
                onClick={() => handleClick(product.id)}
              />
              <div className="ml-[15px] mr-[26px] mt-[15px]">
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
          );
        })}
      </Slider>
    </div>
  );
};

export default RelatedProducts;
