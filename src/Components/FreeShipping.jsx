import Truck from "./imgs/Vector.png"
const FreeShipping = () => {
    return ( 
        <div className="w-[280px] h-[94px] rounded-[5px] bg-[#F8F8F8] border border-solid border-[#DFD8D8] flex relative">
            <img src={Truck} alt="" className="absolute top-[32px] left-[25px] w-[37px] h-[30px]"/>
            <div className="absolute top-[16px] left-[75px]">
                <p className="w-[161px] h-[28px] font-sans font-bold text-[24px] mb-[3px]">Free Shipping</p>
                <p className="w-[129px] h-[16px] font-sans text-[14px]">For orders from %50</p>
            </div>
        </div>
     );
}
 
export default FreeShipping;