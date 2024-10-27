import { useGetBookingQuery } from "@/libs/features/services/booking";
import formatDate from "@/utils/formatDate";
import formatMoney from "@/utils/formatMoney";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Booking, BookingStatus } from "@/types/Booking";

interface ModalBookingDetailProps {
  isDialogOpen: boolean;
  handleCloseDialog: () => void;
  bookingId: string;
}

export default function ModalBookingDetail({
  isDialogOpen,
  handleCloseDialog,

  bookingId,
}: ModalBookingDetailProps) {
  const { data } = useGetBookingQuery({ bookingId: bookingId });
  const [bookingDetail, setBookingDetail] = useState<Booking>();
  useEffect(() => {
    if (data) {
      setBookingDetail(data?.bookings[0]);
    }
  }, [data]);

  return (
    <Modal
      backdrop="blur"
      onClose={handleCloseDialog}
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
              Xác nhận thông tin
            </ModalHeader>
            <ModalBody>
              <p>
                <span className="font-bold">Tên khách hàng:</span>{" "}
                {bookingDetail?.customerName}
              </p>
              <p>
                <span className="font-bold">Dịch vụ đã chọn:</span>{" "}
                {bookingDetail?.service.map(
                  (service) => (service as any).serviceName + " - ",
                )}
              </p>
              <p>
                <span className="font-bold">Giờ đặt:</span>{" "}
                {bookingDetail?.bookingHours}
              </p>

              <p>
                <span className="font-bold">Ngày đặt:</span>{" "}
                {formatDate(bookingDetail?.bookingDate as any)}
              </p>
              <p>
                <span className="font-bold">Tổng tiền thiệt hại:</span>{" "}
                {formatMoney(bookingDetail?.totalPrice)}
              </p>
              <p>
                <span className="font-bold">Trạng thái:</span>{" "}
                {
                  BookingStatus[
                    bookingDetail?.bookingStatus as keyof typeof BookingStatus
                  ]
                }
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                className="rounded-full bg-black text-white"
                onPress={handleCloseDialog}
              >
                Hủy
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
