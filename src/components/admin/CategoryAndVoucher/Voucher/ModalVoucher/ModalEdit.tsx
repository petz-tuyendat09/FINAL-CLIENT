import {
  useGetVouchersQuery,
  useEditVoucherMutation,
} from "@/libs/features/services/voucher";
import { VoucherType } from "@/types/Voucher";
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

interface ModalEditProps {
  isDialogOpen: boolean;
  handleCloseDialog: () => void;
  voucherId: string;
}

const DISCOUNT_TYPE = ["ON_ORDER_SAVINGS", "PER_ITEM_SAVINGS"];

export default function ModalEdit({
  isDialogOpen,
  handleCloseDialog,
  voucherId,
}: ModalEditProps) {
  const { data: voucher } = useGetVouchersQuery({ voucherId: voucherId });

  const [salePercent, setSalePercent] = useState<number | string>("");
  const [voucherPoint, setVoucherPoint] = useState<number | string>("");
  const [voucherType, setVoucherType] = useState<string>("");
  const [voucherDescription, setVoucherDescription] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [pointErrorMessage, setPointErrorMessage] = useState<string>("");
  const [typeErrorMessage, setTypeErrorMessage] = useState<string>("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] =
    useState<string>("");
  const [duplicatedMessage, setDuplicatedMessage] = useState<string>("");
  const [editVoucher, { data, error: mutationError }] =
    useEditVoucherMutation();

  const validateInput = (value: string) => {
    // Regular expression to disallow special characters including periods (.) and commas (,)
    const regex = /^[0-9]*$/;
    return regex.test(value);
  };

  function handleChangeVoucherDiscount(e: any) {
    const value = e.target.value;
    if (!validateInput(value)) {
      setErrorMessage(
        "Giá trị giảm giá không hợp lệ (không chứa ký tự đặc biệt hoặc dấu phẩy, chấm)",
      );
    } else {
      setErrorMessage("");
      setSalePercent(value);
    }
  }

  function handleChangeVoucherPoint(e: any) {
    const value = e.target.value;
    if (!validateInput(value)) {
      setPointErrorMessage(
        "Điểm voucher không hợp lệ (không chứa ký tự đặc biệt hoặc dấu phẩy, chấm)",
      );
    } else {
      setPointErrorMessage("");
      setVoucherPoint(value);
    }
  }

  function handleChangeVoucherDescription(e: any) {
    if (descriptionErrorMessage) setDescriptionErrorMessage("");
    setVoucherDescription(e.target.value);
  }

  useEffect(() => {
    if (Number(salePercent) > 100 || Number(salePercent) < 0) {
      setErrorMessage("Phần trăm giảm giá không hợp lệ");
    }

    if (Number(voucherPoint) < 0) {
      setPointErrorMessage("Điểm voucher không hợp lệ");
    }
  }, [salePercent, voucherPoint]);

  function handleInsertVoucher() {
    if (!salePercent) {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin hợp lệ");
      return;
    }
    if (!voucherType) {
      setTypeErrorMessage("Vui lòng nhập đầy đủ thông tin hợp lệ");
    }
    if (!voucherDescription) {
      setDescriptionErrorMessage("Vui lòng nhập đầy đủ thông tin hợp lệ");
    }
    if (!voucherPoint) {
      setPointErrorMessage("Vui lòng nhập đầy đủ thông tin hợp lệ");
    }
    editVoucher({
      editVoucherId: voucherId,
      newVoucherType: voucherType,
      newSalePercent: salePercent as any,
      newVoucherPoint: voucherPoint as any,
      newVoucherDescription: voucherDescription,
    });
  }

  useEffect(() => {
    if (mutationError) {
      setDuplicatedMessage((mutationError as any).data?.message);
    }
    if (data) {
      handleCloseDialog();
    }
  }, [mutationError, data, handleCloseDialog]);

  useEffect(() => {
    setVoucherPoint((voucher as any)?.vouchers[0].voucherPoint);
    setSalePercent((voucher as any)?.vouchers[0].salePercent);
    setVoucherType((voucher as any)?.vouchers[0].voucherType);
    setVoucherDescription((voucher as any)?.vouchers[0].voucherDescription);
  }, [voucher]);

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
              <p className="text-base text-red-500">{duplicatedMessage}</p>
              <Select
                labelPlacement={"inside"}
                label="Loại giảm giá"
                className="w-full"
                selectedKeys={[voucherType]} // Controlled component
                errorMessage={typeErrorMessage}
                isInvalid={typeErrorMessage === "" ? false : true}
                onSelectionChange={(key) => {
                  setVoucherType(key as string);
                  setTypeErrorMessage("");
                }}
              >
                {DISCOUNT_TYPE.map((type) => (
                  <SelectItem key={type} value={type}>
                    {VoucherType[type as keyof typeof VoucherType]}
                  </SelectItem>
                ))}
              </Select>
              <Input
                type="number"
                label="Nhập phần trăm giảm giá"
                onChange={handleChangeVoucherDiscount}
                value={salePercent as any}
                max={100}
                min={0}
                errorMessage={errorMessage}
                isInvalid={errorMessage === "" ? false : true}
              />
              <Input
                type="number"
                label="Nhập điểm của voucher"
                onChange={handleChangeVoucherPoint}
                value={voucherPoint as any}
                max={100}
                min={0}
                errorMessage={pointErrorMessage}
                isInvalid={pointErrorMessage === "" ? false : true}
              />
              <Input
                label="Mô tả ngắn của voucher (Giảm xx phần trăm)"
                value={voucherDescription}
                onChange={handleChangeVoucherDescription}
                errorMessage={descriptionErrorMessage}
                isInvalid={descriptionErrorMessage === "" ? false : true}
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
                onPress={handleInsertVoucher}
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
