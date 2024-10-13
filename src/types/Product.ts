interface ProductDetailDescription {
  _id: string;
  detailContent: string;
}

export interface ProductOption {
  name: string;
  productPrice: number;
  productName: number;
  productQuantity: number;
}

export interface Product {
  _id: string;
  productName: string;
  salePercent: number;
  productBuy: number;
  productSlug: string;
  productThumbnail: string;
  productImages: [];
  productDescription: string;
  productDetailDescription: ProductDetailDescription;
  productCategory: string;
  productSubCategory: string;
  productRating: number;
  productOption: ProductOption[];
  ratingCount: number;
}

export interface PaginateProduct {
  products: Product[];
  pagination: {
    currentPage: number;
    limit: number;
    totalDocuments: number;
    totalPages: number;
  };
}
