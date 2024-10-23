import { useEffect, useState } from "react";
import { Product } from "@/types/Product";
import { getProduct, deleteProduct } from "@/apis/product"; // Your custom API function
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/libs/features/services/product";

interface UseGetProductProps {
  initialPage: number;
}

export default function useProductActionAdmin({
  initialPage,
}: UseGetProductProps) {
  const [pages, setPages] = useState<number>(initialPage);
  const [totalPages, setTotalPages] = useState<number | undefined>(1);
  const [productList, setProductList] = useState<Product[]>();
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [deleteProductId, setDeleteProductId] = useState<string>("");
  const [forceReRender, setForceReRender] = useState<boolean>(false);
  const [queryParams, setQueryParams] = useState<{}>({});

  // Fetch products when pages or forceReRender changes
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProduct({
        page: pages,
        limit: 2,
        ...queryParams,
      });
      setTotalPages(response?.totalPages);
      setProductList(response?.products);
    };
    fetchProducts();
  }, [pages, queryParams]);

  function handleSetPage(page: number) {
    setPages(page);
  }

  const handleDeleteProduct = (productId: string) => {
    setDeleteProductId(productId); // Save the product ID for deletion
    setDeleteModalOpen(true);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
  };

  async function handleConfirmDelete() {
    if (deleteProductId) {
      await deleteProduct(deleteProductId);
      setDeleteModalOpen(false);
      setProductList((prevList) =>
        prevList?.filter((product) => product._id !== deleteProductId),
      );
    }
  }

  const handleSearchProduct = (value: string) => {
    if (value === "") {
      setQueryParams((prev) => {
        const { productName, ...rest } = prev; // Destructure to remove customerName
        return rest;
      });
    } else {
      setQueryParams((prev) => ({
        ...prev,
        productName: value,
      }));
    }
  };

  return {
    productList,
    totalPages,
    pages,
    handleSetPage,
    handleDeleteProduct,
    handleCancelDelete,
    handleConfirmDelete,
    deleteProduct,
    deleteModalOpen,
    handleSearchProduct,
  };
}
