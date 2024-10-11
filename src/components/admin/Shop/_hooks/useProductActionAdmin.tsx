import { useEffect, useState } from "react";
import { Product } from "@/types/Product";
import { getProduct, deleteProduct } from "@/apis/product"; // Your custom API function
import { useDeleteProductMutation } from "@/libs/features/services/product";
import { useRouter } from "next/navigation";

interface UseGetProductProps {
  initialPage: number;
  filterCategory?: string[];
  filterSubCategory?: string[];
}

export default function useProductActionAdmin({
  initialPage,
  filterCategory,
  filterSubCategory,
}: UseGetProductProps) {
  const [pages, setPages] = useState<number>(initialPage);
  const [totalPages, setTotalPages] = useState<number | undefined>(1);
  const [productList, setProductList] = useState<Product[]>();
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [deleteProductId, setDeleteProductId] = useState<string>("");
  const [deleteProductMutation] = useDeleteProductMutation();
  const [forceReRender, setForceReRender] = useState<boolean>(false);
  const router = useRouter();

  // Fetch products when pages or forceReRender changes
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProduct({ page: pages, limit: 2 });
      setTotalPages(response?.totalPages);
      setProductList(response?.products);
    };
    fetchProducts();
  }, [pages, forceReRender]);

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
  };
}
