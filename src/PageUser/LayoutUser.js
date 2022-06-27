import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "../Components/auth/Login";
import TopBar from "../Components/TopBar";
import { selectAllCategories } from "../redux/product/selector";
import { Outlet } from "react-router-dom";
import "./modal.css";
import { getCategories } from "../redux/product/action";
import Register from "../Components/auth/Register";
import Forgot from "../Components/auth/Forgot";

const LayoutUser = () => {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [modalForgotPass, setModalForgotPass] = useState(false);

  return (
    <div>
      <header>
        <TopBar
          modalLogin={modalLogin}
          setModalLogin={setModalLogin}
          modalRegister={modalRegister}
          setModalRegister={setModalRegister}
    />
      </header>
      <Outlet />
      {modalLogin && (
        <div className="flex w-[1440px] h-screen bottom-0 fixed bg-[#1111114D] ">
          <div className="mx-auto mt-[258px] overflow">
            <Login
              modalLogin={modalLogin}
              setModalLogin={setModalLogin}
              modalForgotPass={modalForgotPass}
              setModalForgotPass={setModalForgotPass}
              modalRegister={modalRegister}
              setModalRegister={setModalRegister}
            />
          </div>
        </div>
      )}
      {modalRegister && (
        <div className="flex w-[1440px] h-screen bottom-0 fixed bg-[#1111114D] ">
          <div className="mx-auto mt-[258px] overflow">
            <Register
              modalRegister={modalRegister}
              setModalRegister={setModalRegister}
              modalLogin={modalLogin}
              setModalLogin={setModalLogin}
            />
          </div>
        </div>
      )}
      {modalForgotPass && (
        <div className="flex w-[1440px] h-screen bottom-0 fixed bg-[#1111114D] ">
          <div className="mx-auto mt-[258px] overflow">
            <Forgot
              modalForgotPass={modalForgotPass}
              setModalForgotPass={setModalForgotPass}
              modalLogin={modalLogin}
              setModalLogin={setModalLogin}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutUser;
