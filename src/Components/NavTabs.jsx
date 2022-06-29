import { useEffect } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../redux/product/action";
import { selectAllProducts, selectSingleProduct } from "../redux/product/selector";
const NavTabs = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    getCategories(dispatch)
  }, [])

  const product = useSelector(selectSingleProduct);
  return (
    <div className="w-[1440px] h-[50px] bg-[#FFFBFB] relative mx-auto">
      <div className="absolute top-[14px] left-[159px]  flex ">
        <p className="title-navtab w-[42px]">Home</p>
        <RiArrowRightSLine size={20} color="#6C757D" className="ml-[4.5px] mt-[2px]" />
        <p className="title-navtab w-[70px] ml-[4.5px]">{product.category}</p>
        <RiArrowRightSLine size={20} color="#6C757D" className="ml-[4.5px] mt-[2px]" />
        <p className="title-navtab w-[140px] ml-[4.5px]">{product.name}</p>
      </div>
    </div>
  );
};

export default NavTabs;
