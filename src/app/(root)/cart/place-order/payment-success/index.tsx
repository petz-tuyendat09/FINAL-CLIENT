import CartStepper from "@/components/pages/Cart/CartStepper";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const Index = () => {
    const activeStep = 3;
    return (
        <div className="mt-[70px] px-[20px] min-h-screen">
            <CartStepper activeStep={activeStep} />
            <div className="flex flex-col justify-center items-center mt-[20px]">
                <Icon icon="lets-icons:check-ring" color="green" width={100} />
                <h1 className="text-[22px] font-[700]">Thanh toán thành công</h1>
                <div className="flex flex-col gap-[15px] mt-[20px]">
                    <p>Mã số đơn hàng của bạn là <b></b></p>
                    <p>Bạn có thể xem chi tiết trong <Link href="/order-history" className="text-blue-500">đơn hàng của tôi.</Link></p>
                    <div className="flex flex-row items-center gap-[10px]">
                        <button className="hover:shadow-custom flex flex-row items-center bg-gray-100 text-gray-600 justify-center w-[180px] py-[8px] rounded-[5px]">
                            <Icon icon="basil:caret-left-solid" width={20} />
                            <span>Quay về trang chủ</span>
                        </button>
                        <button className="bg-blue-500 text-white w-[120px] py-[8px] rounded-[5px] hover:shadow-custom">In hóa đơn</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
