"use client";

import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/libs/store"; // Đảm bảo đường dẫn này đúng

const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // Khởi tạo store
  const Store = store;

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
