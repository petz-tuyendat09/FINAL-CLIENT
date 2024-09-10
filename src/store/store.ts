<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsAPI } from "./services/product";
import { categoriesAPI } from "./services/categories";
import { subCategoriesAPI } from "./services/subcategories";

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: "root",
  storage,
  whitelist: ["user"],
=======
import { Middleware, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from '@/network/api';
const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'root',
  storage,
  whitelist: ['user'],
>>>>>>> 27ea2b71898f71d1b528b0ba3be043b4884d760e
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
<<<<<<< HEAD
    }).concat(
      productsAPI.middleware,
      categoriesAPI.middleware,
      subCategoriesAPI.middleware
    ),
=======
    }).concat(api.middleware as Middleware),
>>>>>>> 27ea2b71898f71d1b528b0ba3be043b4884d760e
});

setupListeners(store.dispatch);

const persistor = persistStore(store);
<<<<<<< HEAD

export type AppStore = ReturnType<typeof store.getState>;
=======
>>>>>>> 27ea2b71898f71d1b528b0ba3be043b4884d760e
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
