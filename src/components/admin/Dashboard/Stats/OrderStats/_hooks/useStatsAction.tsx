import { useState, useCallback, useEffect } from "react";
import { useGetOrderStatsQuery, useGetBookingStatsQuery } from "@/libs/features/services/orderStatsAPI";
import { formatDate, getToday, getThisMonth, getThisYear } from "@/utils/formatDateStats";

interface OrderReportData {
  totalOrder?: number;
  ordersSold?: number;
  ordersCancelled?: number;
}

interface BookingReportData {
  totalBooking?: number;
  bookingDone?: number;
  bookingCancelled?: number;
}



export const useOrderStats = () => {
  const [firstDayOfMonth, lastDayOfMonth] = getThisMonth();

  const [startDate, setStartDate] = useState<string>(firstDayOfMonth);
  const [endDate, setEndDate] = useState<string>(lastDayOfMonth);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [report, setReport] = useState<{ orderCash: number; ordersSold: number; ordersCancelled: number }>({
    orderCash: 0,
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


  const calculateReport = (statsData: OrderReportData) => {
    const { totalOrder = 0, ordersSold = 0, ordersCancelled = 0 } = statsData;
    setReport({
      orderCash: totalOrder,
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

export const useBookingStats = () => {
  const [firstDayOfMonth, lastDayOfMonth] = getThisMonth();

  const [startDate, setStartDate] = useState<string>(firstDayOfMonth);
  const [endDate, setEndDate] = useState<string>(lastDayOfMonth);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [report, setReport] = useState<{ bookingCash: number; bookingDone: number; bookingCancelled: number }>({
    bookingCash: 0,
    bookingDone: 0,
    bookingCancelled: 0,
  });

  const handleGenerateReport = useCallback(() => {
    setShouldFetch(true);
  }, []);

  // console.log(startDate)
  // console.log(endDate)

  const { data, error, isLoading } = useGetBookingStatsQuery(
    {
      startDate: formatDate(new Date(startDate)),
      endDate: formatDate(new Date(endDate)),
      year: startDate ? new Date(startDate).getFullYear() : undefined,
      month: startDate ? new Date(startDate).getMonth() + 1 : undefined,
      day: startDate === endDate ? new Date(startDate).getDate() : undefined,
    }

  )

  console.log(data)


  const calculateReport = (statsData: BookingReportData) => {
    const { totalBooking = 0, bookingDone = 0, bookingCancelled = 0 } = statsData;
    setReport({
      bookingCash: totalBooking,
      bookingDone,
      bookingCancelled,
    });
  };

  useEffect(() => {
    if (data && !isLoading && !error && shouldFetch) {
      calculateReport(data);
      setShouldFetch(false);
    }
  }, [data, isLoading, error, shouldFetch]);


  return {
    bookingData: data,
    bookingStartDate: startDate,
    bookingEndDate: endDate,
    bookingReport: report,
    generateBookingReport: handleGenerateReport,
    setBookingStartDate: setStartDate,
    setBookingEndDate: setEndDate,
    bookingLoading: isLoading,
    bookingError: error,
  };
};

