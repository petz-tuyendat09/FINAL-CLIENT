export interface CartItem {
  productId: string;
  salePercent: number;
  productName: string;
  productOption: string;
  productPrice: number;
  productQuantity: number;
  productImage: string;
  productSlug: string;
}

export interface Cart {
  cartId: string | null;
  cartItems: CartItem[];
}
