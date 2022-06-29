import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import Login from "./auth/Login";
import { Avatar, Dropdown, Image, Menu, Modal } from "antd";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccessToken,
  selectAvatar,
  selectRefreshToken,
} from "../redux/auth/selector";
import { logout } from "../redux/auth/action";

const TopBar = ({
  modalLogin,
  setModalLogin,
  modalRegister,
  setModalRegister,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accessToken = useSelector(selectAccessToken);
  const userAvatar = useSelector(selectAvatar);
  const refreshToken = useSelector(selectRefreshToken);

  console.log(refreshToken);

  const menu1 = (
    <Menu
      className="text-[30px]"
      items={[
        {
          key: "1",
          label: (
            <div className="flex items-center text-[20px]">
              <AiOutlineLogin />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="text-[20px] ml-[10px] text-[black]"
                onClick={(e) => {
                  e.preventDefault();
                  setModalLogin(!modalLogin);
                }}
              >
                Login
              </a>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div className="flex items-center text-[20px]">
              <AiOutlineUserAdd />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="text-[20px] ml-[10px] text-[black]"
                onClick={(e) => {
                  e.preventDefault();
                  setModalRegister(!modalRegister);
                }}
              >
                Register
              </a>
            </div>
          ),
        },
      ]}
    />
  );

  const menu2 = (
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
                }}
              >
                My Profile
              </a>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div className="flex items-center text-[20px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="text-[20px] ml-[10px] text-[black]"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Order History
              </a>
            </div>
          ),
        },
        {
          key: "3",
          label: (
            <div className="flex items-center text-[20px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="text-[20px] ml-[10px] text-[black]"
                onClick={(e) => {
                  e.preventDefault();
                  logout(dispatch, refreshToken);
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
    <div className="w-full flex-col bg-mainbar">
      <div className="w-full h-[38px] bg-menutopbar flex items-center">
        <a href="#" className="text-[#5B5B5B] text-[16px] ml-[163px] color">
          About Us
        </a>
        <a href="#" className="text-[#5B5B5B] text-[16px] ml-[14.2px]">
          Contacts
        </a>
        <a href="#" className="text-[#5B5B5B] text-[16px] ml-[14.2px]">
          Store
        </a>
        <a href="#" className="text-[#5B5B5B] text-[16px] ml-[14.2px]">
          Track Orders
        </a>
      </div>
      <div className="flex items-center h-[124px] justify-between ml-[163px] mr-[171px]">
        <a
          className="font-bold text-[white] hover:text-[white] font-redrose text-[36px] mb-0"
          onClick={() => {
            navigate("/");
          }}
        >
          SHOP APP
        </a>
        <div className="w-[748px] flex bg-[#C4C4C4] ml-[29.34px] h-[50.35px] items-center rounded-[5px] justify-between">
          <div className="flex items-center">
            <HiOutlineMenuAlt1 className="justify-center text-[30px] text-[#4B4B4B] " />
            <p className="font-bold text-[25px] text-[#4B4B4B] pr-[12px] border-r-[1px] mb-0">
              Categories
            </p>
            <input
              type="search"
              className="ml-[12px] h-[29px] w-[270px] bg-[#C4C4C4] text-[#4B4B4B] border-none"
              placeholder="Search Items"
            />
          </div>
          <BiSearch className="text-[30px] cursor-pointer text-[#4B4B4B] mr-[9.37px]" />
        </div>
        <div className="flex items-center ">
          <MdOutlineShoppingCart className="text-[40px] ml-[30px] mb-0" />
          {accessToken ? (
            <Dropdown overlay={menu2} placement="bottom" arrow>
              <Avatar
                src={userAvatar}
                size={70}
                style={{ marginLeft: 32.14 }}
              />
            </Dropdown>
          ) : (
            <Dropdown overlay={menu1} placement="bottom" arrow>
              <FiUser className="text-[40px] ml-[32.14px]" />
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
