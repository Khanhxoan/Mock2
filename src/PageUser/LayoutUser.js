import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Login from '../Components/auth/Login';
import TopBar from '../Components/TopBar'
import { selectAllCategories } from '../redux/product/selector';
import { Outlet } from "react-router-dom"
import "./modal.css";

const LayoutUser = () => {
  const allCategories = useSelector(selectAllCategories)
  const [modal, setModal] = useState(false)

  
  return (
    <div>
      <header>
        <TopBar modal={modal} setModal={setModal}/>
      </header>
      <Outlet />
      {modal && 
        <div className='mt-[-1125px] w-[1440px] ml-[304px]'>
          <Login modal={modal} setModal={setModal}/>
        </div>}
    </div>
  )
}

export default LayoutUser