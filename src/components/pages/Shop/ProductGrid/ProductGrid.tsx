"use client";
import { GetStaticProps } from "next";
import { productsAPI } from "@/libs/features/services/product";
import { useGetProductsQuery } from "@/libs/features/services/product";
import { store } from "@/libs/store";
import { CategoryFilterContext } from "../_store/FilterContext";
import { useContext } from "react";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import useGetProductShop from "./useGetProductShop";

const ProductGrid = () => {
  const categoryFilterContext = useContext(CategoryFilterContext);

  if (!categoryFilterContext) {
    throw new Error("CategoryFilterContext not provided");
  }

  const { filters } = categoryFilterContext;

  const filterByCategory = filters.category || null;
  const filterBySubcategory = Object.values(filters.subCate).flat();

  console.log("subCate: ", filterBySubcategory);

  const {
    products,
    totalPages,
    currPage,
    handleFetchMore,
    // handleQueryProduct,
  } = useGetProductShop({
    filterCategory: filterByCategory,
    filterSubCategory: filterBySubcategory,
  });

  console.log(filters);

  return (
    <div className="grid w-full grid-cols-4 gap-8">
      {products?.map((product) => (
        <ProductCard key={product._id} Product={product} />
      ))}
      <button onClick={() => handleFetchMore(2)}>Tải thêm</button>
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
