export enum VoucherType {
  ON_ORDER_SAVINGS = "Giảm tổng đơn",
  PER_ITEM_SAVINGS = "Giảm trên giá món",
}

export interface Voucher {
  _id: string;
  voucherPoint: number;
  salePercent: number;
  voucherType: string;
  voucherDescription: string;
}

interface VoucherId {
  _id: string;
  voucherPoint: number;
  voucherType: "PER_ITEM_SAVINGS" | "ON_ORDER_SAVINGS";
  voucherDescription: string;
  salePercent: number;
  updatedAt?: string;
}

interface HeldVoucher {
  voucherId: VoucherId;
  quantity: number;
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
