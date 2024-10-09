// FilterSubcategory.tsx
import { motion } from "framer-motion";
import { useContext } from "react";
import { CategoryFilterContext } from "../_store/FilterContext";
import { useGetSubCategoriesQuery } from "@/libs/features/services/subcategories";

interface FilterSubcategoryProps {
  categoryId: string;
}

export default function FilterSubcategory({
  categoryId,
}: FilterSubcategoryProps) {
  const categoryFilterContext = useContext(CategoryFilterContext);

  if (!categoryFilterContext) {
    throw new Error("CategoryFilterContext not provided");
  }

  const { filters, handleSubCategoryToggle } = categoryFilterContext;

  const { data: subCategories } = useGetSubCategoriesQuery({
    categoryId: categoryId,
  });

  return (
    <motion.div initial={false} className="my-2 ml-6 overflow-y-hidden">
      <div className="ml-3">
        {subCategories?.map((subcategory) => (
          <motion.p
            className="my-2"
            animate={{
              color: filters.subCate[categoryId]?.includes(subcategory._id)
                ? "red"
                : "black",
            }}
            key={subcategory._id}
          >
            <button
              onClick={() =>
                handleSubCategoryToggle(categoryId, subcategory._id)
              }
            >
              {subcategory.subCategoryName}
            </button>
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}
