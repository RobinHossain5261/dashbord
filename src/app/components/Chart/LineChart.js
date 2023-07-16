"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(79, 69, 182, 0.8)');   // Start color
        gradient.addColorStop(1, 'rgba(79, 69, 182, 0.1)');   // End color

        const chartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'My Dataset',
                data: [11000, 25000, 20000, 27000, 22000, 25600, 30000, 28000, 35000, 33000, 37000, 43000],
                fill: true,
                backgroundColor: gradient,
                borderColor: '#4538D3',
                borderWidth: 2,
                pointRadius: 10,
                pointBackgroundColor: 'white',
                
            }]
        };

        new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: {
                
                responsive: true,
                aspectRatio:4,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#F5F7FD',
                        titleColor: '#2E293E',
                        padding: 28,
                        bodyColor: '#2E293E',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, []);

    return <canvas ref={chartRef} />;
};

export default LineChart;
