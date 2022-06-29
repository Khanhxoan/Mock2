import Product from "../../Assets/ProductPhoto.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectAllCart, selectNewCart } from "../../Redux/Cart/selectors";
import { useState, useRef } from "react";
import {
  deleteItemById,
  deleteCart,
  getCartById,
} from "../../Redux/Cart/actions";
import { selectAccessToken } from "../../Redux/Auth/selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const CartPopup = () => {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector(selectAccessToken);
  const cart = useSelector(selectNewCart);
  const newCart = useSelector(selectAllCart);

  const ref = useRef(0)
  const cartId = newCart[0]?.data?.cart.id;
     const cardIdNew = cart?.id;
  
  useEffect(() => {
   getCartById(accessToken, cartId, dispatch);
    setFlag(!flag);
  }, []);
  const handleDeleteItem = async (id) => {
    await deleteItemById(accessToken, id , dispatch);
    getCartById(accessToken, cartId, dispatch);
    setFlag(!flag)
  };
  
  const handleViewCart = () => {
    navigate('/shoppingcart')
  }
  const handleCheckout = () => {
    navigate('/Checkout')
  }
  return (
    <div>
      {cart?.data?.items.map((item) => (
        <div
          className="w-[338px] h-[256px] rounded-[5px] bg-[#FFFFFF] border-b-2 border-[#C4C4C4] mb-[10px]
            shadow-md relative"
        >
          <div className="flex absolute top-[18px] left-[16px] right-[16.32px]">
            <img
              src={item.itemCartInfo.images[0].url}
              className="w-[81.12px] h-[64.18px] 
                rounded-[5px]"
              alt=""
            />
            <div className="ml-[16.7px] mt-[7.63px] w-[180.8px] h-[22.46]">
              <p className="font-sans font-semibold text-[18px]">
                {item.itemCartInfo.name}
              </p>
              <p className="font-sans text-[16px] mt-[-20px]">
                {item.quantity} x{" "}
                <span className="font-semibold">$ {item.price}</span>
              </p>
            </div>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="text-[#818181] text-[18px] font-semibold ml-[16.7px] "
            >
              x
            </button>
          </div>
          <hr className="absolute top-[94px] w-[338px] border border-solid border-[#959292]" />

          <div className="absolute top-[106px] left-[18px] right-[15px]">
            <div className="flex">
              <p className="title-left">Subtotal</p>
              <p className="title-right">${item.total}</p>
            </div>
            <div className="flex">
              <p className="title-left">Shipping</p>
              <p className="title-right">$10.00</p>
            </div>
            <div className="flex">
              <p className="title-left">Total</p>
              <p className="title-right">${item.total + 10}</p>
            </div>
          </div>
          <div className="flex absolute top-[207px] left-[16px] right-[17px]">
            <button className="button-product bg-[#C4C4C4]" onClick={handleViewCart}>View Cart</button>
            <button className="button-product bg-[#FFD333] ml-[60px]" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPopup;
