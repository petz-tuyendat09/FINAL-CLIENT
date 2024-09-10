import { combineReducers } from "@reduxjs/toolkit";
import globalStore from "./globalStore";
import { productsAPI } from "./services/product";
import userStore from "./userStore";
import { api } from "@/network/api";

const rootReducer = combineReducers({
  lng: globalStore,
  user: userStore,
  [api.reducerPath]: api.reducer, 
});

export default rootReducer;
