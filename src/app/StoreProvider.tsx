"use client";

import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/libs/store"; 
import { NextUIProvider } from "@nextui-org/react";
const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const Store = store;

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextUIProvider>{children}</NextUIProvider>
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
