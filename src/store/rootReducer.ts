import { combineReducers } from "@reduxjs/toolkit";
import globalStore from "./globalStore";
import { productsAPI } from "./services/product";
import { categoriesAPI } from "./services/categories";
import { subCategoriesAPI } from "./services/subcategories";

const rootReducer = combineReducers({
  lng: globalStore,
  [productsAPI.reducerPath]: productsAPI.reducer,
  [categoriesAPI.reducerPath]: categoriesAPI.reducer,
  [subCategoriesAPI.reducerPath]: subCategoriesAPI.reducer,
});

export default rootReducer;
