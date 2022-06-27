import React, { useState } from "react";
import "antd/dist/antd.css";
import Img from "../imgs/shopApp.png";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, sendCode } from "../../redux/auth/action";

function Forgot({modalForgotPass, setModalForgotPass, modalLogin, setModalLogin}) {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    deviceId: "",
  });

  const onChangeInput = function (event) {
    const { name, value } = event.target;
    if (name === "email") {
      setUser({ ...user, [name]: value, ["deviceId"]: `deviceId-${value}` });
    } else {
      setUser({ ...user, ["password"]: value });
    }
  };

  const handleSendCode = (e) => {
    e.preventDefault();
    dispatch(sendCode(user.email));
  };

  const handleRecover = (e) => {
    e.preventDefault();
    dispatch(login(user, dispatch, nav));
  };

  return (
    <div className="relative w-[832px] h-[395px] rounded-[20px] shadow-login">
      <div className="absolute w-[416px] h-[395px] bg-[white] rounded-l-lg">
        <form
          onSubmit={handleRecover}
          className="absolute w-[319.17px] h-[247px] left-[47px] top-[51px]"
        >
          <p className="h-[28px] mb-0 not-italic font-bold text-[24px] leading-7 font-roboto">
            Forgot Password?
          </p>
          <p className="not-italic font-normal text-[12px] leading-[14px] mt-[7px] mb-0 font-roboto">
            Please enter your email to recover your password
          </p>
          <div className=" w-[295.72px] h-[24px] mt-[31px] ml-[11.64px]">
            <div className="flex">
              <input
                className="w-[143px] h-[19px] ml-[7.36px] font-roboto text-[#757575] focus:outline-none"
                type="email"
                name="email"
                placeholder="Email@mail.com"
                value={user.email}
                onChange={onChangeInput}
              />
              <button
                onClick={handleSendCode}
                className="w-[89px] h-[14px] ml-[52px] not-italic font-bold my-auto text-[12px] font-roboto text-right leading-[14px]"
              >
                Send Code
              </button>
            </div>
            <hr className="w-[295.72px] h-0 border border-solid border-[#6b6b6b] mt-[5px]" />
          </div>
          <div className="w-[295.72px] h-[24px] mt-[28px] ml-[11.64px]">
            <input
              className="w-[166px] h-[19px] ml-[7.36px] font-roboto text-[#757575] focus:outline-none"
              type="text"
              name="code"
              placeholder="Code"
              value={user.code}
              onChange={onChangeInput}
            />
            <hr className="w-[295.72px] h-0 border border-solid border-[#6b6b6b] mt-[5px]" />
          </div>
          <div className="w-[295.72px] h-[37px] ml-[11.64px] mt-[21px] top-[228px]">
            <button className="w-[295.72px] h-[37px] text-center not-italic font-bold text-[24px] font-roboto leading-7 bg-[#FFD333] rounded-[5px]">
              Recover Password
            </button>
          </div>
          <div className=" w-[295px] h-[16px] text-center mt-[13px] ml-[11.64px]">
            <a
              className="w-[295px] h-[16px] not-italic font-bold text-[14px] leading-4 text-[#646464] font-roboto"
              onClick={(e) => {
                e.preventDefault();
                setModalForgotPass(!modalForgotPass);
                setModalLogin(!modalLogin);
              }}
            >
              Login
            </a>
          </div>
        </form>
      </div>
      <div className="absolute w-[416px] h-[395px] left-[416px] top-[0px]">
        <img className="rounded-r-lg" src={Img} alt="Sample image" />
      </div>
      <button onClick={() => {
        setModalForgotPass(!modalForgotPass)
        }}> 
        <CgClose className="box-border text-[24px] absolute w-[31px] h-[31px] left-[791px] top-[10px] bg-[#ffffff] rounded-[15px] shadow-login border-solid border-[#e4e4e4]" />
      </button>
    </div>
  );
}

export default Forgot;
