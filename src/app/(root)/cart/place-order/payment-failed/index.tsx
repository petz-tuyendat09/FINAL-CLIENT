'use client'
import { useEffect, useState } from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from 'next/navigation';

export const Index = () => {
    const router = useRouter();
    const [orderId, setOrderId] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const currentUrl = new URL(window.location.href);
            setOrderId(currentUrl.searchParams.get('orderId') as string);
            setMessage(currentUrl.searchParams.get('message') || "Kết nối đến hệ thống tạm thời gián đoạn.");
        }
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="bg-red-500 rounded-full w-[100px] h-[100px] flex items-center justify-center">
                <Icon icon="weui:close-outlined" color="white" width={60} />
            </div>
            <h1 className="text-[30px] font-bold mt-4">Thanh toán thất bại.</h1>
            <h2 className="font-semibold text-[18px]">Đơn hàng #{orderId} chưa được thanh toán</h2>
            <p className="text-[16px] mt-2"><b>Nguyên nhân:</b> {message}</p>
            <button 
                className="bg-[#5E5DF0] hover:shadow-custom px-[18px] py-[8px] font-semibold text-[14px] rounded-[20px] text-white mt-4"
                onClick={() => router.push('/')} 
            >
                Quay về trang chủ
            </button>
        </div>
    );
};
