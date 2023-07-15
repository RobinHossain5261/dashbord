"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PageViews = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(79, 69, 182, 0.5)');   // Start color
        gradient.addColorStop(1, 'rgba(79, 69, 182, 0.1)');   // End color

        const chartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
            datasets: [{
                label: 'My Dataset',
                data: [30, 27, 33, 40, 33, 28, 30],
                fill: true,
                backgroundColor: gradient,
                borderColor:'#4C19E2',
                pointRadius: 0,
                tension: 0.4
            }]
        };

        new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: {
                responsive: true,
                layout: {
                    padding: {
                        bottom: -8
                    },
                },
                plugins: {
                    legend: {
                        display: false
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        display: false
                    },
                    x: {
                        ticks: {
                            display: false
                        }
                    }
                }
            }
        });
    }, []);

    return <canvas ref={chartRef} />;
};

export default PageViews;
