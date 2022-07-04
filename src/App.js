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
import ProductCreatePage from "./PageAdmin/ProductCreatePage";
import ProductUpdatePage from "./PageAdmin/ProductUpdatePage";
import ShoppingCart from "./Components/CartCheckout/ShoppingCart";
import Checkout from "./Components/CartCheckout/Checkout";
import SuccessPage from "./Components/CartCheckout/SuccessPage";
import UserCreatePage from "./PageAdmin/UserCreate";
import UserUpdatePage from "./PageAdmin/UserUpdate";
import OrderList from "./PageAdmin/OrderList";
import OrderDetail from "./PageAdmin/OrderDetail";
import tokenExpired from "./tokenExpired";
import {
  selectAccessToken,
  selectIsfetching,
  selectRefreshToken,
} from "./redux/auth/selector";
import { refresh } from "./redux/auth/action";
import ProductList from "./PageAdmin/ProductList";
import MyProfile from "./PageUser/MyProfile";
import Productsearch from "./PageUser/ProductPageSearch";
import EditProfile from "./PageUser/EditProfile";
import UserDetail from "./PageUser/UserDetail";
import OrderHistory from "./PageUser/OrderHistory";
import UserList from "./PageAdmin/UserList";
import UserDetailAdmin from "./PageAdmin/UserDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spin } from "antd";

function App() {
  // const accessToken = useSelector(selectAccessToken);
  // const refreshToken = useSelector(selectRefreshToken);
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
  const isFetching = useSelector(selectIsfetching);
  console.log(isFetching);

  return (
    <Spin spinning={isFetching} tip="Loading...">
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LayoutUser />}>
            <Route path="/" element={<Home />} />
            <Route path="/productsearch" element={<Productsearch />} />
            <Route path="/userdetail" element={<UserDetail />}>
              <Route path="/userdetail/myprofile" element={<MyProfile />} />
              <Route path="/userdetail/editprofile" element={<EditProfile />} />
            </Route>
            <Route path="/orderhistory" element={<OrderHistory />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/productpage" element={<Productpage />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<SuccessPage />} />
          </Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="/admin/productlist" element={<ProductList />} />
            <Route
              path="/admin/createproduct"
              element={<ProductCreatePage />}
            />
            <Route
              path="/admin/updateproduct"
              element={<ProductUpdatePage />}
            />
            <Route path="/admin/userlist" element={<UserList />} />
            <Route path="/admin/userdetail" element={<UserDetailAdmin />} />
            <Route path="/admin/createuser" element={<UserCreatePage />} />
            <Route path="/admin/updateuser" element={<UserUpdatePage />} />
            <Route path="/admin/orderlist" element={<OrderList />} />
            <Route path="/admin/orderdetail" element={<OrderDetail />} />
            <Route path="/admin/orderlist" element={<OrderList />} />
            <Route path="/admin/orderdetail" element={<OrderDetail />} />
          </Route>
        </Routes>
      </div>
    </Spin>
  );
}

export default App;
