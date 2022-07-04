import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import {
  selectAllOfProducts,
  selectAllProducts,
} from "../redux/product/selector";
import StarRatings from "react-star-ratings";
import { IoMdSearch } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { getProductsPageSize } from "../redux/product/action";

function ProductList() {
  const [query, setQuery] = useState("");
  const data = useSelector(selectAllOfProducts);
  console.log(data);
  const [order, setOrder] = useState("ASC");
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(4);

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

  const sorting = (col) => {
    if (order === "ASC") {
      // const sorted = [...data].sort((a,b) => {
      //   a[col] > b[col] ? 1 : -1
      // })
      // console.log(sorted);
      // setUser(sorted)
      setOrder("DSC");
    }
    if (order === "DSC") {
      // const sorted = [...data].sort((a,b) => {
      //   a[col] < b[col] ? 1 : -1
      // })
      // setUser(sorted)
      setOrder("ASC");
    }
  };

  console.log(data);

  useEffect(() => {
    getProductsPageSize(dispatch, page, size);
  }, [size]);


  return (
    <div className="w-[1217px] h-[945px] bg-[#F5F7FA]">
      <div className="relative">
        <p className="w-[226px] h-[18px] ml-[32px] pt-[25px] font-arial not-italic font-medium text-[18px] leading-[21px] text-[#929395]">
          DashBoard / Product
        </p>
        <p className="w-[227px] h-[31px] ml-[31px] pt-[15px] mt-[21px] font-WorkSans not-italic font-semibold text-[35px] leading-[41px]">
          Product
        </p>
        <button className="absolute w-[150px] h-[40px] right-[39px] top-[55px] font-WorkSans not-italic font-semibold text-[20px] leading-[23px] bg-[#FFD333] rounded-[5px]">
          New product
        </button>
      </div>
      <div>
        <div className="w-[1153px] h-[760px] ml-[32px] shadow-user mt-[47px] bg-[#FFFFFF] pt-[0.1px]">
          <div className="w-[1093px] h-[51.08px] flex border-[1.5px] border-[#C4C4C4] ml-[30px] mt-[43.92px]">
            <IoMdSearch
              className="w-[30px] h-[30px] ml-[24px] mt-[10px]"
              color="#929395"
            />
            <input
              className="w-[1060px] text-[20px] focus:outline-none"
              type="text"
              placeholder="Search product"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <hr className="w-[1153px] h-0 border border-solid border-[#6b6b6b] mt-[30.9px]" />
          <table>
            <thead>
              <tr className="w-[100px] h-[20.3px]">
                <th className="w-[50px] h-[20.3px] pl-[31px]">ID</th>
                <th onClick={() => sorting("name")} className="text-left pl-8">
                  Product
                </th>
                <th onClick={() => sorting("brand")} className="text-center">
                  Brand
                </th>
                <th onClick={() => sorting("category")} className="text-center">
                  Category
                </th>
                <th
                  onClick={() => sorting("countInStock")}
                  className="text-center"
                >
                  Stock
                </th>
                <th onClick={() => sorting("price")} className="text-center">
                  Price
                </th>
                <th onClick={() => sorting("rating")} className="text-center">
                  Rating
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data
                ?.filter((val) => {
                  if (query === "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(query.toLowerCase()) ||
                    val.brand.toLowerCase().includes(query.toLowerCase()) ||
                    val.category.toLowerCase().includes(query.toLowerCase()) ||
                    val.countInStock.toString() === query ||
                    val.price.toString() === query
                  ) {
                    return val;
                  }
                })
                .map((product, index) => (
                  <tr
                    key={product?.id}
                    className="text-center border-t border-solid border-[#929395] h-[50px]"
                  >
                    <td className="w-[100px] text-[20px] leading-[23px]">
                      {index + 1}
                    </td>
                    <td className="relative w-[100px] text-[20px] leading-[23px]">
                      <div>
                        <img
                          className="absolute w-[60px] h-[60px] mt-[14px] ml-[26px] mb-[13px]"
                          src={product?.images[0]?.url}
                        />
                        <div className="flex flex-row">
                          <p className=" ml-[105px] mt-[21px] truncate">
                            {product?.name}
                          </p>
                        </div>
                        <p className=" ml-[48px] mt-[-10px] font-arial font-medium not-italic text-[18px] w-[174px] leading-[21px]">
                          ID: {product?.id}
                        </p>
                      </div>
                    </td>
                    <td className="w-[100px] text-[20px] leading-[23px]">
                      {product?.brand}
                    </td>
                    <td className="w-[100px] text-[20px] leading-[23px]">
                      {product?.category}
                    </td>
                    <td className="w-[100px] text-[20px] leading-[23px]">
                      {product?.countInStock}
                    </td>
                    <td className="w-[100px] text-[20px] leading-[23px]">
                      {product?.price}
                    </td>
                    <td className="w-[100px] text-[20px] leading-[23px]">
                      <StarRatings
                        rating={parseInt(product?.rating)}
                        starHoverColor="#FFD333"
                        starRatedColor="#FFD333"
                        starDimension="20px"
                        starSpacing="0"
                      />
                    </td>
                    <td className="w-[100px] mt-[32px] flex flex-row justify-center">
                      <FiEdit
                        className=" w-[25px] h-[25px] cursor-pointer"
                        color="#387B18"
                      />
                      <FiTrash2
                        className="w-[25px] h-[25px] ml-[30px] cursor-pointer"
                        color="#F02020"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex justify-between">
            <div className="flex mt-[20px] ml-[30px]">
              <button
                onClick={Back}
                className="w-[32px] h-[32px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px] flex justify-center align-middle
                hover:bg-[#919EAB] hover:text-[#FFD333]
                    "
              >
                <RiArrowLeftSLine size={20} className="my-auto" />
              </button>
              {pages.map((pg, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCur(pg?.page);
                    getProductsPageSize(dispatch, pg.page, size);
                  }}
                  className={`w-[32px] h-[32px] ml-[8px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px] 
                ${cur === pg.page && " bg-yellow-400"}`}
                >
                  {pg?.page}
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
                defaultValue={10}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
