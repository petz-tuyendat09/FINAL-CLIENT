import { configureStore } from "@reduxjs/toolkit";
import { productsAPI } from "./features/services/product";
import { authAPI } from "./features/services/auth";
import { categoriesAPI } from "./features/services/categories";
import { subCategoriesAPI } from "./features/services/subcategories";
import { vouchersAPI } from "./features/services/voucher";
import cartSlice from "./features/cart/cart";
import userSlice from "./features/user/user";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

// Combine all slice reducers and API reducers into a single rootReducer
const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  user: userSlice.reducer,
  [productsAPI.reducerPath]: productsAPI.reducer,
  [categoriesAPI.reducerPath]: categoriesAPI.reducer,
  [subCategoriesAPI.reducerPath]: subCategoriesAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [vouchersAPI.reducerPath]: vouchersAPI.reducer,
});

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

// Enhance rootReducer with persist capabilities
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Initialize the store with the persistedReducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(
      productsAPI.middleware,
      categoriesAPI.middleware,
      subCategoriesAPI.middleware,
      authAPI.middleware,
      vouchersAPI.middleware,
    ),
});

export const persistor = persistStore(store);

// Infer the type of makeStore
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
