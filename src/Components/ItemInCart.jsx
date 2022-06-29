import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../Assets/ProductPhoto.svg"
import { selectAccessToken } from "../../Redux/Auth/selectors";
import { deleteItemById, getCartById } from "../../Redux/Cart/actions";
import { decreaseCart, increaseCart } from "../../Redux/Cart/reducer";
import { selectNewCart, selectAllCart } from "../../Redux/Cart/selectors";

const ItemInCart = () => {
    const card = useSelector(selectNewCart);
    const newCart = useSelector(selectAllCart);
    const cartId = newCart[0]?.data?.cart.id;
    const accessToken = useSelector(selectAccessToken)
    console.log(card.data.items)
    const dispatch = useDispatch()
    const handleDecrease = (cartItem) => {
        dispatch(decreaseCart(cartItem))
        
        
    }
    const handleIncrease = (cartItem) => {
        dispatch(increaseCart(cartItem))
    }
    const handleDelete = async (id) => {
        await deleteItemById(accessToken, id, dispatch)
        getCartById(accessToken, cartId, dispatch);
    }
    return ( 
        <div className="w-[1151px] h-[full] rounded-[5px] bg-[#FFFFFF] border border-solid border-[#5A5A5A69]">
            <div className="h-[50px] w-[1151px] bg-[#C4C4C4] rounded-t-[5px] relative">
                <div className="absolute top-[15px] left-[64px] right-[91px] flex">
                    <p className="title-cart w-[45px]">Image</p>
                    <p className="title-cart w-[57px] ml-[88px]">Product</p>
                    <p className="title-cart w-[38px] ml-[383px]">Price</p>
                    <p className="title-cart w-[61px] ml-[154px]">Quantity</p>
                    <p className="title-cart w-[36px] ml-[134px]">Total</p>
                </div>
            </div>
            <div className="">
            {
                card.data.items.map((cartItem) => (
                    <div className="relative h-[134px] w-[1151px] border-t border-[#5A5A5A69]">
                    <div className="absolute  top-[14px] left-[27px] flex">
                    <img src={cartItem.itemCartInfo.images[0].url} alt="" className="w-[119px] h-[108px] rounded-[5px] ml-[15px]"/>
                    <p className="font-sans font-bold text-[24px] ml-[35px] mt-[34px] w-[200px] h-[28px] ">{cartItem.itemCartInfo.name}</p>
                    <p className="font-roboto font-bold text-[24px] ml-[230px] mt-[34px]">${cartItem.price}</p>
                    <div className="w-[162.37px] h-[42.08px] bg-[#E2E4E5] border border-solid border-[#959595] ml-[100px] mt-[30px] rounded-[5px] flex">
                        <button className="flex-1 text-[#33A0FF] text-[24px] " onClick={() => {
                           cartItem.quantity === 1 ? handleDelete(cartItem.id) : handleDecrease(cartItem)}}>-</button>
                        <p className="flex-1 font-roboto text-[24px] font-light text-center py-[4px]">{cartItem.quantity}</p>
                        <button className="flex-1 text-[#33A0FF] text-[24px]" onClick={() => handleIncrease(cartItem)}>+</button>
                    </div>
                    <p className="w-[90px] h-[28px] font-roboto font-bold text-[24px] ml-[70.63px] mt-[34px] ">${cartItem.quantity * cartItem.price}</p>
                    
                </div>
                </div>
                ))
            }
            </div>
            
                
            
        </div>
     );
}
 
export default ItemInCart;