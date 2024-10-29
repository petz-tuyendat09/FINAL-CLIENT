import { CartItem } from "./Cart";
import { VoucherOrder } from "./Voucher";

interface UserOrder {
  orderDate?: Date;
  orderId: string;
  orderTotal: number;
}

export interface RegisterUser {
  email: string;
  username: string;
  password: string;
}

export interface LoginUser {
  loginkey: string;
  password: string;
}

export interface VerifyEmail {
  email: string;
  otpCode: number;
}

export interface UserCart {
  _id: string;
  cartItems: CartItem[];
}

// Định nghĩa interface cho User
export interface User {
  _id: string;
  googleId: string | null;
  username: string;
  displayName: string;
  userActive: boolean;
  userAddress: string;
  userEmail: string;
  userPhone: string;
  userRole: "user" | "admin";
  userPoint: number;
  userExperiments: number;
  userVoucher: string[];
  userImage: string;
  userOrders: any[];
  userCart: UserCart;
  __v: number;
  token: string;
  refreshToken: string;
}

export interface SecureUser {
  username: string;
  displayName: string;
  userImage: string;
}

export interface UserState {
  user: SecureUser | null;
  token: string | null;
  voucher: VoucherOrder | null;
}
