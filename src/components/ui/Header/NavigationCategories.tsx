"use client";
import "./Header.css";
import { useGetCategoriesQuery } from "@/libs/features/services/categories";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const itemVariant = {
  default: { opacity: 0, scale: 0.9 },
  hover: { opacity: 100, scale: 1 }, // Trạng thái khi hover
};

const iconVariant = {
  default: { rotate: 180 },
  hover: {
    rotate: 0,
  },
};

const categoryVariant = {
  default: { opacity: 0, y: 20 },
  hover: { opacity: 100, y: 0 }, // Trạng thái khi hover
};

export default function NavigationCategories() {
  const { data: categories } = useGetCategoriesQuery("");

  return (
    <motion.ul
      className="category-parent relative flex items-center gap-1"
      whileHover="hover"
      animate="default"
    >
      <Link href="/shop">Shop</Link>
      <motion.div className="text-sm" variants={iconVariant}>
        <Icon icon="ep:arrow-down-bold" />
      </motion.div>
      <motion.div
        variants={itemVariant}
        className="absolute top-14 w-52 space-y-2 rounded-lg bg-primary px-4 py-4"
      >
        {categories?.map((category) => (
          <motion.div
            transition={{ delay: 0.15 }}
            key={category._id}
            variants={categoryVariant}
          >
            <Link href={category._id}>{category.categoryName}</Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.ul>
  );
}
