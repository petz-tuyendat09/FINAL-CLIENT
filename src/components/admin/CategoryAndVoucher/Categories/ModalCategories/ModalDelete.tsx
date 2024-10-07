import { useDeleteCategoryMutation } from "@/libs/features/services/categories";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";
import { useEffect } from "react";

interface ModalAddProps {
  isDialogOpen: boolean;
  categoryId?: string;
  handleCloseDialog: () => void;
}

export default function ModalDelete({
  isDialogOpen,
  categoryId,
  handleCloseDialog,
}: ModalAddProps) {
  const [deleteCategory, { data }] = useDeleteCategoryMutation();

  async function handleDeleteCategory() {
    if (categoryId) {
      await deleteCategory({ deleteCategoryId: categoryId });
      handleCloseDialog();
    }
  }

  return (
    <Modal
      backdrop="blur"
      isOpen={isDialogOpen}
      onClose={handleCloseDialog}
      classNames={{
        backdrop:
          "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-center">Thêm danh mục mới</ModalHeader>
            <ModalBody>
              <p>Bạn có chắc chắn muốn xóa danh mục</p>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={handleCloseDialog}
                className="rounded-full"
              >
                Hủy
              </Button>
              <Button
                className="rounded-full bg-black text-white"
                onPress={handleDeleteCategory}
              >
                Xóa
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
