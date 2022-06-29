import React, { useState } from "react";
import AppBarAdmin from "../Components/AppBarAdmin";
import NavigationBarAdmin from "../Components/NavigationBarAdmin";
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#E5E5E5]">
      {toggle ? (
        <div className="flex-col w-full">
          <AppBarAdmin toggle={toggle} setToggle={setToggle} />
          <Outlet />
        </div>
      ) : (
        <div className="flex">
          <div>
            <div className="logo" />
            <NavigationBarAdmin />
          </div>
          <div className="flex-col w-full">
            <AppBarAdmin toggle={toggle} setToggle={setToggle} />
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutAdmin;
