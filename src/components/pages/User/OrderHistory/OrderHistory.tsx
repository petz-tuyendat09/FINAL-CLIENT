// "use client";
// import { useGetOrdersByUserIdQuery } from "@/libs/features/services/order";
// import { useSession } from "next-auth/react";

// export default function History() {
//   const session = useSession();
//   const userId = session?.data?.user._id;

//   const { data } = useGetOrdersByUserIdQuery({ userId: userId });
//   console.log(data);
//   return (
//     <>
//       <div className="">
//         <h1 className="mb-6 text-2xl font-semibold">Lịch sử đơn hàng</h1>
//         <div className="mb-6">
//           <div className="relative">
//             <input
//               className="w-full rounded-lg border border-gray-300 p-3"
//               placeholder="Tìm tên sản phẩm..."
//               type="text"
//             />
//             <i className="fas fa-search absolute right-3 top-3 text-gray-500"></i>
//           </div>
//         </div>
//         <div className="rounded-lg bg-white p-6 shadow">
//           <div className="grid grid-cols-4 gap-4 rounded-lg bg-black p-3 text-center font-semibold text-white">
//             <div>Tên sản phẩm</div>
//             <div>Giá (VND)</div>
//             <div>Ngày đặt</div>
//             <div>Trạng thái</div>
//           </div>
//           <div className="mt-10 flex flex-col items-center justify-center">
//             {/* image here  */}
//             <p className="text-gray-500">Chưa có lịch sử</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

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
import useOrdersHistoryAction from "./_hook/useGetOrderAction";
import { OrderStatus } from "@/types/Order";
import formatMoney from "@/utils/formatMoney";

const columns = [
  {
    key: "createdAt",
    label: "NGÀY ĐẶT",
  },
  {
    key: "productCount",
    label: "SẢN PHẨM",
  },
  {
    key: "paymentMethod",
    label: "PHƯƠNG THỨC THANH TOÁN",
  },
  {
    key: "totalPrice",
    label: "GIÁ TIỀN",
  },
  {
    key: "orderStatus",
    label: "TRẠNG THÁI",
  },
  {
    key: "action",
    label: "ACTION",
  },
];

export default function OrdersHistory() {
  const { orderList, handleDateChange, selectedValue, setSelectedKeys } =
    useOrdersHistoryAction();

  const currentDate = today(getLocalTimeZone());

  const isPastDate = (orderItem: string) => {
    const order = new Date(orderItem);
    const current = new Date(
      currentDate.year,
      currentDate.month - 1,
      currentDate.day,
    );
    return order < current;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) {
      return "Invalid Date";
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    return date.toISOString().split("T")[0];
  };

  const formatMoney = (amount: number | undefined): string => {
    if (amount === undefined || amount === null) {
      return "0";
    }
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };


  return (
    <>
      <div className="">
        <h1 className="mb-6 text-2xl font-semibold">Lịch sử đơn hàng</h1>
        <div className="mb-6 flex gap-4">
          <DatePicker
            aria-label="Chọn ngày"
            onChange={(date) => handleDateChange(date)}
          />
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="capitalize">
                {OrderStatus[selectedValue as keyof typeof OrderStatus] ||
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
              {Object.keys(OrderStatus).map((statusKey) => (
                <DropdownItem key={statusKey}>
                  {OrderStatus[statusKey as keyof typeof OrderStatus]}
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
          <TableBody items={orderList || []}>
            {(orderItem) => (
              <TableRow key={orderItem._id}>
                {(columnKey) => {
                  if (columnKey === "createdAt") {
                    return (
                      <TableCell>
                        {formatDate(orderItem.createdAt)}
                      </TableCell>
                    );
                  }
                  if (columnKey === "productCount") {
                    return (
                      <TableCell>
                        {orderItem.productId?.length || 0} {/* Show count of products */}
                      </TableCell>
                    );
                  }
                  if (columnKey === "paymentMethod") {
                    // return <TableCell>{orderItem.paymentMethod}</TableCell>;
                    return <TableCell>
                          {
                          orderItem.paymentMethod === 'COD'
                          ? 'Thanh toán khi nhận hàng'
                          : orderItem.paymentMethod === 'BANKING'
                          ? 'Thanh toán bằng ngân hàng'
                          : orderItem.paymentMethod
                          }
                    </TableCell>;
                  }
                  if (columnKey === "totalPrice") {
                    return (
                      <TableCell>
                        {formatMoney(orderItem.orderAfterDiscout)}
                      </TableCell>
                    );
                  }
                  if (columnKey === "orderStatus") {
                    return (
                      <TableCell>
                        {OrderStatus[orderItem.orderStatus]}
                      </TableCell>
                    );
                  }
                  if (columnKey === "action") {
                    const pastDate = isPastDate(orderItem.createdAt);
                    return (
                      <TableCell className="space-x-2">
                        <Button
                          variant="flat"
                          size="sm"
                          onClick={() => {
                            console.log("Viewing order", orderItem._id);
                          }}
                        >
                          Xem
                        </Button>
                        <Button
                          variant="flat"
                          size="sm"
                          color="danger"
                          isDisabled={pastDate}
                          onClick={() => {
                            console.log("Canceling order", orderItem._id);
                          }}
                        >
                          Hủy
                        </Button>
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell>{getKeyValue(orderItem, columnKey)}</TableCell>
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
