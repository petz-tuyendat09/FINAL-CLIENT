"use client";
import { AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useState } from "react";
import { HeaderContext } from "./_store/header-context";
import NavBarIcon from "./NavBarIcon";
import Menu from "./Menu";
import Search from "./Search/Search";
import HeaderCartButton from "./HeaderCartButton";
import HeaderSearchButton from "./HeaderSearchButton";
import LogInButton from "./LogInButton";
import { RootState } from "@/libs/store";
import CartModal from "../CartModal/CartModal";

export default function SiteLink() {
  const { openMenu, openSearch } = useContext(HeaderContext);
  const { scrollY } = useScroll();
  const toggleCart = useSelector((state: RootState) => state.cart.openCart);

  return (
    <div className="fixed right-0 top-5 text-[12px] lg:right-16">
      <ul className="glass flex items-center justify-center gap-4 rounded-full px-8 py-3 text-white lg:gap-12 lg:text-base">
        <HeaderSearchButton />
        <LogInButton />
        <HeaderCartButton />
        <NavBarIcon />
      </ul>

      <AnimatePresence>{openMenu && <Menu />}</AnimatePresence>
      <AnimatePresence>{openSearch && <Search />}</AnimatePresence>
      <AnimatePresence>{toggleCart && <CartModal />}</AnimatePresence>
    </div>
  );
}
