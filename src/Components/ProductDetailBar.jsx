const ProductDetailBar = () => {
    return ( 
        <div className="w-[1151px] h-[50px] bg-[#FFFFFF] border-b border-solid border-[#E7E2E2] relative mx-auto">
            <div className="absolute left-[319px] h-[50px] font-roboto font-bold text-[20px] flex  ">
                <button className=" text-center w-[161px]">Description</button>
                <button className=" text-center w-[161px] ml-[30px]">Specification</button>
                <button className=" text-center w-[131px] bg-[#E7E2E2] border-b-[1.5px] border-[#FFD333] ml-[30px]">Reviews</button>
            </div>
        </div>
     );
}
 
export default ProductDetailBar;