import {
  Button,
  DatePicker,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import { useOrderContext } from "./store/OrderContext";
import { OrderStatus } from "@/types/Order";
import formatSelectedKeys from "@/utils/formatSelectedValue";

enum SortValue {
  desc = "Tăng dần",
  asc = "Giảm dần",
}

enum userType {
  yes = "Khách đăng ký",
  no = "Khách lẻ",
}

export default function OrderFilter() {
  const {
    handleDateChange,
    handleClearDate,
    handleCustomerNameSearch,
    statusFilter,
    setStatusFilter,
    orderTotalFilter,
    productQuantityFilter,
    userFilter,
    setProductQuantityFilter,
    setOrderTotalFilter,
    setUserFilter,
  } = useOrderContext();

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
            {OrderStatus[
              formatSelectedKeys(statusFilter) as keyof typeof OrderStatus
            ] || "Status"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Multiple selection example"
          variant="flat"
          closeOnSelect={false}
          disallowEmptySelection
          selectionMode="single"
          onSelectionChange={setStatusFilter as any}
        >
          {Object.keys(OrderStatus).map((statusKey) => (
            <DropdownItem key={statusKey}>
              {OrderStatus[statusKey as keyof typeof OrderStatus]}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <Dropdown className="h-full">
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {SortValue[
              formatSelectedKeys(
                productQuantityFilter,
              ) as keyof typeof SortValue
            ] || "Số lượng đặt"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Multiple selection example"
          variant="flat"
          closeOnSelect={false}
          disallowEmptySelection
          selectionMode="single"
          onSelectionChange={setProductQuantityFilter as any}
        >
          <DropdownItem key="desc">Số sản phẩm giảm dần</DropdownItem>
          <DropdownItem key="asc">Số sản phẩm tăng dần</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown className="h-full">
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {SortValue[
              formatSelectedKeys(orderTotalFilter) as keyof typeof SortValue
            ] || "Tổng tiền"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Multiple selection example"
          variant="flat"
          closeOnSelect={false}
          disallowEmptySelection
          selectionMode="single"
          onSelectionChange={setOrderTotalFilter as any}
        >
          <DropdownItem key="desc">Tổng tiền giảm dần</DropdownItem>
          <DropdownItem key="asc">Tổng tiền tăng dần</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown className="h-full">
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {userType[
              formatSelectedKeys(userFilter) as keyof typeof userType
            ] || "Khách"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Multiple selection example"
          variant="flat"
          closeOnSelect={false}
          disallowEmptySelection
          selectionMode="single"
          onSelectionChange={setUserFilter as any}
        >
          <DropdownItem key="no">Khách lẻ</DropdownItem>
          <DropdownItem key="yes">Khách có đăng ký</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Button variant="flat" onClick={handleClearDate}>
        Xóa lọc
      </Button>
    </div>
  );
}
