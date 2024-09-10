import { combineReducers } from "@reduxjs/toolkit";
import globalStore from "./globalStore";
import { productsAPI } from "./services/product";

const rootReducer = combineReducers({
  lng: globalStore,
  [productsAPI.reducerPath]: productsAPI.reducer, // Thêm productsAPI reducer
});

export default rootReducer;
