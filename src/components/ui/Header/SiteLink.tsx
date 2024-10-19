"use client";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { HeaderContext } from "./_store/header-context";
import NavBarIcon from "./NavBarIcon";
import Menu from "./Menu";
import Search from "./Search/Search";
import HeaderSearchButton from "./HeaderSearchButton";
import LogInButton from "./LogInButton";
import NormalTransitionLink from "../NormalTransitionLink";

export default function SiteLink() {
  const { openMenu, openSearch } = useContext(HeaderContext);

  return (
    <div className="fixed right-0 top-5 text-[12px] lg:right-16">
      <ul className="glass flex items-center justify-center gap-4 rounded-full px-8 py-3 text-white lg:gap-12 lg:text-base">
        <HeaderSearchButton />
        <LogInButton />
        <NormalTransitionLink href="/cart">Giỏ hàng</NormalTransitionLink>
        <NavBarIcon />
      </ul>

      <AnimatePresence>{openMenu && <Menu />}</AnimatePresence>
      <AnimatePresence>{openSearch && <Search />}</AnimatePresence>
    </div>
  );
}
