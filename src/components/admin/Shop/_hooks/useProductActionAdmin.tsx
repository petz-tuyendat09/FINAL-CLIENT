import { useCallback, useEffect, useState } from "react";
import { Product } from "@/types/Product";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useLazyGetProductsQuery,
} from "@/libs/features/services/product";

interface UseGetProductProps {
  filterCategory?: string[];
  filterSubCategory?: string[];
}

export default function useProductActionAdmin({
  filterCategory,
  filterSubCategory,
}: UseGetProductProps) {
  const { data: PaginateProduct } = useGetProductsQuery({
    limit: 2,
    page: 1,
  });

  const [triggerGetProducts, { data: lazyData, isFetching, isError }] =
    useLazyGetProductsQuery();

  const [deleteProduct] = useDeleteProductMutation(); // Mutation để xóa sản phẩm

  const [products, setListProduct] = useState<Product[]>([]);
  const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([]);
  const [currPage, setCurrPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (PaginateProduct?.products) {
      setListProduct(PaginateProduct.products);
      setPaginatedProducts(PaginateProduct.products);
      setTotalPages(PaginateProduct.pagination.totalPages);
      setCurrPage(1); // Reset current page to 1 when filters change
    }
  }, [PaginateProduct]);

  const handleFetchMore = useCallback(
    async (limit: number) => {
      if (currPage < totalPages) {
        const nextPage = currPage + 1;

        try {
          const data = await triggerGetProducts({
            page: nextPage,
            limit: limit,
          }).unwrap();

          if (data?.products) {
            setListProduct((prevProducts) => [
              ...prevProducts,
              ...data.products,
            ]);

            setPaginatedProducts((prevProducts) => [
              ...prevProducts,
              ...data.products,
            ]);

            setCurrPage(nextPage);
          }
        } catch (error) {
          console.error("Failed to fetch more products:", error);
        }
      } else {
        alert("No more products to load.");
      }
    },
    [currPage, totalPages, triggerGetProducts],
  );

  const handleQueryProduct = useCallback(
    async (productName: string) => {
      if (productName.trim() === "") {
        setListProduct(paginatedProducts);
        return;
      }

      const data = await triggerGetProducts({
        productName: productName,
        limit: 1000,
      }).unwrap();

      if (data?.products) {
        setListProduct(data.products);
      } else {
        setListProduct([]);
      }
    },
    [paginatedProducts, triggerGetProducts],
  );

  const handleDeleteProduct = useCallback(
    async (productId: string) => {
      try {
        await deleteProduct(productId).unwrap();

        setListProduct((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId),
        );
        setPaginatedProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId),
        );
      } catch (error) {
        console.error("Failed to delete product:", error);
      }
    },
    [deleteProduct],
  );

  return {
    products,
    totalPages,
    currPage,
    handleFetchMore,
    handleQueryProduct,
    handleDeleteProduct, // Trả về hàm xóa sản phẩm
  };
}
