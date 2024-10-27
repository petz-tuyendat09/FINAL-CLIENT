import { useGetVouchersHeldQuery } from "@/libs/features/services/user";
import { Modal } from "antd";
import { useSession } from "next-auth/react";

export default function Voucher ({ isModalOpen, handleOk, handleCancel }: any) {
    const session = useSession();
    const userId = session?.data?.user?._id;
    console.log(userId);
    const { data: vouchers } = useGetVouchersHeldQuery({ userId: userId, page: 1 })
    console.log(vouchers);
    return (
        <>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}