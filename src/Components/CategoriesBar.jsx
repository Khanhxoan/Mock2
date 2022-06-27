import React, { useEffect, useLayoutEffect } from "react";
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../redux/product/action";
import { selectAllCategories, selectAllProducts } from "../redux/product/selector";
import { useNavigate } from "react-router-dom"
import axios from "../redux/axios";
import { getCategoriesFailed, getCategoriesSuccess } from "../redux/product/reducer";

const Categories = () => {
  
  const allCategories = useSelector(selectAllCategories)
  const dispatch = useDispatch()
  
  useEffect(() => {
    getCategories(dispatch);
  }, [])
  
  const navigate = useNavigate()

  const handleGetProducts = async(category) => {
    await getProducts(dispatch, category)
    navigate("/productpage")
  }
  
  return (
    <div>
      <nav>
        <div className="w-[280px] bg-[#3D464D] ">
          <header className="flex items-center h-[91px]">
            <HiOutlineMenuAlt1 className='text-[30px] ml-[22.79px] text-[white] '/>
            <p className="text-[32px] ml-[20.04px] mb-0 text-[white] font-[700] leading-[36.8px]">Categories</p>
          </header>
          <ul className="items-center">
            {allCategories?.map((category) => {
              return (
                <li >
                  <a className="categories-a" href="#" onClick={() => handleGetProducts(category)}>
                    <p className="categories-pitem">{category}</p>
                    <IoIosArrowForward className="text-[24px] font-extrabold"/>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Categories;

