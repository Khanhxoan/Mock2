import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const NavTabs = () => {
  return (
    <div className="w-[1440px] h-[50px] bg-[#FFFBFB] relative mx-auto">
      <div className="absolute top-[14px] left-[159px]  flex ">
        <Link className="title-navtab w-[42px]" to="/">Home</Link>
        <RiArrowRightSLine size={20} color="#6C757D" className="ml-[4.5px] mt-[2px]" />
        <Link className="title-navtab w-[44px] ml-[4.5px]" to="/Productpage">Shoes</Link>
        <RiArrowRightSLine size={20} color="#6C757D" className="ml-[4.5px] mt-[2px]" />
        <p className="title-navtab w-[100px] ml-[4.5px]">Adidas Shoes</p>
      </div>
    </div>
  );
};

export default NavTabs;
