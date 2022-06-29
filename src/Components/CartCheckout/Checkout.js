import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAccessToken, selectUserID } from "../../Redux/Auth/selectors";
import { selectNewCart } from "../../Redux/Cart/selectors";
import { createNewOrder } from "../../Redux/Orders/actions";
import { selectAllOrder } from "../../Redux/Orders/selectors";
import TopBar from "../Component/TopBar";
import NavTabs from "./NavTabs";

function Checkout() {
  const card = useSelector(selectNewCart);
  const accessToken = useSelector(selectAccessToken);
  const orderList = useSelector(selectAllOrder);
  console.log(orderList)
  const dispatch = useDispatch();
  console.log(card.data.items);
  const navigate = useNavigate()
  const cardLength = card?.data?.items.length;
  const shipping = cardLength * 10;
  const [paymentMethod, setPaymentMethod] = useState("");
  console.log(paymentMethod);
  const [address, setAddress] = useState(
    "Random Federation 115302, Moscow ul. Varshavskaya, 15-2-178"
  );
  const [contact, setContact] = useState("0326174848");
  const userID = useSelector(selectUserID);
  let { total, quantity } = card.data.items.reduce(
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
  console.log(total);
  const handleCheckOut = async () => {
    const newOrder = {
      paymentMethod: paymentMethod,
      address: address,
      contact: contact,
      totalPrice: total + shipping,
      userId: userID,
    };
    const newItemArr = 
      card.data.items.map((item) => ({
        productId: item.itemCartInfo.id,
        quantity: item.quantity,
        price: item.price,
        total: item.quantity * item.price,
      }));
    const orderCheckOut = {
      order: newOrder,
      itemArr: newItemArr,
    };
    
    await createNewOrder(accessToken, orderCheckOut, dispatch, navigate);
    
  };
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
              <p>Checkout</p>
            </div>
            <div className="mt-[40px] flex">
              <div className="w-[765px] h-[full] ">
                <div className="w-[765px] h-[50px] rounded-t-[5px] bg-[#C4C4C4]  relative">
                  <div className="absolute left-[20px] top-[15px] flex">
                    <p className="h-[19px] w-[45px] font-bold font-roboto text-[16px] leading-[18.75px] ml-[10px]">
                      Image
                    </p>
                    <p className="h-[19px] w-[57px] font-bold font-roboto text-[16px] leading-[18.75px] ml-[60px]">
                      Product
                    </p>
                    <p className="h-[36px] w-[45px] font-bold font-roboto text-[16px] leading-[18.75px] ml-[480px]">
                      Total
                    </p>
                  </div>
                </div>
                <div>
                  {card.data.items.map((cartItem) => (
                    <div className="h-[94px] w-[765px] bg-[#EBEAEA] border border-solid border-[#5A5A5A66] relative">
                      <div className="absolute top-[12px] left-[8px] flex">
                        <img
                          src={cartItem.itemCartInfo.images[0].url}
                          className="w-[73px] ml-[10px] h-[66px] rounded-[5px] shadow-image"
                        />
                        <div className="ml-[43px] mt-[15px]">
                          <p className="w-[259px] h-[28px] leading-[27.6px] font-bold font-sans text-[24px]">
                            {cartItem.itemCartInfo.name}
                          </p>
                          <p className="w-[46px] h-[18px] leading-[18.4px]  font-sans text-[16px] mt-[-25px]">
                            Qty: {cartItem.quantity}
                          </p>
                        </div>
                        <div className="ml-[248px] mt-[15px]">
                          <p className="w-[90px] h-[28px] font-bold font-roboto text-[24px] leading-[28px] ml-[15px]">
                            ${cartItem.quantity * cartItem.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col ml-[15px]">
                <div className="w-[377px] h-[276px] rounded-[5px] border border-solid border-[#5A5A5A66] relative">
                  <div className="absolute top-[15px] left-[15px]">
                    <p className="w-[333px] h-[28px] font-bold font-roboto text-[24px] leading-[28.13px]">
                      Shipping Information
                    </p>
                    <p className="mt-[-5px] w-[178px] h-[48px] font-roboto text-[14px] leading-[16.41px]">
                      {address}
                    </p>
                    <div className="mt-[10px]">
                      <p className="w-[94.5px] h-[16px] font-roboto font-bold text-[14px] leading-[16.41px]">
                        Phone Number
                      </p>
                      <p className="w-[109.42px] h-[16px] font-roboto text-[14px] mt-[-10px] leading-[16.41px]">
                        {contact}
                      </p>
                    </div>
                    <div className="mt-[10px]">
                      <p className="w-[94.5px] h-[16px] font-roboto font-bold text-[14px] leading-[16.41px]">
                        Email Address
                      </p>
                      <p className="w-[109.42px] h-[16px] font-roboto text-[14px] mt-[-10px] leading-[16.41px]">
                        stroyka@example.com
                      </p>
                    </div>
                    <button className="mt-[0px] text-[#2E8ADA] w-[132px] h-[16px] leading-[16.41px] text-left">
                      Edit Address
                    </button>
                  </div>
                </div>
                <div className="w-[377px] h-[432px] mt-[10px] rounded-[5px] border border-solid border-[#5A5A5A66] relative">
                  <div className="absolute top-[10px] left-[14px]">
                    <p className="w-[103px] h-[28px] font-bold font-roboto text-[24px] leading-[28.13px]">
                      Checkout
                    </p>
                    <div className="flex justify-between w-[340px]">
                      <p className="w-[61px] h-[19px] font-roboto font-bold text-[16px] leading-[18.75px]">
                        Subtotal
                      </p>
                      <p className="text-right w-[61px] h-[19px] font-roboto font-bold text-[16px] leading-[18.75px] text-[#5A5A5A]">
                        ${total}
                      </p>
                    </div>
                    <div className="flex justify-between w-[340px]">
                      <p className="w-[61px] h-[19px] font-roboto font-bold text-[16px] leading-[18.75px]">
                        Shipping
                      </p>
                      <p className="text-right w-[61px] h-[19px] font-roboto font-bold text-[16px] leading-[18.75px] text-[#5A5A5A]">
                        ${shipping}
                      </p>
                    </div>
                  </div>
                  <hr className="absolute w-[377px] border-solid border-[#000000] top-[130px]" />
                  <div className="absolute top-[150px] left-[14px]">
                    <div className="flex justify-between w-[340px]">
                      <p className="w-[61px] h-[19px] font-roboto font-bold text-[16px] leading-[18.75px]">
                        Subtotal
                      </p>
                      <p className="text-right w-[61px] h-[19px] font-roboto font-bold text-[16px] leading-[18.75px] text-[#5A5A5A]">
                        ${total + shipping}
                      </p>
                    </div>
                    <form>
                      <div className="flex w-[300px] h-[33px] mt-[14px] ml-[20px] border border-solid border-[#5A5A5A66] rounded-[5px]">
                        <input
                          type="radio"
                          name="radiobtn"
                          value="Cash on delivery"
                          className="w-[15px] h-[15px] ml-[20px] my-[auto] "
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label className="ml-[19px] w-[150px] h-[19px] font-bold font-roboto text-[16px] leading-[18.75]  mt-[-135px]">
                          Cash on delivery{" "}
                        </label>
                      </div>
                      <div className="flex w-[300px] h-[33px] mt-[12px] ml-[20px] border border-solid border-[#5A5A5A66] rounded-[5px]">
                        <input
                          type="radio"
                          name="radiobtn"
                          value="Check Payments"
                          className="w-[15px] h-[15px] ml-[20px] my-[auto]  "
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <p className="ml-[19px] w-[150px] h-[19px] font-bold font-roboto text-[16px] leading-[18.75]  mt-[-135px]">
                          Check Payments
                        </p>
                      </div>
                      <div className="flex w-[300px] h-[33px] mt-[12px] ml-[20px] border border-solid border-[#5A5A5A66] rounded-[5px]">
                        <input
                          type="radio"
                          name="radiobtn"
                          value="PayPal"
                          className="w-[15px] h-[15px] ml-[20px] my-[auto]  "
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <p className="ml-[19px] w-[150px] h-[19px] font-bold font-roboto text-[16px] leading-[18.75]  mt-[-135px]">
                          PayPal
                        </p>
                      </div>
                      <div className="flex w-[300px] h-[33px] mt-[12px] ml-[20px] border border-solid border-[#5A5A5A66] rounded-[5px]">
                        <input
                          type="radio"
                          name="radiobtn"
                          value="Mastercard"
                          className="w-[15px] h-[15px] ml-[20px] my-[auto]  "
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <p className="ml-[19px] w-[150px] h-[19px] font-bold font-roboto text-[16px] leading-[18.75]  mt-[-135px]">
                          Mastercard
                        </p>
                      </div>
                    </form>
                    <button 
                    onClick={() => handleCheckOut()}
                    className="w-[300px] h-[35px] bg-[#FFD333] ml-[20px] mt-[12px] rounded-[5px] text-center font-bold font-roboto text-[24px] leading-[28px] relative">
                      <p className="w-[106px] h-[25px] absolute left-[98px] top-[3px]">
                        Checkout
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

export default Checkout;
