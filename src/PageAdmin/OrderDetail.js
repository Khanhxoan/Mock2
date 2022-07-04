import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccessToken,
  selectUserID,
  selectRole,
} from "../redux/auth/selector"
import { BiCalendarEdit, BiCalendarAlt } from "react-icons/bi";
import { FiUser, FiTruck } from "react-icons/fi";

import { FaSort } from "react-icons/fa";
import { selectOrderById } from "../redux/Orders/selectors";
import { getUserById } from "../redux/user/action";
import { selectUserById } from "../redux/user/selector";
import { updateOrderById } from "../redux/Orders/actions";
import { HiOutlineLocationMarker } from "react-icons/hi";

function OrderDetail() {
  const accessToken = useSelector(selectAccessToken);
  const role = useSelector(selectRole);
  const order = useSelector(selectOrderById);
  const user = useSelector(selectUserById);
  const [status, setStatus] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  console.log(order)

  useEffect(() => {
    getUserById(accessToken, order?.order?.userId, dispatch);
  }, []);

  const dispatch = useDispatch();
  const handleUpdateOrder = () => {
    const updated = {
      status: status,
      isPaid: isPaid,
    };
    if (role === "admin") {
      updateOrderById(accessToken, order?.order?.id, updated, dispatch);
    }
  };

  return (
    <div className="h-[120vh] w-[1217px] bg-[#F5F7FA] relative">
      {/* <Dropdown/> */}
      <div className="absolute left-[32px] top-[25px]">
        <div className="w-[300px] h-[18px] text-[18px] leading-[20.7px] text-[#929395]">
          <p>Dashboard / Order / Order #{order?.order?.id}</p>
        </div>
        <div className="w-[327px] h-[31px] text-[35px] leading-[41.06px] font-semibold mt-[31px]">
          <p>Orders Detail #{order?.order?.id}</p>
        </div>
        <div className="w-[116px] h-[19px] text-[16px] text-[#929395] leading-[18.77px] font-sans font-medium mt-[15px]">
          <p>Order ID: #{order?.order?.id}</p>
        </div>
        <div className="mt-[25px] w-[1146px] h-[calc(100vh-500px)] bg-[#FFFFFF] shadow-image relative">
          <div className="absolute top-[15px] left-[20px] flex flex-col">
            <div className="flex items-center h-[35px]">
              <BiCalendarAlt className="w-[25px] h-[25px]" />
              <p className="font-sans text-[15px] leading-[17.25px] w-[162px] h-[17px] mt-[14px] ml-[4px]">
                Created at :{" "}
                {order?.order?.createdAt
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}
              </p>
              <div className="flex ml-[410px]">
                <p className="font-work text-[18px] font-medium leading-[21.11px] w-[62.11px] h-[21px] mt-[14px]">
                  Status
                </p>
                <p className="font-work text-[18px] font-medium leading-[21.11px] w-[62.11px] h-[21px] ml-[160px] mt-[14px]">
                  Paided
                </p>
              </div>
            </div>
            <div className="flex items-center h-[40px]">
              <BiCalendarEdit className="w-[25px] h-[25px]" />
              <p className="font-sans text-[15px] leading-[17.25px] w-[162px] h-[17px] mt-[14px] ml-[4px]">
                Updated at :{" "}
                {order?.order?.updatedAt
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}
              </p>
              <div className="flex ml-[410px]">
              <div className="font-work text-[18px] font-medium leading-[21.11px] w-[193px] h-[40px] rounded-[2px] ">
              <select
                  defaultValue={order?.order?.status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-[193px] h-[40px] border border-solid border-[#929395] rounded-[2px]"
                >
                  <option value="Processing" className="">
                    Processing
                  </option>
                  <option value="Shipping" className="">
                    Shipping
                  </option>
                  <option value="Cancel" className="">
                    Cancel
                  </option>
                </select>
              </div>
              <div className="font-work text-[18px] font-medium leading-[21.11px] w-[106px] h-[40px] rounded-[2px] ml-[28px]">
              <select
                  defaultValue={order?.order?.isPaid === true ? "Yes" : "No"}
                  onChange={(e) => setIsPaid(e.target.value)}
                  className="w-[106px] h-[40px] border border-solid border-[#929395] rounded-[2px] "
                >
                  <option value={false} className="">
                    No
                  </option>
                  <option value={true} className="">
                    Yes
                  </option>
                </select>
              </div>
                
                
                <button
                  onClick={() => handleUpdateOrder()}
                  className="w-[147px] h-[40px] bg-[#FFD333] rounded-[5px] ml-[32px] text-center text-[20px] font-work font-semibold "
                >
                  Update order
                </button>
              </div>
            </div>
            <div className="flex h-[25px]">
              <p className="font-work text-[15px] leading-[18.77px] w-[105px] h-[19px] mt-[5px] ml-[4px] text-[#929395]">
                Order ID : {order?.order?.id}
              </p>
            </div>
          </div>
          <hr className="absolute top-[130px] w-[1144px] border border-[#929395]" />
          <div className="absolute top-[130px] flex">
            <div className="absolute top-[35px] left-[35px] flex justify-evenly">
              <div className="flex">
                <div className="w-[75px] h-[75px] rounded-full bg-[#3D464D] flex justify-center">
                  <FiUser
                    className="w-[28px] h-[28px] my-[auto]"
                    color="#FFD333"
                  />
                </div>
                <div className="ml-[15px]">
                  <p className="w-[94px] h-[20px] font-semibold font-work text-[20px] leading-[23.46px]">
                    Customer
                  </p>
                  <p className="w-[210px] h-[15px] font-work text-[16px] text-[#3D464D] leading-[18.77px]">
                    Name: {user?.username}
                  </p>
                  <p className="w-[260px] h-[15px] font-work text-[16px] text-[#3D464D] leading-[18.77px]">
                    Email: {user?.email}
                  </p>
                  <p className="w-[210px] h-[15px] font-work text-[16px] text-[#3D464D] leading-[18.77px]">
                    Phone: {order?.order?.contact}
                  </p>
                </div>
              </div>
              <div className="flex ml-[33px]">
                <div className="w-[75px] h-[75px] rounded-full bg-[#3D464D] flex justify-center">
                  <FiTruck
                    className="w-[28px] h-[28px] my-[auto]"
                    color="#FFD333"
                  />
                </div>
                <div className="ml-[15px]">
                  <p className="w-[100px] h-[20px] font-semibold font-work text-[20px] leading-[23.46px]">
                    Order Info
                  </p>
                  <p className="w-[210px] h-[15px] font-work text-[16px] text-[#3D464D] leading-[18.77px]">
                    Status: {order?.order?.status}
                  </p>
                  <p className="w-[232px] h-[15px] font-work text-[16px] text-[#3D464D] leading-[18.77px]">
                    Pay method: {order?.order?.paymentMethod}
                  </p>
                  <p className="w-[210px] h-[15px] font-work text-[16px] text-[#3D464D] leading-[18.77px]">
                    Paided: {order?.order?.isPaid === true ? "Yes" : "No"}
                  </p>
                </div>
              </div>
              <div className="flex ml-[33px]">
                <div className="w-[75px] h-[75px] rounded-full bg-[#3D464D] flex justify-center">
                  <HiOutlineLocationMarker
                    className="w-[28px] h-[28px] my-[auto]"
                    color="#FFD333"
                  />
                </div>
                <div className="ml-[15px]">
                  <p className="w-[100px] h-[20px] font-semibold font-work text-[20px] leading-[23.46px] ">
                    Deliver to
                  </p>
                  <p className="w-[240px] h-[15px] font-work text-[16px] text-[#3D464D] leading-[18.77px] overflow-hidden">
                    Address: {order?.order?.address}
                  </p>
                  <p className="w-[220px] h-[15px] font-work text-[16px] text-[#3D464D] leading-[18.77px]">
                    Contact: {order?.order?.contact}
                  </p>
                  <p className="w-[210px] h-[15px] font-work text-[16px] text-[#3D464D] leading-[18.77px]">
                    Shipper: GHTK
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`absolute top-[325px] w-[1145px] h-[calc(100vh_-_((95px) * ${order?.items?.length}))] shadow-md bg-[#FFFFFF]`}>
            <div className="h-[52px] border-b border-[#929395]">
              <div className="absolute top-[10px] left-[23px] font-work font-bold text-[22px]">
                Items
              </div>
            </div>
            <table>
              <tbody>
                <tr className="h-[62px] border-b border-[#929395]">
                  <th className="w-[370px] font-bold font-sans text-[20px] leading-[23px] ">
                    <div className="flex mt-[20px] ml-[35px]">
                      <p>Product</p>
                      <FaSort className="ml-[80px]" />
                    </div>
                  </th>
                  <th className="w-[125px] font-bold font-sans text-[20px] leading-[23px] ">
                    <div className="flex mt-[20px] ml-[35px]">
                      <p>Price</p>
                      <FaSort className="ml-[50px]" />
                    </div>
                  </th>
                  <th className="w-[156px] font-bold font-sans text-[20px] leading-[23px] ">
                    <div className="flex mt-[20px] ml-[115px]">
                      <p>Quantity</p>
                      <FaSort className="ml-[50px]" />
                    </div>
                  </th>
                  <th className="w-[125px] font-bold font-sans text-[20px] leading-[23px] ">
                    <div className="flex mt-[20px] ml-[135px]">
                      <p>Total</p>
                      <FaSort className="ml-[50px]" />
                    </div>
                  </th>
                  <th className="w-[125px] font-bold font-sans text-[20px] leading-[23px] ">
                    <div className="flex mt-[20px] ml-[135px]"></div>
                  </th>
                </tr>
                {order?.items?.map((item) => (
                  <tr className="w-[1144px] h-[95px] border-b border-[#929395]">
                    <td className="w-[370px] font-bold font-sans text-[20px] leading-[23px]">
                      <div className="flex  ml-[35px]">
                        <img
                          className="w-[93.72px] h-[60px]"
                          alt=""
                          src={item?.itemInfo?.images[0]?.url}
                        />
                        <div className="h-[60px] w-[189.01px] ml-[17.18px]">
                          <p className="font-sans text-[20px] mt-[5px] leading-[23px]">
                            {item?.itemInfo?.name}
                          </p>
                          <p className="font-sans font-normal mt-[-15px] text-[17px] leading-[17.6px] text-[#929395]">
                            ID: {item?.itemInfo?.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="font-sans text-[20px] leading-[23px] h-[23px] w-[71px]">
                      <div className="ml-[35px]">${item?.price}</div>
                    </td>
                    <td className="font-sans text-[20px] leading-[23px] h-[23px] w-[71px]">
                      <div className="ml-[115px]">{item?.quantity}</div>
                    </td>
                    <td className="font-sans text-[20px] leading-[23px] h-[23px] w-[71px]">
                      <div className="ml-[135px]">${item?.total}</div>
                    </td>
                  </tr>
                ))}
                
              </tbody>
            </table>
            <div className="h-[65px] mb-[20px]">
              <div className="flex ml-[326px] mt-[20px] ">
                  <p className="w-[174px] h-[29px] text-[25px] leading-[28.75px] font-sans font-bold">Total Amount:</p>
                  <p className="w-[87px] h-[29px] text-[25px] leading-[28.75px] font-sans font-bold ml-[384.84px]">${order?.order?.totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
