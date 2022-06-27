import React from 'react'
import Categories from '../Components/CategoriesBar'
import FreeShipping from '../Components/FreeShipping'
import img1 from '../Components/imgs/image 1.png'
import ProductCard from '../Components/ProductCard'
import ProfileBanner from '../Components/ProfileBanner'

const Home = () => {

  return (
    <div className='mx-[144px] mt-[11px]'>
        <div className='flex'>
            <Categories />
            <div className='w-[100%] ml-[11px] grid grid-cols-3'>
            <div className="col-span-3 col-start-1  ">
                <img src={img1} className="h-[100%] w-[100%]"/>
            </div>
            <div className="col-span-1 col-start-1 mt-[5px]">
                <img src={img1} className="h-[100%] w-[100%]"/>
            </div>
            <div className="col-span-1 col-start-2 mt-[5px] ml-[5px]">
                <img src={img1} className="h-[100%] w-[100%]"/>
            </div>
            <div className="col-span-1 col-start-3 mt-[5px] ml-[5px]">
                <img src={img1} className="h-[100%] w-[100%]"/>
            </div>
            </div>
        </div>
        <div className='mt-[8px] w-[1164px] grid grid-cols-4'>
            <FreeShipping className="col-span-1 col-start-1"/>
            <FreeShipping className="col-span-1 col-start-2"/>
            <FreeShipping className="col-span-1 col-start-3"/>
            <FreeShipping className="col-span-1 col-start-4"/>
        </div>
        <ProfileBanner className="mt-[19px]"/>
        <div className='mt-[19px] w-[1164px] grid grid-cols-4'>
            <ProductCard className="col-span-1 col-start-1"/>
            <ProductCard className="col-span-1 col-start-2"/>
            <ProductCard className="col-span-1 col-start-3"/>
            <ProductCard className="col-span-1 col-start-4"/>
        </div>
    </div>
  )
}

export default Home