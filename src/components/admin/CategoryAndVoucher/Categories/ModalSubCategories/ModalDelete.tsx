import { useDeleteSubCategoryMutation } from "@/libs/features/services/subcategories";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";

interface ModalAddProps {
  isDialogOpen: boolean;
  subCategoryId?: string;
  handleCloseDialog: () => void;
}

export default function ModalDelete({
  isDialogOpen,
  subCategoryId,
  handleCloseDialog,
}: ModalAddProps) {
  const [deleteCategory, { data }] = useDeleteSubCategoryMutation();

  async function handleDeleteCategory() {
    if (subCategoryId) {
      await deleteCategory({ subCategoryId: subCategoryId });
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
