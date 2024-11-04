import { useRouter } from "next/router";
import CartStepper from "@/components/pages/Cart/CartStepper";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const Index = () => {
  const router = useRouter();
  const { resultCode, orderId } = router.query;

  const isSuccess = resultCode === "0";
  const activeStep = 3;

  return (
    <div className="mt-[70px] min-h-screen px-[20px]">
      <CartStepper activeStep={activeStep} />
      <div className="mt-[20px] flex flex-col items-center justify-center">
        {isSuccess ? (
          <>
            <Icon icon="lets-icons:check-ring" color="green" width={100} />
            <h1 className="text-[22px] font-[700]">Thanh toán thành công</h1>
            <div className="mt-[20px] flex flex-col gap-[15px]">
              <p>
                Mã số đơn hàng của bạn là <b>{orderId}</b>
              </p>
              <p>
                Bạn có thể xem chi tiết trong{" "}
                <Link href="/order-history" className="text-blue-500">
                  đơn hàng của tôi.
                </Link>
              </p>
              <div className="flex flex-row items-center gap-[10px]">
                <button className="flex w-[180px] flex-row items-center justify-center rounded-[5px] bg-gray-100 py-[8px] text-gray-600 hover:shadow-custom">
                  <Icon icon="basil:caret-left-solid" width={20} />
                  <span>Quay về trang chủ</span>
                </button>
                <button className="w-[120px] rounded-[5px] bg-blue-500 py-[8px] text-white hover:shadow-custom">
                  In hóa đơn
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <Icon icon="basil:warning-circle-solid" color="red" width={100} />
            <h1 className="text-[22px] font-[700] text-red-600">
              Thanh toán thất bại
            </h1>
            <div className="mt-[20px] flex flex-col gap-[15px]">
              <p>Rất tiếc! Đã có lỗi xảy ra trong quá trình thanh toán.</p>
              <p>Vui lòng thử lại hoặc liên hệ với chúng tôi để được hỗ trợ.</p>
              <div className="flex flex-row items-center gap-[10px]">
                <button className="flex w-[180px] flex-row items-center justify-center rounded-[5px] bg-gray-100 py-[8px] text-gray-600 hover:shadow-custom">
                  <Icon icon="basil:caret-left-solid" width={20} />
                  <span>Quay về trang chủ</span>
                </button>
                <button className="w-[120px] rounded-[5px] bg-blue-500 py-[8px] text-white hover:shadow-custom">
                  Thử lại
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
