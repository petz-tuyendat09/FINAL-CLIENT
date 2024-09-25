


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
  productCategory: string;
  productSubCategory: string;
  animalType: string;
  productRating: number;
  productWeight: [];
  ratingCount: number;
}

export interface PaginateProduct {
  products: Product[];
  pagination: {
    currentPage:number,
    limit:number,
    totalDocuments:number;
    totalPages: number,
  }
}
