// FilterCategory.tsx
import { motion } from "framer-motion";
import { useContext } from "react";
import { CategoryFilterContext } from "../_store/FilterContext";
import FilterSubcategory from "./FilterSubcategory";
import { Icon } from "@iconify/react/dist/iconify.js";

const parentVariant = {
  default: { height: "27px" },
  extend: {
    height: "fit-content",
  },
};

const iconVariant = {
  default: { rotate: 0 },
  selected: {
    rotate: 180,
  },
};

interface CategoryProps {
  category: { _id: string; categoryName: string };
}

const Category = ({ category }: CategoryProps) => {
  const categoryFilterContext = useContext(CategoryFilterContext);

  if (!categoryFilterContext) {
    throw new Error("CategoryFilterContext not provided");
  }

  const { filters, handleCategoryToggle } = categoryFilterContext;

  const selectedCategory = filters.category.includes(category._id);
  return (
    <motion.div
      variants={parentVariant}
      initial={false}
      animate={selectedCategory ? "extend" : "default"}
      className="overflow-y-hidden"
    >
      <button
        className="flex items-center text-left"
        onClick={() => handleCategoryToggle(category._id)}
      >
        <p className="w-44">{category.categoryName}</p>
        <motion.div
          variants={iconVariant}
          animate={selectedCategory ? "selected" : "default"}
        >
          <Icon icon="iconamoon:arrow-up-2-duotone" />
        </motion.div>
      </button>
      {/* Animal Type */}
      <FilterSubcategory categoryId={category._id} animalType="Chó" />
      <FilterSubcategory categoryId={category._id} animalType="Mèo" />
    </motion.div>
  );
};

export default Category;
