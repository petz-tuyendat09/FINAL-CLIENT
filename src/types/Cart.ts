export interface CartItem {
  productId: string;
  salePercent: number;
  productName: string;
  productOption: string | undefined;
  productPrice: number;
  productQuantity: number;
  productImage: string | undefined;
}

export interface Cart {
  cartId: string | null;
  cartItems: CartItem[];
}

export interface RemoveCartItem {
  productId: string;
  productOption: string | undefined;
  cartId: string | undefined;
}