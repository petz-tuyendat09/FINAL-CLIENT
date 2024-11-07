"use client";

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';

Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function LineChart() {
    const [monthlyRevenue, setMonthlyRevenue] = useState(new Array(12).fill(0));

    useEffect(() => {
        // Fetch data 
        async function fetchBookingStatistics() {
            try {
                const response = await fetch('http://localhost:8888/api/bookingStats?year=2024');
                const data = await response.json();

                setMonthlyRevenue(data.monthlyRevenue);
            } catch (error) {
                console.error("Error fetching booking statistics:", error);
            }
        }

        fetchBookingStatistics();
    }, []);

    const maxValue = Math.max(...monthlyRevenue);

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
                            data: monthlyRevenue,
                            backgroundColor: '#AD3E39',
                            borderColor: '#AD3E39',
                            fill: false,
                            tension: 0.4,
                            pointBackgroundColor: monthlyRevenue.map(value => value === maxValue ? '#AD3E39' : 'grey'),
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
