import { useGetCategoriesQuery } from "@/libs/features/services/categories";
import { useAddSubCategoryMutation } from "@/libs/features/services/subcategories";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

interface ModalAddProps {
  isDialogOpen: boolean;
  handleCloseDialog: () => void;
}

export default function ModalAdd({
  isDialogOpen,
  handleCloseDialog,
}: ModalAddProps) {
  const [newSubCategoryName, setNewSubCategoryName] = useState<string>("");
  const [currentCategory, setCurrentCategory] = useState("");

  const { data: categories } = useGetCategoriesQuery();

  const [addSubCategory, { data, error: mutationError }] =
    useAddSubCategoryMutation();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [categoryErrorMessage, setCategoryErrorMessage] = useState<string>("");

  function handleChangeSubCategoryName(e: React.ChangeEvent<HTMLInputElement>) {
    if (errorMessage) setErrorMessage("");
    setNewSubCategoryName(e.target.value);
  }

  // Handle adding the category
  function handleAddCategory() {
    if (!newSubCategoryName.trim()) {
      return setErrorMessage("Tên danh mục không được để trống");
    }

    if (!currentCategory.trim()) {
      return setCategoryErrorMessage("Tên danh mục không được để trống");
    }

    addSubCategory({
      categoryId: currentCategory,
      newSubCategoryName: newSubCategoryName,
    });
  }

  useEffect(() => {
    if (mutationError) {
      setErrorMessage((mutationError as any).data?.message);
    }
    if (data) {
      setNewSubCategoryName("");
      handleCloseDialog();
    }
  }, [mutationError, data, handleCloseDialog]);

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
              <Select
                labelPlacement={"inside"}
                items={(categories as any) || []}
                label="Danh mục cha"
                className="w-full"
                selectedKeys={[currentCategory]} // Controlled component
                errorMessage={categoryErrorMessage}
                isInvalid={categoryErrorMessage === "" ? false : true}
                onSelectionChange={(keys) => {
                  setCurrentCategory(Array.from(keys)[0] as string);
                  setCategoryErrorMessage("");
                }} // Update currentCategory state
              >
                {(category) => (
                  <SelectItem key={(category as any)._id}>
                    {(category as any).categoryName}
                  </SelectItem>
                )}
              </Select>
              <Input
                value={newSubCategoryName}
                onChange={handleChangeSubCategoryName}
                label="Nhập tên danh mục mới"
                errorMessage={errorMessage}
                isInvalid={errorMessage === "" ? false : true}
              />
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
                onPress={handleAddCategory}
              >
                Lưu
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
