"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart,
    LineElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
} from "chart.js";

Chart.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

export default function LineChart() {
    const [monthlyRevenue, setMonthlyRevenue] = useState(new Array(12).fill(0));
    const [maxValue, setMaxValue] = useState(0);

    useEffect(() => {
        async function fetchBookingStatistics() {
            try {
                const response = await fetch("http://localhost:8888/api/bookingStats?startDate=2024-01-01&endDate=2024-12-31&year=2024");

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();

                // Đảm bảo dữ liệu monthlyRevenue là một mảng với 12 phần tử
                const revenueData = data.monthlyRevenue || new Array(12).fill(0);
                setMonthlyRevenue(revenueData);
                setMaxValue(Math.max(...revenueData));
            } catch (error) {
                console.error("Error fetching booking statistics:", error);
            }
        }

        fetchBookingStatistics();
    }, []);

    return (
        <div
            className="w-1/2 mt-10 p-8"
            style={{ background: "#37373e", borderRadius: "40px" }}
        >
            <div className="text-white text-3xl">Booking Report</div>
            <div className="text-white mb-4">Monthly Earnings</div>
            <Line
                className="mt-8"
                data={{
                    labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                    datasets: [
                        {
                            label: "Revenue (VND)",
                            data: monthlyRevenue,
                            backgroundColor: "rgba(173, 62, 57, 0.2)", // Màu nền vùng dưới đường
                            borderColor: "#AD3E39", // Màu của đường
                            fill: true,
                            tension: 0.4, // Độ cong của đường
                            pointBackgroundColor: monthlyRevenue.map((value) =>
                                value === maxValue ? "#AD3E39" : "grey"
                            ),
                            pointRadius: 6, // Bán kính điểm
                            pointHoverRadius: 8, // Bán kính khi hover
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top",
                            labels: {
                                color: "#ffffff", // Màu chữ của legend
                            },
                        },
                        title: {
                            display: true,
                            text: "Monthly Revenue",
                            color: "#ffffff", // Màu tiêu đề
                        },
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: "Months",
                                color: "#ffffff",
                            },
                            ticks: {
                                color: "#ffffff", // Màu chữ trục x
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: "Revenue (VND)",
                                color: "#ffffff",
                            },
                            ticks: {
                                callback: (value) => `${value.toLocaleString()} VND`, // Format số tiền
                                color: "#ffffff", // Màu chữ trục y
                            },
                            beginAtZero: true,
                        },
                    },
                }}
            />
        </div>
    );
}
