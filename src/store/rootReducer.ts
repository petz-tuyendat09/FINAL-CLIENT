import { combineReducers } from "@reduxjs/toolkit";
import globalStore from "./globalStore";
import { productsAPI } from "./services/product";
import userStore from "./userStore";
import { api } from "@/network/api";
import { categoriesAPI } from "./services/categories";
import { subCategoriesAPI } from "./services/subcategories";

const rootReducer = combineReducers({
  lng: globalStore,
  user: userStore,
  [api.reducerPath]: api.reducer,
  [productsAPI.reducerPath]: api.reducer,
  [categoriesAPI.reducerPath]: api.reducer,
  [subCategoriesAPI.reducerPath]: api.reducer,
});

export default rootReducer;
