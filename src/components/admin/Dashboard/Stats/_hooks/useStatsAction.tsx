"use client";

import { useState, useCallback, useEffect } from "react";
import { useGetOrderStatsQuery } from "@/libs/features/services/orderStatsAPI";
import { getToday, getThisMonth, getThisYear } from "@/utils/formatDateStats";

export const useStatsAction = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  const [report, setReport] = useState({
    cash: 0,
    ordersSold: 0,
    ordersCancelled: 0,
  });

  const handleGenerateReport = useCallback(() => {
    setShouldFetch(true);
  }, []);

  const { data, error, isLoading } = useGetOrderStatsQuery({
    startDate,
    endDate,
    year: startDate
      ? new Date(startDate).getFullYear()
      : new Date().getFullYear(),
    month: startDate
      ? new Date(startDate).getMonth() + 1
      : new Date().getMonth() + 1,
    day: startDate ? new Date(startDate).getDate() : new Date().getDate(),
  });

  console.log(data);

  const calculateReport = (statsData: {
    monthlyRevenue: number[];
    ordersSold: number[];
    ordersCancelled: number[];
  }) => {
    let cash = 0;
    let ordersSold = 0;
    let ordersCancelled = 0;

    if (statsData?.monthlyRevenue) {
      statsData.monthlyRevenue.forEach((revenue, index) => {
        if (revenue > 0) {
          ordersSold += statsData.ordersSold[index];
          cash += revenue;
        }
      });
    }

    if (statsData?.ordersCancelled) {
      statsData.ordersCancelled.forEach((cancelledOrders, index) => {
        ordersCancelled += cancelledOrders;
      });
    }

    setReport({
      cash,
      ordersSold,
      ordersCancelled,
    });
  };

  useEffect(() => {
    if (data && !isLoading && !error) {
      calculateReport(data); // Đảm bảo chỉ tính toán khi dữ liệu có sẵn
    }
  }, [data, isLoading, error]); // Chạy khi data, isLoading, error thay đổi

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;

    if (option === "today") {
      const today = getToday();
      setStartDate(today);
      setEndDate(today);
    } else if (option === "thisMonth") {
      const [firstDay, lastDay] = getThisMonth();
      setStartDate(firstDay);
      setEndDate(lastDay);
    } else if (option === "thisYear") {
      const [firstDay, lastDay] = getThisYear();
      setStartDate(firstDay);
      setEndDate(lastDay);
    }
  };

  return {
    startDate,
    endDate,
    report,
    handleOptionChange,
    handleGenerateReport,
    setStartDate,
    setEndDate,
    isLoading,
    error,
  };
};
