import { Middleware, configureStore } from "@reduxjs/toolkit";

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "@/network/api";
import { productsAPI } from "./services/product";
import { categoriesAPI } from "./services/categories";
import { subCategoriesAPI } from "./services/subcategories";

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(
      api.middleware as Middleware,
      productsAPI.middleware,
      categoriesAPI.middleware,
      subCategoriesAPI.middleware
    ),
});

setupListeners(store.dispatch);

const persistor = persistStore(store);

export type AppStore = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
