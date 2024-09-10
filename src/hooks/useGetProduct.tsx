import { getProduct, getProductWithPaginate } from "@/apis/product";
import { useCallback, useState } from "react";
import { Product } from "@/types/Product";

interface UseGetProductProps {
  initialData: Product[];
  initialTotalPages?: number;
}

export default function useGetProduct({
  initialData,
  initialTotalPages,
}: UseGetProductProps) {
  const [products, setListProduct] = useState<Product[]>(initialData);
  const [paginatedProducts, setPaginatedProducts] =
    useState<Product[]>(initialData);
  const [currPage, setCurrPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(initialTotalPages ?? 0);

  // Hàm chưa tối ưu k xài
  const handleFetchProduct = useCallback(async () => {
    const data = await getProduct({});
    setListProduct(data);
    setPaginatedProducts(data); // Initialize with fetched products
  }, []);

  const handleQueryProduct = useCallback(
    async (productName: string) => {
      if (productName.trim() === "") {
        setListProduct(paginatedProducts);
        return;
      }

      const data = await getProduct({ productName: productName });
      setListProduct(data);
    },
    [paginatedProducts]
  );

  const handleFetchProductPaginate = useCallback(
    async (page: number, limit: number) => {
      const data = await getProductWithPaginate({ page: page, limit: limit });
      setListProduct(data.products);
      setPaginatedProducts(data.products);
      setTotalPages(data.totalPages);
      setCurrPage(page); // Update current page
    },
    []
  );

  const handleFetchMore = useCallback(
    async (limit: number) => {
      if (currPage < totalPages) {
        const nextPage = currPage + 1;
        const data = await getProductWithPaginate({
          page: nextPage,
          limit: limit,
        });

        setListProduct((prevProducts) => [...prevProducts, ...data.products]);
        setPaginatedProducts((prevProducts) => [
          ...prevProducts,
          ...data.products,
        ]); // Append new page data

        setCurrPage(nextPage);
      } else {
        alert("Hết rồi ní");
      }
    },
    [currPage, totalPages]
  );

  return {
    products,
    totalPages,
    currPage,
    handleFetchProduct,
    handleFetchProductPaginate,
    handleFetchMore,
    handleQueryProduct,
  };
}
