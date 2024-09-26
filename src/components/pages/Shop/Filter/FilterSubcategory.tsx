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
      className="my-2 ml-6 overflow-y-hidden"
    >
      <button
        className="text-left"
        onClick={() => handleAnimalTypeToggle(categoryId, animalType)}
      >
        {animalType}
      </button>
      <div className="ml-3">
        {subCategorySpecific?.map((subcategory) => (
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
