import CartStepper from "@/components/pages/Cart/CartStepper";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const Index = () => {
    const activeStep = 1;
    return (
        <div className="h-screen mt-[100px] px-[30px]">
            <div className="w-[62%]">
                <CartStepper activeStep={activeStep} />
                <div className="flex flex-row gap-[30px] mt-[30px]">
                    <div className="w-[60%]">
                        <h1 className="text-[24px] font-[600] mb-[20px]">Địa chỉ giao hàng</h1>
                        <div className="flex flex-row gap-[10px]">
                            <Link href="/auth" className="bg-black text-white px-[40px] py-[10px] rounded-tl-[10px] rounded-br-[10px] text-[15px] font-[500]">ĐĂNG NHẬP</Link>
                            <Link href="/auth" className="border border-black px-[40px] py-[10px] rounded-tl-[10px] rounded-br-[10px] text-[15px] font-[500]">ĐĂNG KÝ</Link>
                        </div>
                        <p className="text-[13px] mt-[10px]">Đăng nhập/ Đăng ký tài khoản để được tích điểm và nhận thêm nhiều ưu đãi từ PETZ.</p>
                        <div className="mt-[30px]">
                            <div className="flex flex-row gap-[10px]"> 
                                <button className="bg-black rounded-[50%] p-[5px]"><Icon icon="ic:round-check" color="white" width={15} /></button>
                                <p className="font-[600]">Thông tin</p>
                            </div>
                            <div className="flex flex-row justify-between gap-[25px] mt-[10px]">
                                <div className="w-[50%]">
                                    <input placeholder="Họ tên" className="placeholder:text-black placeholder:text-[15px] w-full focus:shadow-input transition duration-150 ease-in-out border border-gray-200 px-[10px] py-[10px] rounded-[5px] outline-none" />
                                </div>
                                <div className="w-[50%]">
                                    <input placeholder="Số điện thoại" className="placeholder:text-black placeholder:text-[15px] w-full focus:shadow-input transition duration-150 ease-in-out border border-gray-200 px-[10px] py-[10px] rounded-[5px] outline-none"/>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between gap-[25px] mt-[20px]">
                                <div className="w-[50%]">
                                    <input placeholder="Tỉnh/Thành phố" className="placeholder:text-black placeholder:text-[15px] w-full focus:shadow-input transition duration-150 ease-in-out border border-gray-200 px-[10px] py-[10px] rounded-[5px] outline-none" />
                                </div>
                                <div className="w-[50%]">
                                    <input placeholder="Quận/Huyện" className="placeholder:text-black placeholder:text-[15px] w-full focus:shadow-input transition duration-150 ease-in-out border border-gray-200 px-[10px] py-[10px] rounded-[5px] outline-none" />
                                </div>
                            </div>
                            <div className="w-[100%] mt-[20px]">
                                <input placeholder="Phường xã" className="placeholder:text-black placeholder:text-[15px] w-full focus:shadow-input transition duration-150 ease-in-out border border-gray-200 px-[10px] py-[10px] rounded-[5px] outline-none" />
                            </div>
                            <div className="w-[100%] mt-[20px]">
                                <input placeholder="Địa chỉ" className="placeholder:text-black placeholder:text-[15px] w-full focus:shadow-input transition duration-150 ease-in-out border border-gray-200 px-[10px] py-[10px] rounded-[5px] outline-none" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[40%]">
                        <h1 className="text-[24px] font-[600]">Phương thức giao hàng</h1>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="w-[38%]">
            </div>
        </div>
    );
}