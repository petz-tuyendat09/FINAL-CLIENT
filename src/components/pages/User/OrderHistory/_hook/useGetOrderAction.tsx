"use client";
import { useGetOrdersByUserIdQuery } from "@/libs/features/services/order";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";

export default function useOrdersHistoryAction() {
  const { data: session, status } = useSession();
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Status"]));
  const [userId, setUserId] = useState();

  const [queryParams, setQueryParams] = useState<{
    year?: number;
    month?: number;
    day?: number;
  }>({});

  const handleDateChange = async (date: any) => {
    const year = date.year;
    const month = date.month - 1;
    const day = date.day;

    setQueryParams({ year, month: month + 1, day });
  };

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  useEffect(() => {
    if (selectedValue !== "Status") {
      setQueryParams((prev) => ({ ...prev, orderStatus: selectedValue }));
    }
    if (session) {
      setUserId(session?.user._id as any);
    }
  }, [selectedKeys, session]);

  const { data: orderList = [] } = useGetOrdersByUserIdQuery({
    userId: userId && userId,
    ...queryParams,
  });

  return {
    orderList,
    handleDateChange,
    setSelectedKeys,
    selectedValue,
  };
}
