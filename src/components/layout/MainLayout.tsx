"use client";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header/Header";
import React, { ReactNode } from "react";
import StoreProvider from "@/app/StoreProvider";

import { Roboto, Cormorant } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-roboto",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

interface LayoutProps {
  children: ReactNode;
}
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <StoreProvider>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </StoreProvider>
  );
};

export default MainLayout;
