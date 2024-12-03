import { useGetVouchersHeldQuery } from "@/libs/features/services/user";
import { Modal, Radio } from "antd";
import { skipToken } from "@reduxjs/toolkit/query";
import { useSession } from "next-auth/react";
import type { RadioChangeEvent } from "antd";
import Link from "next/link";
import voucherImg from "@@/public/images/voucher.svg";
import Image from "next/image";
import { useState } from "react";

interface VoucherProps {
  voucherId: string | null;
  setVoucherId: (id: string) => void;
  setShippingDiscount: (value: number) => void
  isModalOpen: boolean;
  handleCancel: () => void;
  setSalePercent: (id: number) => void;
  handleChangeVoucher: () => void;
}
const voucherType = ["ON_ORDER_SAVINGS", "FLAT_DISCOUNT", "SHIPPING_DISCOUNT"]
export default function Voucher({
  setSalePercent,
  handleChangeVoucher,
  voucherId,
  setVoucherId,
  isModalOpen,
  handleCancel,
  setShippingDiscount
}: VoucherProps) {
  const session = useSession();
  const userId = session?.data?.user?._id;
  const [shippingVoucherId, setShippingVoucherId] = useState('');
  const { data, error, isLoading } = useGetVouchersHeldQuery(
    userId
      ? {
          userId,
          page: 1,
        }
      : skipToken,
  );

  const onChange = (e: RadioChangeEvent, salePercent: number) => {
    setVoucherId(e.target.value);
    setSalePercent(salePercent);
  };

  const onShippingDiscountChange = (e: RadioChangeEvent, salePercent: number) => {
    setShippingVoucherId(e.target.value);
    setShippingDiscount(salePercent);
  };

  if (isLoading) {
    return <div>Loading vouchers...</div>;
  }

  return (
    <>
      <Modal
        title="Chọn Voucher"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <hr className="mt-[15px]" />
        <div>
          {data?.vouchers?.length === 0 && (
            <div className="mt-[10px] flex flex-row items-center gap-[10px]">
              <span className="text-[17px] text-gray-500">
                Rất tiếc, bạn không có voucher nào !
              </span>
              <Link href="/user/change-voucher">
                <i className="text-[16px] font-[600] text-primary underline">
                  Đổi voucher ngay.
                </i>
              </Link>
            </div>
          )}

          <div className="mt-[20px] flex flex-col gap-[20px]">
            {data?.vouchers?.length !== 0 && (
              <div className="flex justify-end">
                <button
                  className="text-red-300 hover:text-red-600"
                  onClick={() => {
                    setVoucherId("");
                    setSalePercent(0);
                    setShippingDiscount(0);
                    setShippingVoucherId("");
                  }}
                >
                  Xóa voucher
                </button>
              </div>
            )}
            {data?.vouchers?.filter(item => item.voucherId?.voucherType === voucherType[0] || item.voucherId?.voucherType === voucherType[1])?.map((item, i) => (
              <div key={item.voucherId?._id || i} className="flex flex-row gap-2.5 bg-primary">
                <div className="relative">
                  <Image 
                    src={voucherImg} 
                    width={220} 
                    height={100} 
                    alt={`Voucher ${item.voucherId?.voucherDescription || 'image'}`} 
                  />
                  <div className="absolute left-[34%] top-[22%] flex flex-row items-center gap-2.5">
                    <h1 className="text-2xl font-bold text-[#633939]">
                      {item.voucherId?.salePercent || 0}%
                    </h1>
                  </div>
                </div>
                <div className="relative w-full py-2.5">
                  <div className="flex w-[90%] flex-col justify-center text-center">
                    <h1 className="text-white">
                      {item.voucherId?.voucherDescription || 'No description available'}
                    </h1>
                    <p className="text-white">
                      Điểm:{" "}
                      <span className="text-[#FFFADD]">
                        {item.voucherId?.voucherPoint || 0}
                      </span>
                    </p>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center bg-gray-100 pl-1.5">
                    <Radio
                      value={item.voucherId?._id}
                      checked={voucherId === item.voucherId?._id}
                      onChange={(e) => onChange(e, item.voucherId?.salePercent)}
                      className="custom-radio"
                    />
                  </div>
                </div>
              </div>
            ))}
            {data?.vouchers?.filter(item => item.voucherId?.voucherType === voucherType[2])?.map((item, i) => (
              <div key={item.voucherId?._id || i} className="flex flex-row gap-2.5 bg-[#1fccb1]">
                <div className="relative">
                  <Image 
                    src={voucherImg} 
                    width={220} 
                    height={100} 
                    alt={`Voucher ${item.voucherId?.voucherDescription || 'image'}`} 
                  />
                  <div className="absolute left-[34%] top-[22%] flex flex-row items-center gap-2.5">
                    <h1 className="text-2xl font-bold text-[#633939]">
                      {item.voucherId?.salePercent || 0}%
                    </h1>
                  </div>
                </div>
                <div className="relative w-full py-2.5">
                  <div className="flex w-[90%] flex-col justify-center text-center">
                    <h1 className="text-white">
                      {item.voucherId?.voucherDescription || 'No description available'}
                    </h1>
                    <p className="text-white">
                      Điểm:{" "}
                      <span className="text-[#FFFADD]">
                        {item.voucherId?.voucherPoint || 0}
                      </span>
                    </p>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center bg-gray-100 pl-1.5">
                    <Radio
                      value={item.voucherId?._id}
                      checked={shippingVoucherId === item.voucherId?._id}
                      onChange={(e) => onShippingDiscountChange(e, item.voucherId?.shippingDiscountAmount || 0)}
                      className="custom-radio"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[30px] flex justify-end">
            <button
              className="h-[44px] w-[120px] rounded-[5px] bg-primary font-[600] text-white"
              onClick={handleChangeVoucher}
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
