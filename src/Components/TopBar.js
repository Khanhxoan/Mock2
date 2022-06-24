import React, { useState } from 'react'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import {MdOutlineShoppingCart } from 'react-icons/md'
import { FiUser } from 'react-icons/fi'
import Login from './auth/Login'
import { Dropdown, Menu, Modal } from 'antd'
import { AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai'

const TopBar = () => {
    const onSearch = (value) => console.log(value);
    const [showModal, setShowModal] = useState(false)

    const menu = (
        <Menu
            className='text-[30px]'
          items={[
            {
              key: '1',
              label: (
                <div className='flex items-center text-[20px]'>
                    <AiOutlineLogin />
                    <a target="_blank" rel="noopener noreferrer" href="#" className='text-[20px] ml-[10px] text-[black]' onClick={(e) => {
                        e.preventDefault()
                    }}>
                    Login
                    </a>
                </div>
              ),
            },
            {
              key: '2',
              label: (
                <div className='flex items-center text-[20px]'>
                    <AiOutlineUserAdd />
                    <a target="_blank" rel="noopener noreferrer" href="#" className='text-[20px] ml-[10px] text-[black]' onClick={(e) => {
                        e.preventDefault()
                    }} >
                    Register
                    </a>
                </div>
              ),
            },
          ]}
        />
      );


  return (
    <div className='w-[1440px] flex-col bg-mainbar'>
        <div className='w-[1440px] h-[38px] bg-menutopbar flex items-center'>
            <a href='#' className='text-[#5B5B5B] text-[16px] ml-[163px] color'>About Us</a>
            <a href='#' className='text-[#5B5B5B] text-[16px] ml-[14.2px]'>Contacts</a>
            <a href='#' className='text-[#5B5B5B] text-[16px] ml-[14.2px]'>Store</a>
            <a href='#' className='text-[#5B5B5B] text-[16px] ml-[14.2px]'>Track Orders</a>
        </div>  
        <div className='flex items-center h-[124px]'>
            <p className='font-bold font-redrose text-[36px] ml-[163px] mb-0'>SHOP APP</p>
            <div className='w-[748px] flex bg-[#C4C4C4] ml-[29.34px] h-[50.35px] items-center rounded-[5px] justify-between'>
                <div className='flex items-center'>
                    <HiOutlineMenuAlt1 className='justify-center text-[30px] text-[#4B4B4B] '/>
                    <p className='font-bold text-[25px] text-[#4B4B4B] pr-[12px] border-r-[1px] mb-0'>Categories</p>
                    <input type="search" className='ml-[12px] h-[29px] w-[270px] bg-[#C4C4C4] text-[#4B4B4B] border-none' placeholder='Search Items' />
                </div>
                <BiSearch className='text-[30px] cursor-pointer text-[#4B4B4B] mr-[9.37px]'/>
            </div>
            <MdOutlineShoppingCart className='text-[40px] ml-[30px]' />
            <Dropdown overlay={menu} placement="bottom" arrow>
                <FiUser className='text-[40px] ml-[32.14px]'/>
            </Dropdown>
            {showModal && <Login/>}
        </div>
    </div>
  )
}

export default TopBar