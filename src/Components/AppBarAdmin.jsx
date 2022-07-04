import React from 'react'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import {BiSearch } from 'react-icons/bi'
import { IoMdNotifications } from "react-icons/io"
import { selectAvatar, selectDeviceId, selectRefreshToken, selectUsernameAuth } from '../redux/auth/selector';
import { useSelector,useDispatch } from 'react-redux'
import { Avatar, Menu } from "antd"
import { logout } from '../redux/auth/action';
import { useNavigate } from 'react-router-dom'
import { Dropdown } from 'antd'

const AppBarAdmin = ({toggle, setToggle}) => {
  const adminAvatar = useSelector(selectAvatar);
  const adminName = useSelector(selectUsernameAuth)
  const dispatch = useDispatch();
  const refreshToken = useSelector(selectRefreshToken);
  const deviceId = useSelector(selectDeviceId);
  const navigate = useNavigate()

  const menu = (
    <Menu
      className="text-[30px]"
      items={[
        {
          key: "1",
          label: (
            <div className="flex items-center text-[20px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="text-[20px] ml-[10px] text-[black]"
                onClick={(e) => {
                  e.preventDefault();
                  logout(dispatch, refreshToken, deviceId, navigate);
                }}
              >
                Logout
              </a>
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <div className='h-[78px] w-full flex justify-between items-center bg-[#FFFFFF]'>
        <div className='flex items-center'>
          <HiOutlineMenuAlt1 className='text-[30px] ml-[30px] text-[#000000] cursor-pointer' onClick={() => setToggle(!toggle)}/>
          <div className='w-[292px] h-[42.55px] flex bg-[#C4C4C4] ml-[29.34px] items-center rounded-[5px]'>
                <BiSearch className='text-[30px] cursor-pointer text-[#4B4B4B] mr-[9.37px] ml-[13.74px]'/>
                <div className='flex items-center'>
                    <input type="search" className='ml-[12px] h-[29px] bg-[#C4C4C4] text-[#4B4B4B] border-none' placeholder='Search Items' />
                </div>
            </div>
        </div>
        <div className='flex mb-0 mr-[40px] items-center'>
          <IoMdNotifications className='text-[35px] cursor-pointer'/>
          <Dropdown overlay={menu} placement="bottom" arrow>
            <Avatar shape='square' src={adminAvatar} size={50} style={{marginLeft: 20}} className="cursor-pointer"/>
          </Dropdown>
          <div className='flex-col mt-[5px] ml-[12.69px]'>
            <p className='text-[18px] leading-[20.7px] font-[400] mb-0'>{adminName}</p>
            <p className='text-[15px] leading-[17px] font-[400] mb-0'>Admin</p>
          </div>
        </div>
    </div>
  )
}

export default AppBarAdmin