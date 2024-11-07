import { CartItem } from "./Cart";

export interface Order {
  customerName: string;
  customerPhone: string;
  customerEmail: string | undefined;
  customerAddress: string | null;
  products: CartItem[];
  orderTotal: number;
  voucherId: string;
  orderDiscount: number;
  userId: string | undefined;
  totalAfterDiscount: number;
  paymentMethod: string;
  orderStatus: string;
  createdAt: string;
  updatedAt: string;
  orderDate: string;
  orderId: string;
  userPoint: number;
  paymentStatus: Boolean;
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
  DELIVERING = "Đang giao",
  DELIVERED = "Đã giao",
  CANCELLED = "Đã hủy",
}

interface Product {
  _id: string;
  productQuantity: number;
  productOption: string;
  productPrice: number;
}

export interface OrderAdmin {
  _id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  products: Product[];
  orderTotal: number;
  voucherId: string;
  orderDiscount: number;
  userId: string | null;
  orderAfterDiscount: number;
  paymentMethod: string;
  orderStatus: string;
  createdAt: string;
  updateAt: string;
}

export interface PaginateOrder {
  orders: OrderAdmin[];
  currentPage: number;
  totalPages: number;
}
