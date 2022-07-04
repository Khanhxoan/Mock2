import React, { useState } from "react";
import "antd/dist/antd.css";
import { CgClose } from "react-icons/cg";
import { useDispatch } from "react-redux";
import imgApp from "../imgs/shopApp.png"
import { login } from "../../redux/auth/action";
import { useNavigate } from "react-router-dom";

function Login({modalLogin, setModalLogin, modalForgotPass, setModalForgotPass, modalRegister, setModalRegister}) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    deviceId: "",
  });
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleLogin =  async (e) => {
    e.preventDefault();
    await login(user, dispatch, nav);
    setModalLogin(!modalLogin)
  };

  const onChangeInput = function (event) {
    const { name, value } = event.target;
    console.log(value);
    if (name === "email") {
      setUser({ ...user, [name]: value, ["deviceId"]: `deviceId-${value}` });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  return (
    <div className="relative w-[832px] h-[395px] rounded-[20px] shadow-login">
      <div className="absolute w-[416px] h-[395px] bg-[white] rounded-l-lg ">
        <form
          onSubmit={handleLogin}
          className="absolute w-[319.17px] h-[247px] left-[47px] top-[51px]"
        >
          <p className="not-italic font-bold text-[24px] leading-7 font-roboto">
            Welcome to Shop App
          </p>
          <div className=" w-[295.72px] h-[24px] mt-[52px] ml-[11.64px]">
            <input
              className="w-[143px] h-[19px] ml-[7.36px] font-roboto text-[#757575] focus:outline-none"
              name="email"
              type="email"
              placeholder="Email@mail.com"
              value={user.email}
              onChange={onChangeInput}
            />
            <hr className="w-[295.72px] h-0 border border-solid border-[#6b6b6b] mt-[5px]" />
          </div>
          <div className="w-[295.72px] h-[24px] mt-[28px] ml-[11.64px]">
            <div className="flex">
              <input
                className="w-[166px] h-[19px] ml-[7.36px] font-roboto text-[#757575] focus:outline-none "
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={onChangeInput}
              />
              <a
                className="w-[48px] h-[14px] ml-[70px] not-italic font-bold text-[12px] text-[#646464] font-roboto my-auto leading-[14px]"
                onClick={(e) => {
                  e.preventDefault();
                  setModalLogin(!modalLogin)
                  setModalForgotPass(!modalForgotPass)
                }}
              >
                Forgot?
              </a>
            </div>
            <hr className="w-[295.72px] h-0 border border-solid border-[#6b6b6b] mt-[5px]" />
          </div>
          <div className="w-[295.72px] h-[37px] ml-[11.64px] mt-[21px] top-[228px]">
            <button className="w-[295.72px] h-[37px] text-center not-italic font-bold text-[24px] font-roboto leading-7 bg-[#FFD333] rounded-[5px]">
              Login
            </button>
          </div>
          <div className=" w-[295px] h-[16px] text-center mt-[17px] ml-[11.64px]">
            <a
              className="w-[295px] h-[16px] not-italic font-bold text-[14px] leading-4 text-[#646464] font-roboto"
              onClick={(e) => {
                e.preventDefault();
                setModalLogin(!modalLogin)
                setModalRegister(!modalRegister)
              }}
            >
              Create An Account
            </a>
          </div>
        </form>
      </div>
      <div className="absolute w-[416px] h-[395px] left-[416px] top-[0px]">
        <img className="rounded-r-lg" src={imgApp} alt="Sample image" />
      </div>
      <button>
        <CgClose onClick={() => {setModalLogin(!modalLogin)}} className="box-border text-[24px] absolute w-[31px] h-[31px] left-[791px] top-[10px] bg-[#ffffff] rounded-[15px] shadow-login border-solid border-[#e4e4e4]"  />
      </button>
    </div>
  );
}

export default Login;