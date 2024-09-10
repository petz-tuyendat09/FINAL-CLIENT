interface ProductCategory {
    categoryId: string;
    categoryName: string;
}

interface ProductSubCategory {
    categoryId: string;
    categoryName: string;
}

export interface IProduct {
    _id: string;
    productName: string;
    productPrice: number;
    salePercent: number;
    productBuy: number;
    productSlug: string;
    productQuantity: number;
    productImage: string;
    productDescription: string;
    productCategory: ProductCategory;
    productSubCategory: ProductSubCategory;
    productFor: string;
}