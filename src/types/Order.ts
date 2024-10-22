import { Product } from "./Product";

export interface Order {
  createdAt(createdAt: any): import("react").ReactNode;
  createAt(createAt: any): import("react").ReactNode;
  date(date: any): import("react").ReactNode;
  price(price: any): import("react").ReactNode;
  orderDate(orderDate: any): import("react").ReactNode;
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

export enum OrderStatus {
  PENDING = "Đang chờ",
  COMPLETED = "Hoàn thành",
  CANCELLED = "Đã hủy",
}

