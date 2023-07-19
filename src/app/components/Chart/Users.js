"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useTheme } from 'next-themes';

const Users = () => {
    const chartRef = useRef(null);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(79, 69, 182, 0.8)');
        gradient.addColorStop(1, 'rgba(79, 69, 182, 0.1)');

        const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(0, 'rgba(100, 196, 247, 0.9)');
        gradient1.addColorStop(1, 'rgba(100, 196, 247, 0.3)');

        const chartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July','Aug','Sep','Oct'],
            datasets: [{
                label: 'My Dataset',
                data: [25,30,28,29,32,31,40,33,34,38],
                fill: true,
                backgroundColor: resolvedTheme === 'dark' ? gradient1 : gradient,
                borderColor: resolvedTheme === 'dark' ? '#64C4F7' : '#4538D3',
                pointRadius: 0,
                borderWidth:5,
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

export default Users;
