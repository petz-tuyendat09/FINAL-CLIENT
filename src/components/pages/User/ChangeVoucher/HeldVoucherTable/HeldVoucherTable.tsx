"use client";

import { VoucherType } from "@/types/Voucher";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { useHeldVoucherContext } from "../store/HeldVoucherContext";

const columns = [
  {
    key: "_id",
    label: "ID VOUCHER",
  },
  {
    key: "quantity",
    label: "SỐ LƯỢNG",
  },
  {
    key: "salePercent",
    label: "GIẢM GIÁ",
  },
  {
    key: "voucherType",
    label: "KIỂU GIẢM GIÁ",
  },
  {
    key: "voucherDescription",
    label: "MÔ TẢ",
  },
];

export default function ChangeVoucherTable() {
  const { voucher, pages, totalPages, handleSetPage } = useHeldVoucherContext();

  return (
    <div className="mt-4 space-y-2">
      <Table
        aria-label="Bảng hiển thị danh mục"
        className="w-full"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              classNames={{
                cursor: "bg-black",
              }}
              page={pages}
              total={totalPages || 1}
              onChange={(page: number) => handleSetPage(page)}
            />
          </div>
        }
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          emptyContent={"Bạn chưa có voucher nào."}
          items={voucher?.vouchers || []}
        >
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => {
                if (columnKey === "_id") {
                  return (
                    <TableCell className="font-bold">
                      {item.voucherId._id.slice(-3).toUpperCase()}
                    </TableCell>
                  );
                }
                if (columnKey === "voucherType") {
                  return (
                    <TableCell>
                      {
                        VoucherType[
                          item.voucherId.voucherType as keyof typeof VoucherType
                        ]
                      }
                    </TableCell>
                  );
                }
                if (columnKey === "salePercent") {
                  return <TableCell>{item.voucherId.salePercent}%</TableCell>;
                }
                if (columnKey === "voucherDescription") {
                  return (
                    <TableCell>{item.voucherId.voucherDescription}</TableCell>
                  );
                }
                return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
