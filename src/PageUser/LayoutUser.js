import React from 'react'
import TopBar from '../Components/TopBar'
import Home from './Home'

const LayoutUser = () => {
  
  return (
    <div>
        <header>
            <TopBar />
        </header>
        <Home/>
    </div>
  )
}

export default LayoutUser