"use client";

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
import useCategoriesAction from "./_hook/useCategoriesAction";
import ModalEdit from "./ModalCategories/ModalEdit";
import ModalAdd from "./ModalCategories/ModalAdd";
import { Icon } from "@iconify/react/dist/iconify.js";
import ModalDelete from "./ModalCategories/ModalDelete";

const columns = [
  {
    key: "_id",
    label: "ID DANH MỤC",
  },
  {
    key: "categoryName",
    label: "TÊN DANH MỤC",
  },
  {
    key: "action",
    label: "ACTION",
  },
];

export default function CategoriesTable() {
  const {
    categories,
    pages,
    totalPages,
    handleSetPage,
    handleEditCategory,
    editModalOpen,
    editCategory,
    handleCancelEdit,
    handleAddCategory,
    handleCancelAddCategory,
    addModalOpen,
    deleteModalOpen,
    handleDeleteCategory,
    handleCancelDelete,
    deleteCategory,
  } = useCategoriesAction({
    initialPage: 1,
  });

  return (
    <div className="w-1/2">
      <button
        onClick={handleAddCategory}
        className="mb-4 ml-auto block w-fit rounded-full bg-black px-4 py-2 text-white"
      >
        Thêm danh mục
      </button>
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
        <TableBody items={categories?.categories || []}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) =>
                columnKey === "action" ? (
                  <TableCell>
                    <button
                      className="btn-edit"
                      onClick={() => handleEditCategory(item._id)}
                    >
                      <Icon className="size-6" icon="uil:edit" />
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDeleteCategory(item._id)}
                    >
                      <Icon className="size-6" icon="mdi:trash-outline" />
                    </button>
                  </TableCell>
                ) : columnKey === "_id" ? (
                  <TableCell className="font-bold">
                    {item._id.slice(-3).toUpperCase()}
                  </TableCell>
                ) : (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )
              }
            </TableRow>
          )}
        </TableBody>
      </Table>
      {editModalOpen && (
        <ModalEdit
          categoryId={editCategory}
          isDialogOpen={editModalOpen}
          handleCloseDialog={handleCancelEdit}
        />
      )}
      {addModalOpen && (
        <ModalAdd
          isDialogOpen={addModalOpen}
          handleCloseDialog={handleCancelAddCategory}
        />
      )}

      {deleteModalOpen && (
        <ModalDelete
          isDialogOpen={deleteModalOpen}
          categoryId={deleteCategory}
          handleCloseDialog={handleCancelDelete}
        />
      )}
    </div>
  );
}
