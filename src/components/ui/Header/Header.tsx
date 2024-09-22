"use client";

import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous) {
      if (latest > previous && latest > 150) {
        setHidden(true);
        setShowNav(false);
      } else {
        setHidden(false);
      }
    }
  });

  return <motion.div>Header</motion.div>;
}
