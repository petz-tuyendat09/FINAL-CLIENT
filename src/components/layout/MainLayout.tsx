"use client";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header/Header";
import React, { ReactNode } from "react";
import StoreProvider from "@/app/StoreProvider";
interface LayoutProps {
  children: ReactNode;
}
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <StoreProvider>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </StoreProvider>
    </>
  );
};

export default MainLayout;
