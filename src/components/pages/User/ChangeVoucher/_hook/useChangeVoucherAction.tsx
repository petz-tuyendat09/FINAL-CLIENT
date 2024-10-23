import {
  QueryParams,
  useGetVouchersQuery,
  useChangeVoucherMutation,
  ChangeVoucherParams,
} from "@/libs/features/services/voucher";
import { useEffect, useMemo, useState } from "react";
import { message } from "antd";
import { useSession } from "next-auth/react";

export interface useVoucherActionProps {
  initialPage: number;
}

export default function useChangeVoucherAction({
  initialPage,
}: useVoucherActionProps) {
  // State
  const [pages, setPages] = useState<number>(initialPage);
  const [queryParams, setQueryParams] = useState<QueryParams>({});
  const [totalPages, setTotalPages] = useState<number | undefined>(1);
  const [userPoint, setUserPoint] = useState<number | undefined>(0);
  const [decreasePoint, setDecreasePoint] = useState(0);

  const [] = message.useMessage();
  const { data: session, update: sessionUpdate } = useSession();

  const [selectedKeys, setSelectedKeys] = useState(
    new Set(["Sắp xếp theo điểm"]),
  );
  const [typeSelect, setTypeSelected] = useState(
    new Set(["Lọc theo kiểu giảm giá"]),
  );

  // Query
  const [
    changeVoucher,
    { data: changeVoucherResponse, error: changeVoucherError },
  ] = useChangeVoucherMutation();
  const { data: voucher } = useGetVouchersQuery({
    page: pages,
    ...queryParams,
  });

  // Use Effect
  useEffect(() => {
    setTotalPages(voucher?.totalPages);
    if (session) {
      setUserPoint(session?.user.userPoint);
    }
  }, [voucher, session]);

  useEffect(() => {
    if (changeVoucherResponse) {
      success();

      sessionUpdate({
        ...session,
        user: {
          ...session?.user,
          userPoint: session!.user.userPoint - decreasePoint,
        },
      });
      setUserPoint((prevPoint) => (prevPoint as any) - decreasePoint);
    }

    if (changeVoucherError) {
      error();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeVoucherError, changeVoucherResponse]);

  // Hàm
  function handleSetPage(page: number) {
    setPages(page);
  }

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  const selectedType = useMemo(
    () => Array.from(typeSelect).join(", "),
    [typeSelect],
  );

  useEffect(() => {
    if (selectedValue !== "Sắp xếp theo điểm") {
      setQueryParams((prev) => ({ ...prev, pointSort: selectedValue }));
    }

    if (selectedType !== "Lọc theo kiểu giảm giá") {
      setQueryParams((prev) => ({ ...prev, typeFilter: selectedType }));
    }
  }, [selectedValue, selectedType]);

  const success = () => {
    message.success({
      content: <span>Đổi voucher thành công</span>,
      duration: 5,
      className: "custom-message", // Optionally for further styling if needed
    });
  };

  const error = () => {
    message.error({
      content: <span>Không đủ điểm đổi voucher</span>,
      duration: 5,
      className: "custom-message", // Optionally for further styling if needed
    });
  };

  function clearQuery() {
    setQueryParams({});
    setSelectedKeys(new Set(["Sắp xếp theo điểm"]));
    setTypeSelected(new Set(["Lọc theo kiểu giảm giá"]));
  }

  function handleChangeVoucher({
    voucherPoint,
    voucherId,
    userId,
  }: ChangeVoucherParams) {
    const changeVoucherObject = {
      voucherPoint: voucherPoint,
      voucherId: voucherId,
      userId: userId,
    };
    changeVoucher(changeVoucherObject);
    setDecreasePoint(voucherPoint);
  }

  return {
    voucher,
    pages,
    totalPages,
    handleSetPage,
    setSelectedKeys,
    selectedValue,
    clearQuery,
    setTypeSelected,
    selectedType,
    handleChangeVoucher,
    userPoint,
    session,
  };
}
