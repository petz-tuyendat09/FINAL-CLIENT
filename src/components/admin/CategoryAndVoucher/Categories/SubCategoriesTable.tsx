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
import useSubCategoriesAction from "./_hook/useSubCategoriesAction";
import { Icon } from "@iconify/react/dist/iconify.js";
import ModalEdit from "./ModalSubCategories/ModalEdit";
import ModalAdd from "./ModalSubCategories/ModalAdd";
import ModalDelete from "./ModalSubCategories/ModalDelete";
import { useState } from "react";
import { useDeleteSubCategoryMutation } from "@/libs/features/services/subcategories";

const columns = [
  {
    key: "_id",
    label: "ID DANH MỤC CON",
  },
  {
    key: "subCategoryName",
    label: "TÊN DANH MỤC CON",
  },
  {
    key: "categoryName", // Thêm cột để hiển thị categoryName
    label: "TÊN DANH MỤC CHA",
  },
  {
    key: "action",
    label: "ACTION",
  },
];

export default function SubCategoriesTable() {
  const {
    subcategories,
    pages,
    totalPages,
    handleSetPage,
    handleEditSubCategory,
    editModalOpen,
    editSubCategory,
    handleCancelEdit,
    handleAddSubCategory,
    handleCancelAddSubCategory,
    addModalOpen,
    deleteModalOpen,
    handleDeleteSubCategory,
    handleCancelDelete,
    deleteSubCategory,
  } = useSubCategoriesAction({ initialPage: 1 });
  const [deleteCategory] = useDeleteSubCategoryMutation();

  const [selectedIds, setSelectedIds] = useState<React.Key[]>([]);

  const handleSelectedRows = (selectedKeys: Set<React.Key>) => {
    const selectedIdsArray = Array.from(selectedKeys);
    setSelectedIds(selectedIdsArray);
  };

  function handleDeleteMultiple() {
    deleteCategory({ subCategoryId: selectedIds as any });
  }

  return (
    <div className="w-1/2">
      <div className="flex">
        {selectedIds.length > 0 && (
          <button
            onClick={handleDeleteMultiple}
            className="mb-4 block w-fit rounded-full bg-black px-4 py-2 text-white"
          >
            Xóa
          </button>
        )}
        <button
          onClick={handleAddSubCategory}
          className="mb-4 ml-auto block w-fit rounded-full bg-black px-4 py-2 text-white"
        >
          Thêm danh mục con
        </button>
      </div>
      <Table
        selectionMode="multiple"
        aria-label="Bảng hiển thị danh mục"
        className="w-full"
        onSelectionChange={(selectedKeys: any) =>
          handleSelectedRows(selectedKeys)
        }
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
        <TableBody items={subcategories?.subCategories || []}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => {
                if (columnKey === "action") {
                  return (
                    <TableCell>
                      <button
                        className="btn-edit"
                        onClick={() => handleEditSubCategory(item._id)}
                      >
                        <Icon className="size-6" icon="uil:edit" />
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDeleteSubCategory(item._id)}
                      >
                        <Icon className="size-6" icon="mdi:trash-outline" />
                      </button>
                    </TableCell>
                  );
                } else if (columnKey === "_id") {
                  return (
                    <TableCell className="font-bold">
                      {item._id.slice(-3).toUpperCase()}
                    </TableCell>
                  );
                } else if (columnKey === "categoryName") {
                  return (
                    <TableCell>
                      {(item.categoryId as any)?.categoryName || "N/A"}
                    </TableCell>
                  );
                } else {
                  return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
                }
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>

      {editModalOpen && (
        <ModalEdit
          isDialogOpen={editModalOpen}
          subCategoryId={editSubCategory}
          handleCloseDialog={handleCancelEdit}
        />
      )}
      {addModalOpen && (
        <ModalAdd
          isDialogOpen={addModalOpen}
          handleCloseDialog={handleCancelAddSubCategory}
        />
      )}
      {deleteModalOpen && (
        <ModalDelete
          isDialogOpen={deleteModalOpen}
          subCategoryId={deleteSubCategory}
          handleCloseDialog={handleCancelDelete}
        />
      )}
    </div>
  );
}
