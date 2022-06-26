import productReducer from './product/reducer'

import { encryptTransform } from "redux-persist-transform-encrypt";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  
  const { configureStore, combineReducers } = require("@reduxjs/toolkit");

  const rootReducer = combineReducers({
    products: productReducer,
  });
  
  const persistConfig = {
    key: "root",
    version: 1,
    storage,
    transforms: [
      encryptTransform({
        secretKey: "my-super-secret-key",
        onError: function (error) {
          //
        },
      }),
    ],
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export let persistor = persistStore(store);
