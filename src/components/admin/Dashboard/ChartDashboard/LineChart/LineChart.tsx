"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';

// Đăng ký các thành phần cần thiết
Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function LineChart() {
    const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

    // Tìm giá trị lớn nhất trong tập dữ liệu
    const maxValue = Math.max(...data);

    return (
        <div className='w-1/2 mt-10 p-8' style={{ background: "#37373e", borderRadius: "40px" }}>
            <div className='text-white text-3xl'>Booking Report</div>
            <div className='text-white'>Earnings</div>
            <Line className='mt-8'
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "Revenue",
                            data: data,
                            backgroundColor: '#AD3E39',
                            borderColor: '#AD3E39',
                            fill: false,
                            tension: 0.4, // Tăng độ cong cho đường nối các điểm
                            pointBackgroundColor: data.map(value => value === maxValue ? '#AD3E39' : 'grey'),
                            pointRadius: 5,
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
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Months',
                                color: '#ffffff'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Revenue',
                                color: '#ffffff'
                            }
                        }
                    }
                }}
            />
        </div>
    );
}
