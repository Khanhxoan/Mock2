import './App.css';
import 'antd/dist/antd.css'
import LayoutAdmin from './PageAdmin/LayoutAdmin';
import LayoutUser from './PageUser/LayoutUser';
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Home from './PageUser/Home';
import Productpage from './PageUser/HomePageCategory';
import { Route, BrowserRouter, Routes } from 'react-router-dom' 
import Login from './Components/auth/Login';
import ProductDetail from './PageUser/ProductDetail';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutUser />}>
              <Route path="/productpage" element={<Productpage/>} />
              <Route path="/productdetail" element={<ProductDetail/>} />
              <Route path="/" element={<Home/>} />
            </Route>
          </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
