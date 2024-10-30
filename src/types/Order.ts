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
  products: OrderProduct[];
  orderTotal: number;
  voucherId: string;
  userId: User;
  orderAfterDiscount: number;
  paymentMethod: "COD" | "BANKING";
  orderStatus: "PENDING" | "DELIVERING" | "CANCELLED";
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
  productId: string;
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
