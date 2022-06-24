import React, { useEffect } from "react";
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../redux/product/action";

const Categories = () => {
  const dispatch = useDispatch()
  const allCategories = useSelector((state) => state.products.categories.allCategories.data)
  console.log(allCategories);

  const handleGetProducts = async(category) => {
    await getProducts(dispatch, category)
  }
  useEffect(() => {
    getCategories(dispatch);
  },[])
  console.log(allCategories);
  return (
    <div>
      <nav>
        <div className="h-[628px] w-[280px] bg-[#3D464D] ">
          <header className="flex items-center h-[91px]">
            <HiOutlineMenuAlt1 className='text-[30px] ml-[22.79px] text-[white] '/>
            <p className="text-[32px] ml-[20.04px] mb-0 text-[white] font-[700] leading-[36.8px]">Categories</p>
          </header>
          <ul className="items-center">
            {allCategories.map((category) => {
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
