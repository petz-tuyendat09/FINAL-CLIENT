import { useState, useCallback, useEffect } from "react";
import { useGetOrderStatsQuery } from "@/libs/features/services/orderStatsAPI";
import { formatDate, getToday, getThisMonth, getThisYear } from "@/utils/formatDateStats";

interface ReportData {
  totalRevenue?: number;
  ordersSold?: number;
  ordersCancelled?: number;
}

export const useStatsAction = () => {
  const [firstDayOfMonth, lastDayOfMonth] = getThisMonth();

  const [startDate, setStartDate] = useState<string>(firstDayOfMonth);
  const [endDate, setEndDate] = useState<string>(lastDayOfMonth);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [report, setReport] = useState<{ cash: number; ordersSold: number; ordersCancelled: number }>({
    cash: 0,
    ordersSold: 0,
    ordersCancelled: 0,
  });

  const handleGenerateReport = useCallback(() => {
    setShouldFetch(true);
  }, []);

  // console.log(startDate)
  // console.log(endDate)

  const { data, error, isLoading } = useGetOrderStatsQuery(
    {
      startDate: formatDate(new Date(startDate)),
      endDate: formatDate(new Date(endDate)),
      year: startDate ? new Date(startDate).getFullYear() : undefined,
      month: startDate ? new Date(startDate).getMonth() + 1 : undefined,
      day: startDate === endDate ? new Date(startDate).getDate() : undefined,
    }

  )

  console.log(data)


  const calculateReport = (statsData: ReportData) => {
    const { totalRevenue = 0, ordersSold = 0, ordersCancelled = 0 } = statsData;
    setReport({
      cash: totalRevenue,
      ordersSold,
      ordersCancelled,
    });
  };

  useEffect(() => {
    if (data && !isLoading && !error && shouldFetch) {
      calculateReport(data);
      setShouldFetch(false);
    }
  }, [data, isLoading, error, shouldFetch]);


  return {
    data,
    startDate,
    endDate,
    report,
    handleGenerateReport,
    setStartDate,
    setEndDate,
    isLoading,
    error,
  };
};
