interface ProductCategory {
  categoryId: string;
  categoryName: string;
}

interface ProductSubCategory {
  categoryId: string;
  categoryName: string;
}

export interface Product {
  _id: string;
  productName: string;
  productPrice: number;
  salePercent: number;
  productBuy: number;
  productSlug: string;
  productQuantity: number;
  productThumbnail: string;
  productImages: [];
  productDescription: string;
  productCategory: ProductCategory;
  productSubCategory: ProductSubCategory;
  productFor: string;
}

export interface PaginateProduct {
  products: Product[];
  totalPages: number;
}
