"use client"
import { store } from "@/store/store";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
interface LayoutProps {
  children: ReactNode;
}
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Provider store={store}>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      </Provider>
    </>
  );
};

export default MainLayout;
