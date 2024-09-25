// FilterSubcategory.tsx
import { motion } from "framer-motion";
import { useContext } from "react";
import { CategoryFilterContext } from "../_store/FilterContext";
import { useGetSubCategoriesQuery } from "@/libs/features/services/subcategories";

interface FilterSubcategoryProps {
  categoryId: string;
  animalType: string;
}

export default function FilterSubcategory({
  categoryId,
  animalType,
}: FilterSubcategoryProps) {
  const categoryFilterContext = useContext(CategoryFilterContext);

  if (!categoryFilterContext) {
    throw new Error("CategoryFilterContext not provided");
  }

  const { filters, handleAnimalTypeToggle, handleSubCategoryToggle } =
    categoryFilterContext;

  const showSubcategory = filters.type[categoryId]?.includes(animalType);

  const { data: subCategories } = useGetSubCategoriesQuery({
    categoryId: categoryId,
  });

  const subCategorySpecific = subCategories?.filter(
    (subCategory) => subCategory.animalType === animalType,
  );

  return (
    <motion.div
      initial={false}
      animate={{
        height: showSubcategory ? "fit-content" : "27px",
      }}
      className="ml-4 overflow-y-hidden"
    >
      <button
        className="text-left"
        onClick={() => handleAnimalTypeToggle(categoryId, animalType)}
      >
        {animalType}
      </button>
      <div className="ml-6 space-y-1">
        {subCategorySpecific?.map((subcategory) => (
          <p key={subcategory._id}>
            <button
              onClick={() =>
                handleSubCategoryToggle(categoryId, subcategory._id)
              }
            >
              {subcategory.subCategoryName}
            </button>
          </p>
        ))}
      </div>
    </motion.div>
  );
}
