import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectAccessToken,
  selectUser,
  selectUserID,
} from "../../redux/auth/selector";
import { deleteCart } from "../../redux/Cart/actions";
import { selectNewCart, selectNewCartId } from "../../redux/Cart/selectors";
import TopBar from "../TopBar";
import NavTabs from "../NavTabs";
import { BsCheckCircleFill } from "react-icons/bs";
import { selectOrder, selectOrderById } from "../../redux/Orders/selectors";
import { getMyOrder } from "../../redux/Orders/actions";

function SuccessPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  const accessToken = useSelector(selectAccessToken);
  const cartID = useSelector(selectNewCartId);

  const user = useSelector(selectUser);
  const order = useSelector(selectOrderById);


  const myOrder = order?.orders?.result[0];

  console.log(myOrder);

  useEffect(() => {
    getMyOrder(accessToken, dispatch, page);
    
  }, [page]);

  useEffect(() => {
      deleteCart(accessToken, cartID, dispatch)
  }, [])
  const handleBackToHome = () => {
    navigate("/");
    // deleteCart(accessToken, cartID, dispatch);
  };
  return (
    <div className="absolute top-[155px]">
      <div>
        <NavTabs />
        <div className="h-[865px] w-[1440px] flex justify-center ">
          <div className="mt-[60px] ">
            <div className="w-[600px] h-[700px] shadow-image border border-solid border-[#DFE3E8] relative">
              <div className="absolute top-[40px] left-[60px] right-[60px] bottom-[40px] flex flex-col">
                <BsCheckCircleFill
                  color="#33ba7c"
                  className="w-[75px] h-[75px] mt-[20px] mx-auto"
                />
                <p className="text-[32px] font-Almarai font-extralight text-[#33ba7c] my-[20px] mx-[auto]">
                  Payment successful
                </p>
                <div className="flex justify-between text-[18px] font-sans mt-[20px] mb-[5px]">
                  <p>User Name:</p>
                  <p>{user.username}</p>
                </div>
                <div className="flex justify-between text-[18px] font-sans mb-[5px]">
                  <p>Payment Type:</p>
                  <p>{myOrder?.paymentMethod}</p>
                </div>
                <div className="flex justify-between text-[18px] font-sans mb-[5px]">
                  <p>Address:</p>
                  <p className="w-[160px] h-[27px] overflow-hidden text-right">{myOrder?.address}</p>
                </div>
                <div className="flex justify-between text-[18px] font-sans mb-[5px]">
                  <p>Contact:</p>
                  <p>{myOrder?.contact}</p>
                </div>
                <hr className="border border-solid border-[#DFE3E8] w-[full] mb-[5px]" />
                <div className="flex justify-between text-[25px] font-semibold font-sans mt-[10px] mb-[5px]">
                  <p className="text-[#C4C4C4]">Total:</p>
                  <p>$ {myOrder?.totalPrice}</p>
                </div>
                <div className="flex justify-between text-[25px] font-semibold font-sans mt-[-20px] mb-[5px]">
                  <p className="text-[#C4C4C4]">Transaction ID:</p>
                  <p>{myOrder?.id}</p>
                </div>
                <div className="flex justify-center mt-[10px]">
                  <button
                    onClick={() => handleBackToHome()}
                    className="text-center font-bold text-[20px] bg-[#FFD333] w-[180px] h-[50px] rounded-[5px]"
                  >
                    Back To Home
                  </button>
                </div>
              </div>
              {/* <p>Success</p>
                        <button className='' onClick={() => {handleBackToHome()}}>Back To Home</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
