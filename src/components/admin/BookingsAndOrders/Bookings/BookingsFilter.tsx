import {
  Button,
  DatePicker,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import { useBookingContext } from "./store/BookingContext";
import { BookingStatus } from "@/types/Booking";

export default function BookingsFilter() {
  const {
    handleDateChange,
    handleClearDate,
    handleCustomerNameSearch,
    selectedValue,
    setSelectedKeys,
  } = useBookingContext();

  return (
    <div className="flex items-center gap-4">
      <DatePicker
        className="w-1/2"
        label="Chọn ngày"
        aria-label="Chọn ngày"
        onChange={(date) => handleDateChange(date as any)}
      />
      <Input
        onValueChange={handleCustomerNameSearch}
        className="w-1/2"
        label="Tên khách hàng"
      />

      <Dropdown className="h-full">
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
      <Button variant="flat" onClick={handleClearDate}>
        Xóa lọc
      </Button>
    </div>
  );
}
