"use client";
import "./Header.css";
import { useGetCategoriesQuery } from "@/libs/features/services/categories";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const itemVariant = {
  default: {
    opacity: 0,
    scale: 0.9,

    display: "none",
  },
  hover: { opacity: 100, scale: 1, display: "block" }, // Trạng thái khi hover
};

const iconVariant = {
  default: { rotate: 180 },
  hover: {
    rotate: 0,
  },
};

const categoryVariant = {
  default: { opacity: 0, x: -10 },
  hover: { opacity: 80, x: 0 }, // Trạng thái khi hover
};

export default function NavigationCategories() {
  const { data: categories } = useGetCategoriesQuery("");

  return (
    <motion.li
      initial={false}
      className="category-parent relative flex items-center gap-1"
      whileHover="hover"
      animate="default"
    >
      <Link href="/vi/shop">Shop</Link>
      <motion.div className="text-sm" variants={iconVariant}>
        <Icon icon="ep:arrow-down-bold" />
      </motion.div>
      <motion.div
        variants={itemVariant}
        className="absolute top-14 w-52 space-y-2 rounded-lg bg-primary px-4 py-4"
      >
        {categories?.map((category, index) => (
          <Link href={`vi/shop?category=${category._id}`} key={category._id}>
            <motion.div
              className="text-gray-text hover:text-black"
              transition={{ delay: 0.1 * index }}
              variants={categoryVariant}
            >
              {category.categoryName}
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.li>
  );
}
