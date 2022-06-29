import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectAccessToken, selectUserID } from '../../Redux/Auth/selectors'
import { deleteCart } from '../../Redux/Cart/actions'
import { selectNewCart, selectNewCartId } from '../../Redux/Cart/selectors'
import TopBar from '../Component/TopBar'
import NavTabs from './NavTabs'


function SuccessPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = useSelector(selectAccessToken);
    const cartID = useSelector(selectNewCartId);
    console.log(cartID)
    useEffect(() => {
        deleteCart(accessToken, cartID, dispatch)
    }, [])
    const handleBackToHome = () => {
        navigate('/')
    }
  return (
    <div className='absolute top-[155px]'>
        <header>
            <TopBar />
        </header>
        <div>
            <NavTabs />
            <div className='h-[865px] w-[1440px] relative'>
                <div className='absolute left-[300px] top-[50px]'>
                    <div>
                        <p>Success</p>
                        <button className='' onClick={() => {handleBackToHome()}}>Back To Home</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default SuccessPage