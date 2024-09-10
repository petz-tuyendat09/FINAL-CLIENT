export interface SubCategories {
  _id: string;
  subCategoryName: string;
  category: {
    categoryName: string;
    categoryId: string;
  };
}
