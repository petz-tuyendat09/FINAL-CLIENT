import { getLocalTimeZone, today } from "@internationalized/date";
import { useOrderContext } from "./store/OrderContext";

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
import { OrderAdmin, OrderStatus } from "@/types/Order";
import formatDate from "@/utils/formatDate";
import formatMoney from "@/utils/formatMoney";
import ModalOrderDetail from "./Modal/ModalDetail";

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
    key: "createAt",
    label: "NGÀY ĐẶT",
  },
  {
    key: "totalAfterDiscount",
    label: "TỔNG TIỀN",
  },
  {
    key: "productId",
    label: "SỐ SẢN PHẨM",
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

export default function OrderTable() {
  const {
    orderList,
    page,
    totalPages,
    handleSetPage,
    handleViewOrderDetail,
    viewDetail,
    orderId,
    handleCancelViewOrderDetail,
  } = useOrderContext();

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

  const formatUserId = (userId: string | null) => {
    if (!userId) return "Khách lẻ";
    return userId.slice(0, 3).toUpperCase();
  };

  return (
    <div className="">
      <h1 className="mb-6 text-2xl font-semibold">Danh sách dịch vụ đã đặt</h1>
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
        <TableBody items={orderList?.orders || []}>
          {(orderItem: OrderAdmin) => (
            <TableRow key={orderItem._id}>
              {(columnKey) => {
                if (columnKey === "userId") {
                  // Format the userId to the first 3 uppercase characters or "Khách lẻ"
                  return (
                    <TableCell className="font-bold">
                      {formatUserId(orderItem.userId)}
                    </TableCell>
                  );
                }
                if (columnKey === "createAt") {
                  return (
                    <TableCell>{formatDate(orderItem.createdAt)}</TableCell>
                  );
                }
                if (columnKey === "orderAfterDiscount") {
                  return (
                    <TableCell>
                      {formatMoney(orderItem.orderAfterDiscount)}
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
                          handleViewOrderDetail(orderItem._id);
                        }}
                      >
                        Xem
                      </Button>
                    </TableCell>
                  );
                }
                if (columnKey === "productId") {
                  return <TableCell>{orderItem.productId.length}</TableCell>;
                }

                if (columnKey === "orderStatus") {
                  return (
                    <TableCell className="space-x-2">
                      {
                        OrderStatus[
                          orderItem.orderStatus as keyof typeof OrderStatus
                        ]
                      }
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
      {viewDetail && (
        <ModalOrderDetail
          handleCloseDialog={handleCancelViewOrderDetail}
          isDialogOpen={viewDetail}
          orderId={orderId}
        />
      )}
    </div>
  );
}
