interface ProductDetailDescription {
  _id: string;
  detailContent: string;
}

export interface ProductOption {
  _id: string;
  name: string;
  productPrice: number;
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
  currentPage: number;
  totalPages: number;
}
