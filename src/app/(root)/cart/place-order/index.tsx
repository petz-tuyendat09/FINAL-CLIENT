'use client'
import CartStepper from "@/components/pages/Cart/CartStepper";
import useSearchMap from "@/components/pages/User/Account/_hooks/useSearchMap";
import { MapSearchType } from "@/types/Map";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./index.css";
import { Radio, RadioChangeEvent } from "antd";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/store";
import Image from "next/image";
import Voucher from "./voucher";

interface CartItem {
    productId: string;
    productName: string;
    productOption: string;
    productPrice: number;
    productQuantity: number;
    salePercent: number;
    productImage: string;
    productSlug: string;
}

export const Index = () => {
    const session = useSession();
    const [paymentMethod, setPaymentMethod] = useState('BANKING');
    const [isDisplay, setIsDisplay] = useState(false);
    const [total, setTotal] = useState(0);
    const [voucher, setVoucher] = useState(0);
    const [itemsToDisplay, setItemsToDisplay] = useState<CartItem[]>([]);
    const activeStep = 1;
    const [addresses, setAddresses] = useState<MapSearchType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const { handleAutoComplete } = useSearchMap();
    const handleKeyUp = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.currentTarget.value !== "") {
        const response = await handleAutoComplete(e.currentTarget.value);
        setAddresses(response);
        }
    };

    const onChange = (e: RadioChangeEvent) => {
        console.log('payment method', e.target.value);
        setPaymentMethod(e.target.value);
    };

    const formatCurrency = (amount: any) => {
        return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ`;
    };

    const unauthenticatedCarts = useSelector((state: RootState) => state.cart?.items || []);

    useEffect(() => {
        const authStatus = session.status;
        const cartItems = session.data?.user?.userCart?.cartItems || [];
        const data = (authStatus === 'authenticated' ? cartItems : unauthenticatedCarts) as CartItem[];

        setItemsToDisplay(data);

        const initialTotal = data.reduce((acc, item) => acc + item.productPrice * item.productQuantity, 0);
        if (voucher === 0) {
            setTotal(initialTotal);
        }
    }, [voucher, session.status, session.data, unauthenticatedCarts]);

    return (
        <>
            <div className="mt-[100px] px-[30px] pb-[50px] flex flex-row gap-[20px]">
                <div className="w-[62%]">
                    <CartStepper activeStep={activeStep} />
                    <div className="flex flex-row gap-[30px] mt-[30px]">
                        <div className="w-[60%]">
                            <h1 className="text-[24px] font-[600] mb-[20px]">Địa chỉ giao hàng</h1>
                            <div className="flex flex-row gap-[10px]">
                                <Link href="/auth" className="bg-black text-white px-[40px] h-[44px] border border-black text-[15px] font-[500] hover:bg-white hover:text-black transition duration-200 ease-in-out rounded-[10px] flex justify-center items-center">ĐĂNG NHẬP</Link>
                                <Link href="/auth" className="hover:bg-black hover:text-white border border-black px-[40px] h-[44px] rounded-[10px] text-[15px] font-[500] transition duration-200 ease-in-out flex justify-center items-center">ĐĂNG KÝ</Link>
                            </div>
                            <p className="text-[13px] mt-[10px]">Đăng nhập/ Đăng ký tài khoản để được tích điểm và nhận thêm nhiều ưu đãi từ PETZ.</p>
                            <div className="mt-[30px]">
                                <div className="flex flex-row gap-[10px] items-center"> 
                                    <button className="bg-black rounded-[50%] p-[2px]"><Icon icon="ic:round-check" color="white" width={13} /></button>
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
                                <div className="w-[100%] mt-[20px]">
                                    <Autocomplete
                                        defaultItems={addresses}
                                        label="Địa chỉ"
                                        className="w-full custom-autocomplete"
                                        onKeyUp={(e) => handleKeyUp(e)}
                                        onSelectionChange={(value) => {
                                            console.log(value);
                                    }}
                                    >
                                        {(suggestion) => (
                                            <AutocompleteItem key={suggestion.label}>
                                            {suggestion.label}
                                            </AutocompleteItem>
                                        )}
                                    </Autocomplete>
                                </div>
                            </div>
                        </div>
                        <div className="w-[40%]">
                            <h1 className="text-[24px] font-[600]">Phương thức giao hàng</h1>
                            <div className="mt-[20px] border border-gray-200 rounded-tl-[30px] rounded-br-[30px] flex flex-row items-center gap-[15px] px-[25px] pt-[25px] pb-[30px]">
                                <button className="bg-black rounded-[50%] p-[2px]"><Icon icon="ic:round-check" color="white" width={13} /></button>
                                <p className="font-[500]">Chuyển phát nhanh</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mt-[40px]">
                            <h1 className="text-[24px] font-[600]">Phương thức thanh toán</h1>
                            <div className="border border-gray-200 rounded-tl-[30px] rounded-br-[30px] px-[20px] pt-[25px] pb-[30px] mt-[20px]">
                                <span className="text-[14px] text-gray-500">Mọi giao dịch đều được bảo mật và mã hóa. Thông tin thẻ tín dụng sẽ không bao giờ được lưu lại.</span>
                                <div className="mt-[20px]">
                                    <div>
                                        <Radio.Group onChange={onChange} value={paymentMethod} className="flex flex-col gap-[15px]">
                                            <Radio value="BANKING" className="custom-radio">Thanh toán bằng Momo</Radio>
                                            <Radio value="COD" className="custom-radio">Thanh toán khi giao hàng</Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[30px]">
                            <button onClick={() => setIsDisplay(!isDisplay)} className="hover:bg-white hover:text-black transition duration-200 ease-in-out border border-black bg-black text-white px-[45px] py-[10px] text-[15px] rounded-[25px] tracking-[0.8px] flex justify-center items-center">HIỂN THỊ SẢN PHẨM</button>
                        </div>

                        <div className={`${isDisplay ? 'block' : 'hidden'} mt-[30px]`}>
                            <h1 className="text-[20px] font-[500]">Giỏ hàng của bạn</h1>
                            <table className="cart-table">
                                <thead>
                                    <tr>
                                        <th>TÊN SẢN PHẨM</th>
                                        <th>GIÁ</th>
                                        <th>SỐ LƯỢNG</th>
                                        <th>TỔNG TIỀN</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itemsToDisplay.map((item: any, i: number) => {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <div className="flex flex-row items-center gap-[10px]">
                                                        <Image src={item.productImage} width={60} height={60} alt="" />
                                                        <div>
                                                            <h1 className="text-[17px]">{item.productName}</h1>
                                                            <p className="text-[15px]">{item.productOption}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-[17px]">
                                                    {formatCurrency(item.productPrice)}
                                                </td>
                                                <td>
                                                    <span className="text-[17px] rounded-tl-[15px] rounded-br-[15px] border border-gray-200 px-[40px] py-[10px] bg-gray-100">{item.productQuantity}</span>
                                                </td>
                                                <td className="font-[500] text-[18px]">{formatCurrency(item.productPrice * item.productQuantity)}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-[38%] bg-gray-50 h-full">
                    <div>
                        <div className="p-[22px]">
                            <h1 className="text-[24px]">Tóm tắt đơn hàng</h1>
                            <div className="flex flex-col gap-[12px] mt-[10px]">
                                <div className="flex flex-row justify-between">
                                    <span>Tổng tiền hàng</span>
                                    <span>
                                        {formatCurrency(itemsToDisplay.reduce(
                                            (acc, item) =>
                                                acc + item.productPrice * item.productQuantity,
                                            0,
                                        ))}
                                    </span>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <span>Giảm giá voucher:</span>
                                    <span>{formatCurrency(voucher)}</span>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <span>Phí vận chuyển:</span>
                                    <span>38,000đ</span>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <span>Tiền thanh toán:</span>
                                    <span className="font-[500] text-[17px]">{formatCurrency(total)}</span>
                                </div>
                            </div>
                        </div>
                        <button className="hover:bg-white hover:text-black transition duration-200 ease-in-out border border-black bg-black text-white rounded-tl-[15px] rounded-br-[15px] w-full py-[15px] text-[15px] font-[500] mt-[20px]">TIẾP TỤC THANH TOÁN</button>
                    </div>
                    <div className="flex flex-row justify-between px-[20px] bg-yellow-50 mt-[20px] py-[10px] rounded-[5px]">
                        <div className="flex flex-row gap-[7px] items-center">
                            <Icon icon="mdi:voucher-outline" width={20} color="#AD3E39"/>
                            <span>Voucher</span>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="text-primary font-[500]">Chọn</button>
                    </div>
                </div>
            </div>
            <Voucher isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} />
        </>
    );
}