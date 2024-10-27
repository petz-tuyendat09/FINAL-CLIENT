"use client";

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function ChartDashboard() {
    const data = [40, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

    // Find the maximum value in the dataset
    const maxValue = Math.max(...data);

    return (
        <div className='mt-10 p-8' style={{ background: "#37373e", borderRadius: "40px" }}>
            <div className='text-white text-3xl'>Sales Report</div>
            <div className='text-white'>Earnings</div>
            <Bar className='mt-8'
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Out", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "Revenue",
                            data: data,
                            backgroundColor: data.map(value => value === maxValue ? '#AD3E39' : 'grey'),
                            borderRadius: 40,
                            borderSkipped: false, // Enables rounded corners on both ends
                        }
                    ]
                }}

            />
        </div>
    );
}
