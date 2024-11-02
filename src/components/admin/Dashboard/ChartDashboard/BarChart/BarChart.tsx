"use client";

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function BarChart() {
    const [data, setData] = useState([]);
    const [maxValue, setMaxValue] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8888/api/stats?year=2024');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const stats = await response.json();

                const monthlyData = stats.monthlyRevenue || Array(12).fill(0); // Đảm bảo mảng có đủ 12 tháng

                setData(monthlyData);
                setMaxValue(Math.max(...monthlyData));
            } catch (error) {
                console.error("Lỗi khi gọi API thống kê:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className='w-1/2 mt-10 p-8' style={{ background: "#37373e", borderRadius: "40px" }}>
            <div className='text-white text-3xl'>Sales Report</div>
            <div className='text-white'>Earnings</div>
            <Bar className='mt-8'
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "Revenue",
                            data: data,
                            backgroundColor: data.map(value => value === maxValue ? '#AD3E39' : 'grey'),
                            borderRadius: 40,
                            borderSkipped: false,
                        }
                    ]
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Monthly Revenue'
                        }
                    },
                }}
            />
        </div>
    );
}
