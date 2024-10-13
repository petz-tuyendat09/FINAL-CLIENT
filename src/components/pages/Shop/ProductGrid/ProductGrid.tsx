"use client";

import { GetServerSideProps } from "next";
import { productsAPI } from "@/libs/features/services/product";
import { store } from "@/libs/store";
import { CategoryFilterContext } from "../_store/FilterContext";
import { useContext, useState } from "react";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import useGetProductShop from "./useGetProductShop";
import FilterInput from "../Filter/FilterInput";
import Filter from "../Filter/Filter";

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
    <div>
      <Filter
        handleQueryProduct={handleQueryProduct}
        handleSearchTermChange={handleSearchTermChange}
      />
      <div className="container grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product, index) => (
          <div className="h-2/3" key={product._id}>
            <ProductCard Product={product} />
          </div>
        ))}
      </div>
      {/* Hide the button when searching */}
      {!isSearching && (
        <button onClick={() => handleFetchMore(2)}>Tải thêm</button>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const Store = store;

  // Prefetch data with RTK Query
  await Store.dispatch(
    productsAPI.endpoints.getProducts.initiate({ limit: 25 }),
  );

  // Wait for all queries to complete
  await Promise.all(Store.dispatch(productsAPI.util.getRunningQueriesThunk()));

  return {
    props: {
      initialReduxState: Store.getState(),
    },
  };
};

export default ProductGrid;
