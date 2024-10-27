"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
  Pagination,
} from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { Booking, BookingStatus } from "@/types/Booking";
import formatMoney from "@/utils/formatMoney";
import { useBookingContext } from "./store/BookingContext";
import formatDate from "@/utils/formatDate";

const columns = [
  {
    key: "userId",
    label: "USERID",
  },
  {
    key: "customerName",
    label: "Tên khách hàng",
  },

  {
    key: "bookingDate",
    label: "NGÀY ĐẶT",
  },
  {
    key: "bookingHours",
    label: "GIỜ ĐẶT",
  },
  {
    key: "totalPrice",
    label: "TỔNG TIỀN",
  },
  {
    key: "bookingStatus",
    label: "TRẠNG THÁI",
  },
  {
    key: "action",
    label: "ACTION",
  },
];

export default function BookingsTable() {
  const { bookingList, page, totalPages, handleSetPage } = useBookingContext();

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

  // Format userId to show the first 3 characters in uppercase, or "Khách lẻ" if null
  const formatUserId = (userId: string | null) => {
    if (!userId) return "Khách lẻ"; // Display "Khách lẻ" if userId is null
    return userId.slice(0, 3).toUpperCase(); // Slice first 3 chars and convert to uppercase
  };

  return (
    <>
      <div className="">
        <h1 className="mb-6 text-2xl font-semibold">
          Danh sách dịch vụ đã đặt
        </h1>
        <Table
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                classNames={{
                  cursor: "bg-black",
                }}
                total={totalPages}
                onChange={(page) => handleSetPage(page)}
              />
            </div>
          }
          aria-label="Example table with dynamic content"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={bookingList?.bookings || []}>
            {(bookingItem: Booking) => (
              <TableRow key={bookingItem._id}>
                {(columnKey) => {
                  if (columnKey === "userId") {
                    // Format the userId to the first 3 uppercase characters or "Khách lẻ"
                    return (
                      <TableCell className="font-bold">
                        {formatUserId(bookingItem.userId)}
                      </TableCell>
                    );
                  }
                  if (columnKey === "bookingDate") {
                    return (
                      <TableCell>
                        {formatDate(bookingItem.bookingDate)}
                      </TableCell>
                    );
                  }
                  if (columnKey === "totalPrice") {
                    return (
                      <TableCell>
                        {formatMoney(bookingItem.totalPrice)}
                      </TableCell>
                    );
                  }
                  if (columnKey === "action") {
                    return (
                      <TableCell className="space-x-2">
                        <Button
                          variant="flat"
                          size="sm"
                          onClick={() => {
                            console.log("Viewing booking", bookingItem._id);
                          }}
                        >
                          Xem
                        </Button>
                      </TableCell>
                    );
                  }
                  if (columnKey === "bookingStatus") {
                    return (
                      <TableCell className="space-x-2">
                        {
                          BookingStatus[
                            bookingItem.bookingStatus as keyof typeof BookingStatus
                          ]
                        }
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell>{getKeyValue(bookingItem, columnKey)}</TableCell>
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
