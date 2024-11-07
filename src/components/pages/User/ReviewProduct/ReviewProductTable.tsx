"use client";

import {
  DatePicker,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { BookingStatus } from "@/types/Booking";
import formatMoney from "@/utils/formatMoney"; // Import the formatMoney function
import useReviewAction from "./_hooks/useReviewAction";
import formatDate from "@/utils/formatDate";
import formatSelectedKeys from "@/utils/formatSelectedValue";

const columns = [
  {
    key: "createdAt",
    label: "NGÀY ĐẶT",
  },
  {
    key: "productName",
    label: "TÊN SẢN PHẨM",
  },
  {
    key: "rating",
    label: "ĐÁNH GIÁ",
  },
  {
    key: "action",
    label: "ACTION",
  },
];

export default function ServicesList() {
  const {
    reviewList,
    selectedKeys,
    setSelectedKeys,
    bookingDetailId,
    viewDetail,
    handleCancelBooking,
    cancelBookingId,
    cancelBooking,
    handleReview,
    handleCancelReview,
    handleCloseCancelBooking,
    isReview,
    handleClearQuery,
  } = useReviewAction();

  // Get the local time zone
  const currentDate = today(getLocalTimeZone());

  const isPastDate = (bookingDate: string) => {
    const booking = new Date(bookingDate);
    const current = new Date(
      currentDate.year,
      currentDate.month - 1,
      currentDate.day,
    );
    return booking < current;
  };

  return (
    <>
      <div className="">
        <h1 className="mb-6 text-2xl font-semibold">
          Danh sách dịch vụ đã đặt
        </h1>
        <div className="mb-6 flex gap-4">
          <Dropdown>
            <DropdownTrigger className="border-none">
              <Button
                variant="bordered"
                className="bg-[#f2f2f2] text-black hover:bg-[#e0e0e0]"
              >
                {formatSelectedKeys(selectedKeys) === "yes"
                  ? "Đã đánh giá"
                  : "Chưa đánh giá" || "Status"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Multiple selection example"
              variant="flat"
              closeOnSelect={false}
              disallowEmptySelection
              selectionMode="single"
              onSelectionChange={setSelectedKeys as any}
            >
              <DropdownItem key="yes">Đã đánh giá</DropdownItem>
              <DropdownItem key="no">Chưa đánh giá</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button
            onClick={handleClearQuery}
            className="bg-[#f2f2f2] text-black hover:bg-[#e0e0e0]"
          >
            Xóa lọc
          </Button>
        </div>
        <Table
          classNames={{
            th: ["bg-black", "text-white", "border-b", "border-divider"],
          }}
          aria-label="Example table with dynamic content"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody
            emptyContent={"Bạn chưa mua sản phẩm nào."}
            items={(reviewList as any)?.reviews || []}
          >
            {(reviewItem: any) => (
              <TableRow key={reviewItem._id}>
                {(columnKey) => {
                  if (columnKey === "createdAt") {
                    return (
                      <TableCell>{formatDate(reviewItem.createdAt)}</TableCell>
                    );
                  }
                  if (columnKey === "bookingStatus") {
                    // Format the booking date to YYYY-MM-DD
                    return (
                      <TableCell>
                        {
                          BookingStatus[
                            reviewItem?.bookingStatus as keyof typeof BookingStatus
                          ]
                        }
                      </TableCell>
                    );
                  }
                  if (columnKey === "rating") {
                    return (
                      <TableCell>
                        {formatMoney(reviewItem.rating) || "Chưa đánh giá"}
                      </TableCell>
                    );
                  }
                  if (columnKey === "action") {
                    return (
                      <TableCell className="space-x-2">
                        <Button variant="flat" size="sm">
                          Đánh giá
                        </Button>
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell>{getKeyValue(reviewItem, columnKey)}</TableCell>
                  );
                }}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
