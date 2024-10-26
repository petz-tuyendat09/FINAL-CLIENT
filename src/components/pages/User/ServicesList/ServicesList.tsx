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
import useServicesListAction from "./_hook/useServicesListAction";
import { BookingStatus } from "@/types/Booking";
import formatMoney from "@/utils/formatMoney"; // Import the formatMoney function
import ModalBookingDetail from "./Modal/ModalBookingDetail";
import formatDate from "@/utils/formatDate";
import ModalCancelBooking from "./Modal/ModalCancelBooking";

const columns = [
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

export default function ServicesList() {
  const {
    bookingList,
    handleDateChange,
    selectedValue,
    setSelectedKeys,
    handleViewDetail,
    bookingDetailId,
    viewDetail,
    handleCloseDetail,
    handleCancelBooking,
    cancelBookingId,
    cancelBooking,
    handleCloseCancelBooking,
  } = useServicesListAction();

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
          <DatePicker
            aria-label="Chọn ngày"
            onChange={(date) => handleDateChange(date)}
          />
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="capitalize">
                {BookingStatus[selectedValue as keyof typeof BookingStatus] ||
                  "Status"}
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
              {Object.keys(BookingStatus).map((statusKey) => (
                <DropdownItem key={statusKey}>
                  {BookingStatus[statusKey as keyof typeof BookingStatus]}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
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
          <TableBody items={bookingList?.bookings || []}>
            {(bookingItem) => (
              <TableRow key={bookingItem._id}>
                {(columnKey) => {
                  if (columnKey === "bookingDate") {
                    // Format the booking date to YYYY-MM-DD
                    return (
                      <TableCell>
                        {formatDate(bookingItem.bookingDate)}
                      </TableCell>
                    );
                  }
                  if (columnKey === "bookingStatus") {
                    // Format the booking date to YYYY-MM-DD
                    return (
                      <TableCell>
                        {
                          BookingStatus[
                            bookingItem?.bookingStatus as keyof typeof BookingStatus
                          ]
                        }
                      </TableCell>
                    );
                  }
                  if (columnKey === "totalPrice") {
                    // Format totalPrice using formatMoney function
                    return (
                      <TableCell>
                        {formatMoney(bookingItem.totalPrice)}
                      </TableCell>
                    );
                  }
                  if (columnKey === "action") {
                    const pastDate = isPastDate(bookingItem.bookingDate);
                    return (
                      <TableCell className="space-x-2">
                        <Button
                          variant="flat"
                          size="sm"
                          onClick={() => {
                            handleViewDetail(bookingItem._id);
                          }}
                        >
                          Xem
                        </Button>
                        <Button
                          variant="flat"
                          size="sm"
                          color="danger"
                          isDisabled={
                            pastDate || bookingItem.bookingStatus == "Canceled"
                          }
                          onClick={() => {
                            handleCancelBooking(bookingItem._id);
                          }}
                        >
                          Hủy
                        </Button>
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
        {viewDetail && (
          <ModalBookingDetail
            isDialogOpen={viewDetail}
            handleCloseDialog={handleCloseDetail}
            bookingId={bookingDetailId}
          />
        )}
        {cancelBooking && (
          <ModalCancelBooking
            isDialogOpen={cancelBooking}
            handleCloseDialog={handleCloseCancelBooking}
            bookingId={cancelBookingId}
          />
        )}
      </div>
    </>
  );
}
