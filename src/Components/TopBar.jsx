import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { Avatar, Dropdown, Image, Menu, Modal } from "antd";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccessToken,
  selectAvatar,
  selectDeviceId,
  selectRefreshToken,
} from "../redux/auth/selector";
import { logout } from "../redux/auth/action";
import CartPopup from "./CartPopup";
import { selectAllCart, selectNewCart } from "../redux/Cart/selectors";
import { getCartById } from "../redux/Cart/actions";
import { searchProduct } from "../redux/product/action";
import { getAllOrder } from "../redux/Orders/actions";


const TopBar = ({
  modalLogin,
  setModalLogin,
  modalRegister,
  setModalRegister,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [flag, setFlag] = useState(false);
  const [keyword, setKeyword] = useState("");

  const accessToken = useSelector(selectAccessToken);
  const userAvatar = useSelector(selectAvatar);
  const refreshToken = useSelector(selectRefreshToken);
  const deviceId = useSelector(selectDeviceId);

  console.log(userAvatar);

  console.log(refreshToken);
  const toggleCartModal = () => {
    setModal(!modal);
  };
  const newCart = useSelector(selectNewCart);
  const cart = useSelector(selectAllCart);

  // console.log(cart.length)

  useEffect(() => {
    getCartById(accessToken, cart[0]?.data?.cart.id, dispatch);
    setFlag(!flag);
  }, [cart]);

  const handleSearch = () => {
    searchProduct(dispatch, keyword);
    navigate("/productsearch", { state: { keyword: keyword } });
  };
  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      searchProduct(dispatch, keyword);
      navigate("/productsearch", { state: { keyword: keyword } });
    }
  };

  const handleMyprofile = async () => {
    await getAllOrder(accessToken, dispatch);
    navigate('/userdetail/myprofile');
  };

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
              <Link
                className="text-[20px] ml-[10px] text-[black]"
                to="/userdetail/myprofile"
                onClick={handleMyprofile}
              >
                My Profile
              </Link>
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
        <Link
          className="font-bold text-[white] hover:text-[white] font-redrose text-[36px] mb-0"
          to="/"
        >
          SHOP APP
        </Link>
        <div className="w-[748px] flex bg-[#C4C4C4] ml-[29.34px] h-[50.35px] items-center rounded-[5px] justify-between">
          <div className="flex items-center">
            <HiOutlineMenuAlt1 className="justify-center text-[30px] text-[#4B4B4B] " />
            <p className="font-bold text-[25px] text-[#4B4B4B] pr-[12px] border-r-[1px] mb-0">
              Categories
            </p>
            <input
              onKeyDown={(e) => handleSubmit(e)}
              type="search"
              className="ml-[12px] h-[29px] w-[270px] bg-[#C4C4C4] text-[#4B4B4B] focus:outline-none text-[20px]"
              placeholder="Search Items"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <BiSearch
            onClick={() => handleSearch()}
            className="text-[30px] cursor-pointer text-[#4B4B4B] mr-[9.37px]"
          />
        </div>
        <div className="flex items-center ">
          <MdOutlineShoppingCart
            className="text-[40px] ml-[30px] mb-0 cursor-pointer"
            onClick={() => toggleCartModal()}
          />
          {newCart?.data?.items.length >= 1 ? (
            <span
              className="w-[27px] h-[27px]  rounded-full bg-[#FFFDFD] text-[#8C7211] text-[14px] 
          ml-[-20px] mt-[-30px]
          font-bold font-roboto text-center"
            >
              <p className="mt-[3px]">{newCart?.data?.items.length}</p>
            </span>
          ) : (
            <span
              className="w-[27px] h-[27px] hidden rounded-full bg-[#FFFDFD] text-[#8C7211] text-[14px] 
          ml-[-20px] mt-[-30px]
          font-bold font-roboto text-center"
            >
              <p className="mt-[3px]">{newCart?.data?.items.length}</p>
            </span>
          )}
          {accessToken ? (
            <Dropdown overlay={menu2} placement="bottom" arrow>
              <Avatar
                src={userAvatar}
                size={70}
                style={{ marginLeft: 32.14 }}
                className="cursor-pointer"
              />
            </Dropdown>
          ) : (
            <Dropdown overlay={menu1} placement="bottom" arrow>
              <FiUser className="text-[40px] ml-[32.14px] cursor-pointer" />
            </Dropdown>
          )}
        </div>
      </div>
      {modal && newCart?.data?.items.length >= 1 ? (
        <div className="w-[1440px] h-screen top-[160px] left-0 right-0 bottom-0 fixed z-50">
          <div className="w-full h-full top-[160px] left-0 right-0 bottom-0 fixed  z-50 bg-[#1111114D]">
            <div className="absolute left-[950px] right-[177px] w-[360px] max-h-[500px] overflow-scroll">
              <CartPopup toggleCartModal={toggleCartModal} />
            </div>
          </div>
        </div>
      ) : (
        modal && (
          <div
            onClick={toggleCartModal}
            className="w-[1440px] h-screen top-[160px] left-0 right-0 bottom-0 fixed  z-50 "
          >
            <div className="w-full h-full top-[160px] left-0 right-0 bottom-0 fixed  z-50 bg-[#1111114D]">
              <div className="absolute left-[950px] right-[177px] top-[8px] w-[360px]">
                <div className="absolute w-[338px] h-[113px] bg-[#FFF9F9] rounded-[5px] shadow-empty text-center">
                  <p className="h-[19px] w-[328px] mt-[45px]">
                    Your shopping cart is empty!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default TopBar;
