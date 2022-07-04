import "./App.css";
import "antd/dist/antd.css";
import LayoutAdmin from "./PageAdmin/LayoutAdmin";
import LayoutUser from "./PageUser/LayoutUser";
import { Provider, useSelector } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./PageUser/Home";
import Productpage from "./PageUser/HomePageCategory";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProductDetail from "./PageUser/ProductDetail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductCreatePage from "./PageAdmin/ProductCreatePage";
import ProductUpdatePage from "./PageAdmin/ProductUpdatePage";
import ShoppingCart from './Components/CartCheckout/ShoppingCart'
import Checkout from './Components/CartCheckout/Checkout'
import SuccessPage from './Components/CartCheckout/SuccessPage'
import UserCreatePage from "./PageAdmin/UserCreate";
import UserUpdatePage from "./PageAdmin/UserUpdate";
import OrderList from "./PageAdmin/OrderList";
import OrderDetail from "./PageAdmin/OrderDetail";
import tokenExpired from "./tokenExpired";
import { selectAccessToken, selectRefreshToken } from "./redux/auth/selector";
import { refresh } from "./redux/auth/action";

function App() {
  // const accessToken = useSelector(selectAccessToken);
  // const refreshToken = useSelector(selectRefreshToken)
  // const dispatch = useDispatch()

  // // refresh token
  // useEffect( () => {
  //   if (accessToken && refreshToken) {
  //     console.log(accessToken);
  //     tokenExpired(accessToken, async () => {
  //       await refresh(refreshToken, dispatch);
  //     });
  //   }
  // }, [accessToken, refreshToken]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutUser />}>
              <Route path="/" element={<Home />} />
              <Route path="/productpage" element={<Productpage />} />
              <Route path="/productdetail" element={<ProductDetail />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<SuccessPage />} />
            </Route>
            <Route path="/admin" element={<LayoutAdmin />}>
              <Route path="/admin/createproduct" element={<ProductCreatePage />} />
              <Route path="/admin/updateproduct" element={<ProductUpdatePage />} />
              <Route path="/admin/createuser" element={<UserCreatePage />} />
              <Route path="/admin/updateuser" element={<UserUpdatePage />} />
              <Route path="/admin/orderlist" element={<OrderList />} />
              <Route path="/admin/orderdetail" element={<OrderDetail />} />
              <Route path="/admin/orderlist" element={<OrderList/>} />
              <Route path="/admin/orderdetail" element={<OrderDetail/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
