"use client";

import { VoucherType } from "@/types/Voucher";
import { useVoucherContext } from "../store/ChangeVoucherContext";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Button,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

const columns = [
  {
    key: "_id",
    label: "ID VOUCHER",
  },
  {
    key: "voucherPoint",
    label: "ĐIỂM",
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
  {
    key: "action",
    label: "ACTION",
  },
];

export default function ChangeVoucherTable() {
  const {
    voucher,
    pages,
    totalPages,
    handleSetPage,
    handleChangeVoucher,
    userPoint,
    session,
  } = useVoucherContext();

  return (
    <div className="mt-4 space-y-2">
      <p>
        <span className="font-bold">Điểm</span>: {userPoint}
      </p>
      <Table
        aria-label="Bảng hiển thị danh mục"
        className="w-full"
        checkboxesProps={{
          classNames: {
            icon: "bg-black h-full w-full",
          },
        }}
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
        <TableBody items={voucher?.vouchers || []}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) =>
                columnKey === "action" ? (
                  <TableCell>
                    <Button
                      onClick={() =>
                        handleChangeVoucher({
                          voucherPoint: item.voucherPoint,
                          userId: session?.user._id as any,
                          voucherId: item._id,
                        })
                      }
                      variant="flat"
                      size="sm"
                      color="success"
                    >
                      Đổi Voucher
                    </Button>
                  </TableCell>
                ) : columnKey === "_id" ? (
                  <TableCell className="font-bold">
                    {item._id.slice(-3).toUpperCase()}
                  </TableCell>
                ) : columnKey === "voucherType" ? (
                  <TableCell>
                    {VoucherType[item.voucherType as keyof typeof VoucherType]}
                  </TableCell>
                ) : (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )
              }
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
