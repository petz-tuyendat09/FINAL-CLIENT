import { useGetBookingByUserIdQuery } from "@/libs/features/services/booking";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";

export default function useServicesListAction() {
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
      setQueryParams((prev) => ({ ...prev, bookingStatus: selectedValue }));
    }
    if (session) {
      setUserId(session?.user._id as any);
    }
  }, [selectedKeys, session]);

  console.log(queryParams);

  const { data: bookingList } = useGetBookingByUserIdQuery({
    userId: userId && userId,
    ...queryParams,
  });

  return {
    bookingList,
    handleDateChange,
    setSelectedKeys,
    selectedValue,
  };
}
