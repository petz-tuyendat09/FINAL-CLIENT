import { useState } from "react";

export const useCategoryFilter = () => {
  const [filters, setFilters] = useState({
    category: [] as string[], // Array for selected categories
    type: {} as { [categoryId: string]: string[] }, // Object to track animal types per category
    subCate: {} as { [categoryId: string]: string[] },
  });

  // Toggle category selection
  const handleCategoryToggle = (categoryId: string) => {
    setFilters((prevFilters) => {
      const isCategorySelected = prevFilters.category.includes(categoryId);
      const newCategoryList = isCategorySelected
        ? prevFilters.category.filter((id) => id !== categoryId) // Remove category if already selected
        : [...prevFilters.category, categoryId]; // Add category if not selected

      let newSubCate = { ...prevFilters.subCate };

      if (isCategorySelected) {
        // If the category is being deselected, remove its subcategories
        delete newSubCate[categoryId];
      }

      return {
        ...prevFilters,
        category: newCategoryList,
        subCate: newSubCate,
      };
    });
  };

  // Toggle animal type selection for a specific category
  const handleAnimalTypeToggle = (categoryId: string, animalType: string) => {
    setFilters((prevFilters) => {
      const currentTypes = prevFilters.type[categoryId] || [];

      return {
        ...prevFilters,
        type: {
          ...prevFilters.type,
          [categoryId]: currentTypes.includes(animalType)
            ? currentTypes.filter((type) => type !== animalType) // Remove animal type if already selected
            : [...currentTypes, animalType], // Add animal type if not selected
        },
      };
    });
  };

  // Toggle subCategory selection
  const handleSubCategoryToggle = (
    categoryId: string,
    subCategoryId: string,
  ) => {
    setFilters((prevFilters) => {
      const currentSubCategories = prevFilters.subCate[categoryId] || [];
      const isSelected = currentSubCategories.includes(subCategoryId);

      const updatedSubCategories = isSelected
        ? currentSubCategories.filter((id) => id !== subCategoryId) // Remove subCategoryId if already selected
        : [...currentSubCategories, subCategoryId]; // Add subCategoryId if not selected

      // If no subcategories are selected for a category, remove the category key
      const newSubCate = { ...prevFilters.subCate };
      if (updatedSubCategories.length > 0) {
        newSubCate[categoryId] = updatedSubCategories;
      } else {
        delete newSubCate[categoryId];
      }

      return {
        ...prevFilters,
        subCate: newSubCate,
      };
    });
  };

  return {
    filters,
    handleCategoryToggle,
    handleAnimalTypeToggle,
    handleSubCategoryToggle,
  };
};
