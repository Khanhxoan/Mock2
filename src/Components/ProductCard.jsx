import Product from "./imgs/Product Photo.png"
import star from "./imgs/star-fill.png"
import {BsCartPlus} from "react-icons/bs"

const ProductCard = () => {
  return (
  
      <div className="w-[280px] h-[395px] border border-solid border-[#B4B1B1] rounded-[5px] bg-[#FFFFFF]">
        <img src={Product} alt="" className="ml-[13px] mt-[8px]"/>
        <div className="ml-[25px] mr-[26px] mt-[-8px]">
        <div className="w-[212px] h-[37px] mr-[68px] mb-[10px]"><p className="font-sans text-[32px] font-semibold ">Adidas Shoes</p></div>
        <div className="w-[212px] h-[28px] mr-[68px] mb-[5px]"><p className="font-sans text-[18px] font-semibold">ID: 123</p></div>
          
          <div className="flex">
            {/* <AiFillStar className="border border-solid border-[#B6B6B6]"/> */}
            <img src={star} alt="" className="star ml-[0px]"/>
            <img src={star} alt="" className="star"/>
            <img src={star} alt="" className="star"/>
            <img src={star} alt="" className="star"/>
            <img src={star} alt="" className="star"/>

            <p className="text-[#D70000] ml-[69px] mt-[-3px] font-sans text-[16px] font-semibold" >50% Off</p>
          </div>
          
          <div className="flex">
          <p className="font-sans text-[24px] font-semibold">$ 120.00</p>
          <BsCartPlus className="ml-[118px] w-[31px] h-[28px] mt-[3px] text-[#212529] cursor-pointer"/>
          </div>
          
          <button className="w-[98px] h-[24px] text-white text-[14px] 
          font-Almarai rounded-full bg-[#00A71180] cursor-default
          border border-solid border-[#00CA14]
           ">Available</button>
        </div>
      </div>
    
  );
};

export default ProductCard;