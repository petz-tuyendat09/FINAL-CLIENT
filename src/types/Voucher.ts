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

export interface VoucherPaginate {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  vouchers: Voucher[];
}
