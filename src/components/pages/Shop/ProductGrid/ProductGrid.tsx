"use client";

import { GetStaticProps } from "next";
import { productsAPI } from "@/libs/features/services/product";
import { store } from "@/libs/store";
import { CategoryFilterContext } from "../_store/FilterContext";
import { useContext, useState, useEffect, useMemo } from "react";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import useGetProductShop from "./useGetProductShop";
import FilterInput from "../Filter/FilterInput";
import debounce from "lodash.debounce";

const ProductGrid = () => {
  const categoryFilterContext = useContext(CategoryFilterContext);

  if (!categoryFilterContext) {
    throw new Error("CategoryFilterContext not provided");
  }

  const { filters } = categoryFilterContext;

  const filterByCategory = filters.category || null;
  const filterBySubcategory = Object.values(filters.subCate).flat();

  // State to track if a search is active
  const [isSearching, setIsSearching] = useState(false);

  const { products, handleFetchMore, handleQueryProduct } = useGetProductShop({
    filterCategory: filterByCategory,
    filterSubCategory: filterBySubcategory,
  });

  // Function to handle changes in search term
  const handleSearchTermChange = (searchTerm: string) => {
    setIsSearching(searchTerm.trim() !== "");
  };

  return (
    <div className="w-full">
      <FilterInput
        handleQueryProduct={handleQueryProduct}
        onSearchTermChange={handleSearchTermChange}
      />
      <div className="grid grid-cols-4 gap-8">
        {products?.map((product, index) => (
          <ProductCard key={index} Product={product} />
        ))}
      </div>
      {/* Hide the button when searching */}
      {!isSearching && (
        <button onClick={() => handleFetchMore(2)}>Tải thêm</button>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const Store = store;

  // Prefetch data với RTK Query
  await Store.dispatch(
    productsAPI.endpoints.getProducts.initiate({ limit: 25 }),
  );

  // Chờ cho tất cả các queries hoàn thành
  await Promise.all(Store.dispatch(productsAPI.util.getRunningQueriesThunk()));

  return {
    props: {
      initialReduxState: Store.getState(),
    },
    revalidate: 360, // Thời gian revalidate (cập nhật dữ liệu tĩnh mỗi 10 giây)
  };
};

export default ProductGrid;
