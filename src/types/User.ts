interface UserOrder {
  orderDate?: Date;
  orderId: string;
  orderTotal: number;
}

// Định nghĩa interface cho User
export interface User {
  _id: string;
  googleId: string | null;
  username: string;
  password: string;
  displayName: string;
  userActive: boolean;
  userAddress: string;
  userEmail: string;
  userPhone: string;
  userRole: string;
  userOrders: UserOrder[];
  userPoint: number;
  userImage: string;
}

export interface SecureUser {
  username: string;
  displayName: string;
  userImage: string;
}
