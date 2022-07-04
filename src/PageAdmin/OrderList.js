import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { FaSort } from "react-icons/fa";
import { getAllOrderAdmin, getOrderById } from "../redux/Orders/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessToken, selectRole } from "../redux/auth/selector";
import { selectAllOrderAdmin } from "../redux/Orders/selectors";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function OrderList() {
  const accessToken = useSelector(selectAccessToken);
  const role = useSelector(selectRole);
  const orderList = useSelector(selectAllOrderAdmin);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  let tableLength = orderList?.result?.length;
  console.log(orderList);

  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);
  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
    { page: num + 4 },
  ];
  const Next = () => {
    setNum(++num);
  };
  const Back = () => {
    num > 1 && setNum(--num);
  };

  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      [...orderList.result].sort((a, b) => (a[col] > b[col] ? 1 : -1));

      setOrder("DSC");
    }
    if (order === "DSC") {
      [...orderList.result].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setOrder("ASC");
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (role === "admin") {
      getAllOrderAdmin(accessToken, dispatch, page, size);
    }
  }, [size]);
  const handlePageChange = async (id) => {
    await getOrderById(accessToken, id, dispatch);
    navigate("/admin/orderdetail");
  };

  return (
    <div className="h-[945px] bg-[#eef1f4] relative">
      <div className="absolute mx-[31px]">
        <div className="w-[226px] h-[18px] text-[18px] leading-[20.7px] text-[#929395]">
          <p>Dashboard / Order</p>
        </div>
        <div className="w-[226px] h-[31px] text-[35px] leading-[41.06px] font-semibold mt-[31px]">
          <p>Orders</p>
        </div>
        <div
          className={`w-[1153px] h-[760px] bg-[#FFFFFF] shadow-md  mt-[31px] relative`}
        >
          <div className="absolute left-[30px] top-[43.92px] w-[1093px] h-[51.08px] border-[1.5px] border-[#C4C4C4]">
            <div className=" flex ">
              <IoMdSearch
                className="w-[30px] h-[30px] ml-[24px] mt-[10px]"
                color="#929395"
              />
              <input
                className="ml-[12.67px] w-[600px] text-[20px] mt-[6px] font-sans focus:outline-none"
                placeholder="Search orders"
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <hr className="absolute top-[125.9px] w-[1153px] border-t border-solid border-[black]" />
          <div className='absolute top-[80px]'>
            <table className="w-[1153px] mb-0">
              <tbody>
                <tr className="h-[84px] ">
                  <th className="w-[80px] h-[20px] font-bold text-[20px] leading-[23px]">
                    <div className="flex justify-center">
                      <p className="my-auto">ID</p>
                      <FaSort
                        className="ml-[2px]"
                        onClick={() => sorting("index")}
                      />
                    </div>
                  </th>
                  <th className="w-[100px] h-[20px] font-bold text-[20px] leading-[23px] ">
                    <div className="flex justify-center">
                      <p className="my-auto">User ID</p>
                      <FaSort
                        className="ml-[2px]"
                        onClick={() => sorting("userId")}
                      />
                    </div>
                  </th>
                  <th className="w-[100px] h-[20px] font-bold text-[20px] leading-[23px]">
                    <div className="flex justify-center">
                      <p className="my-auto">Amount</p>
                      <FaSort
                        className="ml-[2px]"
                        onClick={() => {
                          sorting("totalPrice");
                        }}
                      />
                    </div>
                  </th>
                  <th className="w-[100px] h-[20px] font-bold text-[20px] leading-[23px]">
                    <div className="flex justify-center">
                      <p className="my-auto">Address</p>
                      <FaSort
                        className="ml-[2px]"
                        onClick={() => sorting("address")}
                      />
                    </div>
                  </th>
                  <th className="w-[100px] h-[20px] font-bold text-[20px] leading-[23px]">
                    <div className="flex justify-center">
                      <p className="my-auto">Contact</p>
                      <FaSort
                        className="ml-[2px]"
                        onClick={() => sorting("contact")}
                      />
                    </div>
                  </th>
                  <th className="w-[100px] h-[20px] font-bold text-[20px] leading-[23px]">
                    <div className="flex justify-center">
                      <p className="my-auto">Date</p>
                      <FaSort
                        className="ml-[2px]"
                        onClick={() => sorting("createdAt")}
                      />
                    </div>
                  </th>
                  <th className="w-[100px] h-[20px] font-bold text-[20px] leading-[23px]">
                    <div className="flex justify-center">
                      <p className="my-auto">Paided</p>
                      <FaSort
                        className="ml-[2px]"
                        onClick={() => sorting("isPaid")}
                      />
                    </div>
                  </th>
                  <th className="w-[100px] h-[20px] font-bold text-[20px] leading-[23px]">
                    <div className="flex justify-center">
                      <p className="my-auto">Status</p>
                      <FaSort
                        className="ml-[2px]"
                        onClick={() => sorting("status")}
                      />
                    </div>
                  </th>
                  <th className="w-[100px] h-[20px] font-bold text-[20px] leading-[23px]"></th>
                </tr>
                <tr className="w-[1153px] border-b border-solid border-[#929395]"></tr>
                {orderList?.result?.filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.address
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.contact
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.status
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.userId.toString() === searchTerm ||
                      val.totalPrice.toString() === searchTerm
                    ) {
                      return val;
                    }
                  })
                  .map((order, index) => (
                    <tr
                      key={order.id}
                      className="h-[84px] my-[2px] border-b border-solid border-[#929395] cursor-pointer"
                      onClick={() => {
                        handlePageChange(order.id);
                      }}
                    >
                      <td className="w-[60px] h-[20px] text-[20px] leading-[23px] text-center">
                        {index + 1}
                      </td>
                      <td className="w-[100px] h-[20px] text-[20px] leading-[23px] text-center">
                        {order.userId}
                      </td>
                      <td className="w-[100px] h-[20px] text-[20px] leading-[23px] text-center">
                        ${order.totalPrice}
                      </td>
                      <td className="w-[100px] h-[20px] text-[18px] leading-[23px] text-center overflow-hidden">
                        {order.address}
                      </td>
                      <td className="w-[100px] h-[20px] text-[20px] leading-[23px] text-center">
                        {order.contact}
                      </td>
                      <td className="w-[100px] h-[20px] text-[20px] leading-[23px] text-center">
                        {order.createdAt
                          .slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("/")}
                      </td>
                      <td className="w-[100px] h-[20px] text-[20px] leading-[23px] text-center">
                        {order.isPaid === true ? (
                          <div className="w-[72px] h-[25px] rounded-[20px] bg-[#FFD333] text-white mx-auto">
                            Yes
                          </div>
                        ) : (
                          <div className="w-[72px] h-[25px] rounded-[20px] bg-[#366AB8] text-white mx-auto">
                            No
                          </div>
                        )}
                      </td>
                      <td className="w-[100px] h-[20px] text-[20px] leading-[23px] text-center">
                        {order.status}
                      </td>
                      <td className="w-[100px] h-[20px] text-[20px] leading-[23px] text-center">
                        <div className="flex justify-center">
                          <FiEdit
                            className="w-[25px] h-[25px] cursor-pointer"
                            color="#387B18"
                          />
                          <FiTrash2
                            className="w-[25px] h-[25px] ml-[10px] cursor-pointer"
                            color="#F02020"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="flex justify-between">
              <div className="flex mt-[20px] ml-[30px]">
                <button
                  onClick={Back}
                  className={`w-[32px] h-[32px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px] flex justify-center align-middle
                hover:bg-[#919EAB] hover:text-[#FFD333]
                    `}
                >
                  <RiArrowLeftSLine size={20} className="my-auto" />
                </button>
                {pages.map((pg, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCur(pg.page);
                      getAllOrderAdmin(accessToken, dispatch, pg.page, size);
                    }}
                    className={`w-[32px] h-[32px] ml-[8px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px] 
                ${cur === pg.page && " bg-yellow-400"}`}
                  >
                    {pg.page}
                  </button>
                ))}
                <button
                  onClick={Next}
                  className="w-[32px] h-[32px] ml-[8px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px]  hover:bg-[#919EAB] hover:text-[#FFD333] flex justify-center align-middle"
                >
                  <RiArrowRightSLine size={20} className="my-auto" />
                </button>
              </div>
              <div className="flex mt-[20px] mr-[40px]">
                <p className="w-[133px] h-[30px] text-[20px] font-roboto">
                  Items per page{" "}
                </p>
                <input
                  type="number"
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                  className="w-[50px] h-[30px] rounded-[2px] border border-solid border-[#929395] text-[16px] text-center mt-[2px] ml-[5px]"
                  defaultValue={4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
