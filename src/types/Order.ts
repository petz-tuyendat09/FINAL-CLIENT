import { Product } from "./Product";

export interface Order {
  _id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  productId: OrderProduct[];
  orderTotal: number;
  voucherId: string;
  userId: User;
  orderAfterDiscount: number;
  paymentMethod: "COD" | "BANKING";
  orderStatus: "PENDING" | "DELIVERING" | "CANCEL";
}

export interface OrderProduct {
  _id: string;
  productId: Product;
  productQuantity: number;
}

export interface User {
  _id: string;
  username: string;
  userEmail: string;
  userPhone: string;
}
