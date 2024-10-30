import { useGetVouchersHeldQuery } from "@/libs/features/services/user";
import { Modal, Radio } from "antd";
import { useSession } from "next-auth/react";
import type { RadioChangeEvent } from 'antd';
import Link from "next/link";
import voucherImg from '@@/public/images/voucher.svg';
import Image from "next/image";
interface VoucherProps {
    voucherId: string | null;
    setVoucherId: (id: string) => void;
    isModalOpen: boolean;
    handleCancel: () => void;
    setSalePercent: (id: number) => void;
    handleChangeVoucher: () => void;
}
export default function Voucher ({ setSalePercent, handleChangeVoucher, voucherId, setVoucherId, isModalOpen, handleCancel }: VoucherProps) {
    const session = useSession();
    const userId = session?.data?.user?._id;
    const { data, error, isLoading } = useGetVouchersHeldQuery({ userId, page: 1 });
    const onChange = (e: RadioChangeEvent, salePercent: number) => {
        setVoucherId(e.target.value);
        setSalePercent(salePercent);
    }
    if (isLoading) {
        return <div>Loading vouchers...</div>;
    }
    return ( 
        <>
            <Modal title="Chọn Voucher" open={isModalOpen} footer={null} onCancel={handleCancel}>
                <hr className="mt-[15px]"/>
                <div>
                    { data?.vouchers?.length === 0 && (
                        <div className="flex flex-row items-center gap-[10px] mt-[10px]">
                            <span className="text-[17px] text-gray-500">Rất tiếc, bạn không có voucher nào !</span>
                            <Link href="/user/change-voucher">
                                <i className="text-primary text-[16px] font-[600] underline">Đổi voucher ngay.</i>
                            </Link>
                        </div>
                    )}

                    <div className="flex flex-col gap-[20px] mt-[20px]">
                        <div className="flex justify-end ">
                            <button className="text-red-300 hover:text-red-600" onClick={() => { setVoucherId(''); setSalePercent(0); }}>Xóa voucher</button>
                        </div>
                        {
                            data?.vouchers.map((item, i) => {
                                return (
                                    <div key={i} className="bg-primary flex flex-row gap-[10px]">
                                        <div className="relative">
                                            <Image src={voucherImg} width={220} height={100} alt="" />
                                            <div className="absolute top-[20%] left-[34%] flex flex-row items-center gap-[10px]">
                                                <h1 className="text-[#633939] text-[24px] font-[700]">{item.voucherId.salePercent}%</h1>
                                            </div>
                                        </div>
                                        <div className="py-[10px] w-full relative">
                                            <div className=" w-[90%] flex flex-col justify-center text-center">
                                                <h1 className="text-white">{item.voucherId.voucherDescription}</h1>
                                                <p className="text-white">Điểm: <span className="text-[#FFFADD]">{item.voucherId.voucherPoint}</span></p>
                                            </div>
                                            <div className="absolute right-0 bottom-0 top-0 bg-gray-100 pl-[5px] flex justify-center"> 
                                                <Radio 
                                                    value={item.voucherId._id} 
                                                    checked={voucherId === item.voucherId._id} 
                                                    onChange={(e) => onChange(e, item.voucherId.salePercent)}
                                                    className="custom-radio"
                                                >
                                                </Radio>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="flex justify-end mt-[30px]">
                        <button className="bg-primary text-white w-[120px] rounded-[5px] h-[44px] font-[600]" onClick={handleChangeVoucher}>OK</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

