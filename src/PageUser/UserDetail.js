import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import NavTabs from '../Components/NavTabs';
import { logout } from '../redux/auth/action';
import {
  selectAccessToken,
  selectAuthen,
  selectDeviceId,
  selectRefreshToken,
} from '../redux/auth/selector';
import { getAllOrder } from '../redux/order/action';

function UserDetail() {
  const nav = useNavigate();
  const accessToken = useSelector(selectAccessToken);
  const dispatch = useDispatch();
  const refreshToken = useSelector(selectRefreshToken);
  const deviceId = useSelector(selectDeviceId);
  const auth = useSelector(selectAuthen);
  console.log(auth);
  const handleMyprofile = async () => {
    await getAllOrder(accessToken, dispatch);
    nav('/userdetail/myprofile');
  };
  const handleOrder = async () => {
    await getAllOrder(accessToken, dispatch);
    nav('/orderhistory');
  };
  const handleLogout = async () => {
    await logout(refreshToken, deviceId);
    nav('/');
  };
  return (
    <div>
      <NavTabs />
      <div className="w-[215px] h-[47px] mt-[19px] ml-[159px]">
        <p className="font-bold text-[40px] text-[#000000] font-roboto not-italic leading-[47px]">
          My Account
        </p>
      </div>
      <div className="relative w-[1152px] h-[674px] mt-[23px] ml-[144px]">
        <div className="absolute w-[280px] h-[673px] shadow-userdetail rounded-[5px] border-[1px] bg-[#FFFEFE]">
          <div className="w-[141.91px] h-[33px] mt-[29px] ml-[38.13px]">
            <p className="not-italic font-roboto font-bold text-[28px] leading-[33px]">
              Navigation
            </p>
          </div>
          <div>
            <a>
              <p
                onClick={handleMyprofile}
                className=" w-[113.74px] h-[28px] mt-[29px] ml-[36.04px] hover:text-[#FFD333] font-roboto text-[24px] not-italic text-[#868484] font-medium leading-7"
              >
                My profile
              </p>
            </a>
          </div>
          <div>
            <a>
              <p
                onClick={handleOrder}
                className=" w-[149.21px] h-[28px] mt-[18px] ml-[36.04px] hover:text-[#FFD333] font-roboto text-[24px] not-italic text-[#868484] font-medium leading-7"
              >
                Order History
              </p>
            </a>
          </div>
          <div>
            <a className="" href="#">
              <p
                onClick={handleLogout}
                className=" w-[79.3px] h-[28px] mt-[24px] ml-[36.04px] hover:text-[#FFD333] font-roboto text-[24px] not-italic text-[#868484] font-medium leading-7"
              >
                Logout
              </p>
            </a>
          </div>
        </div>
        <div className="absolute ml-[315px] w-[835px] h-[672.58px] shadow-userdetail rounded-[5px] border-[1px] bg-[#FFFEFE]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
