// FilterCategory.tsx
import { motion } from "framer-motion";
import { useContext } from "react";
import { CategoryFilterContext } from "../_store/FilterContext";
import FilterSubcategory from "./FilterSubcategory";
import { Icon } from "@iconify/react/dist/iconify.js";

const parentVariant = {
  default: { height: "45px" },
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
      className="w-full overflow-hidden"
    >
      <button
        className={`flex w-full items-center justify-between border-b border-gray-300 py-2 text-left font-bold transition delay-75 duration-300`}
        onClick={() => handleCategoryToggle(category._id)}
      >
        <p className="">{category.categoryName}</p>
        <motion.div
          variants={iconVariant}
          animate={selectedCategory ? "selected" : "default"}
        >
          <Icon icon="iconamoon:arrow-up-2-duotone" />
        </motion.div>
      </button>
      {/* Animal Type */}
      <FilterSubcategory categoryId={category._id} />
    </motion.div>
  );
};

export default Category;
