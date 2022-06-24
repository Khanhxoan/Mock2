import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdDashboard } from "react-icons/md"
import { FiDatabase, FiUser, FiShoppingCart, FiSettings } from "react-icons/fi"

const NavigationBarAdmin = () => {
  const [dropProduct, setDropProduct] = useState ('false')
  const handleDropSubmenuProduct = () => {
    setDropProduct(!dropProduct)
  }

  const [dropUser, setDropUser] = useState ('false')
  const handleDropSubmenuUser = () => {
    setDropUser(!dropUser)
  }

  const [dropOrder, setDropOrder] = useState ('false')
  const handleDropSubmenuOrder = () => {
    setDropOrder(!dropOrder)
  }
  return (
    <>
      <div className="relative bg-[#FFD333] h-[78px] w-[224.92px] flex items-center ">
        <p className="absolute ml-[10.13px] text-[25px] font-bold leading-[31.23px] font-redrose mb-0">
          SHOP APP
        </p>
        <p className="absolute ml-[161.09px] text-[10px] font-bold mr-[10.13px] mb-0 pl-[10.13px] pr-[10.13px] pt-[4px] pb-[3.04px] bg-[white] rounded-[5px] ">
          ADMIN
        </p>
      </div>
      <div className="h-[1083px] w-[224.92px] bg-[#3D464D] ">
        <div>
            <p className="text-[12px] font-bold text-[#C4C4C4] pt-[22px] pl-[10.13px] pb-[18px]">APPLICATION</p>
        </div>      
        <ul className="items-center">
          <li>
            <a className="item-menuadmin" href="#">
                <div className="flex items-center">
                    <MdDashboard />
                    <p className="pmenu-admin">Dashboard</p>
                </div>
                <IoIosArrowForward className="text-[24px] font-extrabold" />
            </a>
          </li>
          <li >
            <div>
              <a className="item-menuadmin" href="#" onClick={handleDropSubmenuProduct}>
                <div className="flex items-center">
                  <FiDatabase />
                  <p className="pmenu-admin">Product</p>
                </div>
                  <IoIosArrowForward className={dropProduct ? "text-[24px] font-extrabold rotate-0" : "text-[24px] font-extrabold rotate-90"} />
              </a>
            </div>
            <ul className={dropProduct ? "static hidden" : "static block"}>
              <li className="lisubmenu-admin">
                <a href="#" className="psubmenu-admin">Product List</a>
              </li>
              <li className="lisubmenu-admin">
                <a href="#" className="psubmenu-admin">Product Detail</a>  
              </li>
            </ul>
          </li>
          <li>
            <div>
              <a className="item-menuadmin" href="#" onClick={handleDropSubmenuUser}>
              <div className="flex items-center">
                  <FiUser />
                <p className="pmenu-admin">User</p>
              </div>
                <IoIosArrowForward className={dropUser ? "text-[24px] font-extrabold rotate-0" : "text-[24px] font-extrabold rotate-90"} />
              </a>
            </div>
            <ul className={dropUser ? "static hidden" : "static block"}>
              <li className="lisubmenu-admin">
                <a className="psubmenu-admin">User List</a>
              </li>
              <li className="lisubmenu-admin">
                <a className="psubmenu-admin">User Detail</a>  
              </li>
            </ul>
          </li>
          <li>
            <div>
            <a className="item-menuadmin" href="#" onClick={handleDropSubmenuOrder}>
            <div className="flex items-center">
                <FiShoppingCart />
              <p className="pmenu-admin">Orders</p>
            </div>
              <IoIosArrowForward className={dropOrder ? "text-[24px] font-extrabold rotate-0" : "text-[24px] font-extrabold rotate-90"} />
            </a>
            </div>
            <ul className={dropOrder ? "static hidden" : "static block"}>
              <li className="lisubmenu-admin">
                <a className="psubmenu-admin">Order List</a>
              </li>
              <li className="lisubmenu-admin">
                <a className="psubmenu-admin">Order Detail</a>  
              </li>
            </ul>
          </li>
          <li>
            <a className="item-menuadmin" href="#">
            <div className="flex items-center">
              <FiSettings />
              <p className="pmenu-admin">Settings</p>
              </div>
              <IoIosArrowForward className="text-[24px] font-extrabold" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavigationBarAdmin;



// import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
// import { Menu } from 'antd';
// import { useState } from 'react';
// import './styles.css';

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type
//   };
// }

// const items = [
//   getItem("Dashboard", "sub1", <MdDashboard/>),
//   getItem("Product", "sub2", <FiDatabase />, [
//     getItem("Product List", "1"),
//     getItem("Product Detail", "2"),
//   ]),
//   getItem("User", "sub3", <FiUser />, [
//     getItem("User List", "5"),
//     getItem("User Detail", "6"),
//   ]),
//   getItem("Orders", "sub4", <FiShoppingCart />, [
//     getItem("Order List", "9"),
//     getItem("Order Detail", "10"),
//   ]),
//   getItem("Settings", "sub5", <FiShoppingCart />, [])
// ];

// const NavigationBarAdmin = () => {
//   const [current, setCurrent] = useState('');

//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//   };

//   return (
//     <>
//         <div className="relative bg-[#FFD333] h-[78px] w-[224.92px] flex items-center ">
//         <p className="absolute mb-[0px] ml-[10.13px] text-[25px] font-bold leading-[31.23px] font-redrose">
//           SHOP APP
//         </p>
//         <p className="absolute mb-[0px] ml-[161.09px] text-[10px] font-bold mr-[10.13px] pl-[10.13px] pr-[10.13px] pt-[4px] pb-[3.04px] bg-[white] rounded-[5px] ">
//           ADMIN
//         </p>
//       </div>     
//       <div className='bg-[#3D464D] w-[224.92px] h-[1083.16px] text-[#C4C4C4]'>
//       <div>
//         <p className="text-[12px] font-bold text-[#C4C4C4] pt-[22px] pl-[10.13px] pb-[18px] mb-[0px]">APPLICATION</p>
//       </div>
//       <Menu
//         onClick={onClick}
//         style={{backgroundColor: "#3D464D"}}
//         selectedKeys={[current]}
//         mode="inline"
//         items={items}
//       />
//       </div>
//     </>
//   );
// };

// export default NavigationBarAdmin;