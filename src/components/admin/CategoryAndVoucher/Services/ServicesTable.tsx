"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

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
import useServicesAction from "./_hook/useServicesAction";
import { ServicesType } from "@/types/Services";
import ModalAdd from "./Modal/ModalAdd";
import ModalDelete from "./Modal/ModalDelete";
import ModalEdit from "./Modal/ModalEdit";
import ServiceTableFilter from "./ServiceTableFilter";

const columns = [
  {
    key: "_id",
    label: "ID DỊCH VỤ",
  },
  {
    key: "serviceName",
    label: "TÊN DỊCH VỤ",
  },
  {
    key: "bookingAmount",
    label: "SỐ LƯỢNG ĐẶT",
  },
  {
    key: "servicePrice",
    label: "GIÁ TIỀN",
  },
  {
    key: "serviceType",
    label: "KIỂU DỊCH VỤ",
  },
  {
    key: "action",
    label: "ACTION",
  },
];

export default function ServicesTable() {
  const {
    services,
    pages,
    totalPages,
    handleSetPage,
    handleAddServices,
    handleCancelAddServices,
    handleEditServices,
    editModalOpen,
    handleCancelEdit,
    handleDeleteServices,
    handleCancelDelete,
    addModalOpen,
    deleteServices,
    deleteModalOpen,
    editServices,
    setSelectedKeys,
    selectedValue,
    clearQueryParams,
    setbookingOrder,
    bookingOrderSelect,
  } = useServicesAction({
    initialPage: 1,
  });

  return (
    <div className="mt-4">
      <div className="flex">
        <ServiceTableFilter
          setbookingOrder={setbookingOrder}
          bookingOrderSelect={bookingOrderSelect}
          selectedValue={selectedValue}
          setSelectedKeys={setSelectedKeys}
          clearQueryParams={clearQueryParams}
        />
        <Button
          onClick={handleAddServices}
          className="mb-4 ml-auto block w-fit px-4 py-2 text-black"
        >
          + Thêm dịch vụ
        </Button>
      </div>
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
        <TableBody items={services?.services || []}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) =>
                columnKey === "action" ? (
                  <TableCell>
                    <button
                      className="btn-edit"
                      onClick={() => handleEditServices(item._id)}
                    >
                      <Icon className="size-6" icon="uil:edit" />
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDeleteServices(item._id)}
                    >
                      <Icon className="size-6" icon="mdi:trash-outline" />
                    </button>
                  </TableCell>
                ) : columnKey === "_id" ? (
                  <TableCell className="font-bold">
                    {item._id.slice(-3).toUpperCase()}
                  </TableCell>
                ) : columnKey === "serviceType" ? (
                  <TableCell>
                    {
                      ServicesType[
                        item.serviceType as keyof typeof ServicesType
                      ]
                    }
                  </TableCell>
                ) : (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )
              }
            </TableRow>
          )}
        </TableBody>
      </Table>
      {addModalOpen && (
        <ModalAdd
          isDialogOpen={addModalOpen}
          handleCloseDialog={handleCancelAddServices}
        />
      )}
      {deleteModalOpen && (
        <ModalDelete
          isDialogOpen={deleteModalOpen}
          handleCloseDialog={handleCancelDelete}
          serviceId={deleteServices}
        />
      )}
      {editModalOpen && (
        <ModalEdit
          isDialogOpen={editModalOpen}
          handleCloseDialog={handleCancelEdit}
          editServiceId={editServices}
        />
      )}
    </div>
  );
}
