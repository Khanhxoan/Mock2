import Stars from "./Stars";
const WriteReview = () => {
    return ( 
        <div className="w-[1151px] h-[249px] bg-[#FFFFFF] mx-auto relative">
            <div className="absolute top-[23px] left-[50px]">
                <p className="w-[174px] h-[32px] font-sans font-bold text-[28px] leading-[32.2px] mb-[9px]">Write Review</p>
                <Stars />
                <form>
                    <input className="w-[1051px] h-[83px] rounded-[5px] mt-[13px] border border-solid border-[#6A6A6A] bg-[#E6E6E6]
                        font-sans font-normal text-[16px] text-[#5A5A5A] pl-[15px] 
                    " placeholder="Write your review..." type="text" />
                    {/* <div className="w-[1051px] h-[83px] rounded-[5px] mt-[13px] border border-solid border-[#6A6A6A] bg-[#E6E6E6]
                        font-sans font-normal text-[16px] text-[#5A5A5A]
                    ">
                    <p className="ml-[15px] mt-[6px]">Write your Review...</p></div> */}
                    <button className="w-[248px] h-[40px] rounded-[5px] mt-[13px] bg-[#FFD333] font-sans font-bold text-[16px] text-center ">Post Your Review</button>
                </form>
            </div>
        </div>
     );
}
 
export default WriteReview;