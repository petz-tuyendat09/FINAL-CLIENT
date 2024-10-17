import formatMoney from "@/utils/formatMoney";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface ModalAddProps {
  isDialogOpen: boolean;
  formik: any;
}

export default function BookingModal({ isDialogOpen, formik }: ModalAddProps) {
  const router = useRouter();

  function handleGoBack() {
    // router.push("/");
    alert("hahaha");
  }

  const selectedServiceNames = Object.values(formik.values.selectedServices)
    .filter((service: any) => service && service.serviceName)
    .map((service: any) => service.serviceName)
    .join(" - ");

  const totalPrice = Object.values(formik.values.selectedServices).reduce(
    (total, service: any) => total + service.servicePrice,
    0,
  );

  const duration = Object.values(formik.values.selectedServices).reduce(
    (total, service: any) => total + service.serviceDuration,
    0,
  );

  return (
    <Modal
      backdrop="blur"
      isOpen={isDialogOpen}
      classNames={{
        backdrop:
          "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-center">
              Đặt lịch thành công
            </ModalHeader>
            <ModalBody>
              <p>
                <span className="font-bold">Dịch vụ đã chọn:</span>{" "}
                {selectedServiceNames || "Chưa chọn dịch vụ"}
              </p>
              <p>
                <span className="font-bold">Giờ:</span>{" "}
                {formik.values.bookingHours || "Chưa chọn giờ"}
              </p>

              <p>
                <span className="font-bold">Ngày:</span>{" "}
                {formik.values.bookingDate
                  ? formik.values.bookingDate.split("T")[0]
                  : "Chưa chọn ngày"}
              </p>
              <p>
                <span className="font-bold">Tổng tiền thiệt hại:</span>{" "}
                {formatMoney(totalPrice)}
              </p>
              <p>
                <span className="font-bold">Tổng thời gian:</span> {""}
                {duration as any} phút
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                className="rounded-full bg-black text-white"
                onPress={handleGoBack}
              >
                Quay về
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
