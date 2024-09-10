import { combineReducers } from "@reduxjs/toolkit";
import globalStore from "./globalStore";
import { productsAPI } from "./services/product";
<<<<<<< HEAD
import { categoriesAPI } from "./services/categories";
import { subCategoriesAPI } from "./services/subcategories";

const rootReducer = combineReducers({
  lng: globalStore,
  [productsAPI.reducerPath]: productsAPI.reducer,
  [categoriesAPI.reducerPath]: categoriesAPI.reducer,
  [subCategoriesAPI.reducerPath]: subCategoriesAPI.reducer,
=======
import userStore from "./userStore";
import { api } from "@/network/api";

const rootReducer = combineReducers({
  lng: globalStore,
  user: userStore,
  [api.reducerPath]: api.reducer, 
>>>>>>> 27ea2b71898f71d1b528b0ba3be043b4884d760e
});

export default rootReducer;
