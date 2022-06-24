import './App.css';
import Categories from './Components/CategoriesBar';
import NavigationBarAdmin from './Components/NavigationBarAdmin';
import ProfileBanner from './Components/ProfileBanner';
import TopBar from './Components/TopBar';
import 'antd/dist/antd.css'
import LayoutAdmin from './PageAdmin/LayoutAdmin';
import LayoutUser from './PageUser/LayoutUser';
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LayoutUser />
      </PersistGate>
    </Provider>
  );
}

export default App;
