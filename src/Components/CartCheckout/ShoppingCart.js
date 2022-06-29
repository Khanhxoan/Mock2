import React, { useEffect } from "react";
import TopBar from "../Component/TopBar";
import NavTabs from "./NavTabs";
import ItemInCart from "../Component/ItemInCart";
import { selectCart, selectNewCart } from "../../Redux/Cart/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../Redux/Cart/reducer";
import { useNavigate } from "react-router-dom";
function ShoppingCart() {
  const NewCart = useSelector(selectNewCart);
  const cardLength = NewCart?.data?.items.length;
  const shipping = cardLength * 10;
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  let { total, quantity } = NewCart?.data?.items.reduce(
    (cartTotal, cartItem) => {
      const { price, quantity } = cartItem;
      const itemTotal = price * quantity;

      cartTotal.total += itemTotal;
      cartTotal.quantity += quantity;

      return cartTotal;
    },
    {
      total: 0,
      quantity: 0,
    }
  );
  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className="absolute top-[155px]">
      <header>
        <TopBar />
      </header>
      <div>
        <NavTabs />
        <div className="h-[865px] w-[1440px] relative ">
          <div className="absolute left-[144px] top-[20px]">
            <div className="w-[258px] h-[47px] font-bold font-roboto text-[40px]">
              <p>Shopping Cart</p>
            </div>
            <div className="mt-[40px]">
              <ItemInCart />
            </div>
            <div className="mt-[60px] flex">
              <form className="flex">
                <input
                  className="w-[280px] h-[49px] rounded-[5px] bg-[#C4C4C4] px-[12px] placeholder-[#5A5A5A]"
                  placeholder="Coupon Code"
                ></input>
                <button className="w-[178px] h-[49px] rounded-[5px] bg-[#FFD333] text-center font-bold font-roboto text-[18px] ml-[16px]">
                  Apply Coupon
                </button>
              </form>
              <div className="ml-[107px] w-[571px] h-[450px] rounded-[5px] border border-solid border-[#5A5A5A66] bg-[#FFFEFE] relative">
                <div className="absolute left-[31px] right-[65px] top-[18px]">
                  <p className="w-[167px] h-[40px] font-roboto font-bold text-[34px]">
                    Cart Totals
                  </p>
                  <div className="mt-[41px]">
                    <div className="flex justify-between">
                      <p className="w-[96px] h-[28px] font-bold font-roboto text-[24px] leading-[28.13px]">
                        Subtotal
                      </p>
                      <p className="w-[90px] h-[28px] font-bold font-roboto text-[24px] text-[#5A5A5A] text-right ">
                        ${total}
                      </p>
                    </div>
                    <div className="flex justify-between mt-[10px]">
                      <p className="w-[96px] h-[28px] font-bold font-roboto text-[24px] leading-[28.13px]">
                        Shipping
                      </p>
                      <p className="w-[90px] h-[28px] font-bold font-roboto text-[24px] text-[#5A5A5A] text-right ">
                        ${shipping}
                      </p>
                    </div>
                    <div className="flex justify-between mt-[25px]">
                      <p className="w-[72px] h-[38px] font-bold font-roboto text-[32px] leading-[37.5px]">
                        Total
                      </p>
                      <p className="w-[90px] h-[28px] font-bold font-roboto text-[24px] text-[#5A5A5A] text-right ">
                        ${total + shipping}
                      </p>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <button className="w-[487px] h-[69px] rounded-[5px] bg-[#FFD333] font-bold font-roboto text-[34px] leading-[39.84px] relative" 
                    onClick={() => handleCheckout()}>
                      <p className="absolute w-[335px] h-[40px] left-[85px] top-[13px] ">
                        Proceed to checkout
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
