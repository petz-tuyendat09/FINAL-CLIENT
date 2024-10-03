import { createContext, ReactNode, useContext } from "react";
import useProductActionAdmin from "../_hooks/useProductActionAdmin";
import { Product } from "@/types/Product";

interface ProductActionContextProps {
  products: Product[];
  handleFetchMore: (limit: number) => void;
  handleQueryProduct: (productName: string) => void;
  handleDeleteProduct: (id: string) => void;
  totalPages: number;
  currPage: number;
}

const ProductActionContext = createContext<
  ProductActionContextProps | undefined
>(undefined);

export const useProductActionContext = () => {
  const context = useContext(ProductActionContext);
  if (!context) {
    throw new Error(
      "useProductActionContext must be used within a ProductActionProvider",
    );
  }
  return context;
};

interface ProductActionProviderProps {
  children: ReactNode;
}

export function ProductActionProvider({
  children,
}: ProductActionProviderProps) {
  const productAction = useProductActionAdmin({});

  return (
    <ProductActionContext.Provider value={productAction}>
      {children}
    </ProductActionContext.Provider>
  );
}
