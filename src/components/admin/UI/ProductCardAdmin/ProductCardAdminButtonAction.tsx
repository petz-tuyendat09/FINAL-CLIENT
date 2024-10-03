import { useProductActionContext } from "@/components/admin/Shop/_store/AdminShopContext";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import Dialog from "@/components/ui/Dialog";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";

interface ProductCardAdminButtonActionProps {
  productId: string;
  productSlug: string;
}

export default function ProductCardAdminButtonAction({
  productId,
  productSlug,
}: ProductCardAdminButtonActionProps) {
  const { handleDeleteProduct } = useProductActionContext();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    handleDeleteProduct(productId);
    setDialogOpen(false);
  };

  return (
    <div className="absolute right-4 top-4 z-10 flex flex-col space-y-2 text-2xl transition delay-75 duration-300">
      <button
        className="rounded-full bg-black p-2 text-white"
        onClick={handleOpenDialog}
      >
        <Icon icon="mdi:trash" />
      </button>
      <button className="rounded-full bg-black p-2 text-white">
        <Link href={`shop/edit-product/${productSlug}`}>
          <Icon icon="flowbite:edit-solid" />
        </Link>
      </button>

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
              <ModalHeader className="text-center">Xóa sản phẩm</ModalHeader>
              <ModalBody>
                <p>Bạn có chắc muốn xóa sản phẩm.</p>
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
                  onPress={handleConfirmDelete}
                >
                  Xóa
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
