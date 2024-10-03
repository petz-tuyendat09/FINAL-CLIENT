interface ProductDetailDescription {
  _id: string;
  detailContent: string;
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
  productDetailDescription: ProductDetailDescription;
  productCategory: string;
  productSubCategory: string;
  animalType: string;
  productRating: number;
  productOption: [];
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
