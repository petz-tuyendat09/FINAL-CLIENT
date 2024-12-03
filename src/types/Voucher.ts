export enum VoucherType {
  ON_ORDER_SAVINGS = "Giảm theo %",
  FLAT_DISCOUNT = "Giảm theo tiền",
  SHIPPING_DISCOUNT = "Giảm phí vận chuyển",
}

export interface Voucher {
  _id: string;
  voucherPoint: number;
  voucherType: "ON_ORDER_SAVINGS" | "FLAT_DISCOUNT" | "SHIPPING_DISCOUNT";
  expirationDate: number;
  maxRedemption: number;
  voucherDescription: string;
  salePercent: number;
  updatedAt?: string;
  flatDiscountAmount?: number;
  shippingDiscountAmount?: number;
  totalToUse?: string;
  limitedDate?: any;
  voucherQuantity?: number;
}

interface HeldVoucher {
  voucherId: Voucher;
  expirationDate: any;
  redemptionCount: number;
  quantity: number;
  limitedDate?: any;
  _id: string;
}
export interface VoucherOrder {
  voucherId: string | null;
  discount: number | null;
}

export interface HeldVouchersResponse {
  vouchers: HeldVoucher[];
  currentPage: number;
  totalPages: number;
}

export interface VoucherPaginate {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  vouchers: Voucher[];
}
