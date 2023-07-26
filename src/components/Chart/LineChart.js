"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useTheme } from 'next-themes';

const LineChart = () => {
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
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'My Dataset',
                data: [11000, 25000, 20000, 27000, 22000, 25600, 30000, 28000, 35000, 33000, 37000, 43000],
                fill: true,
                backgroundColor: resolvedTheme === 'dark' ? gradient1 : gradient,
                borderColor: resolvedTheme === 'dark' ? '#64C4F7' : '#4538D3',
                borderWidth: 2,
                pointRadius: 10,
                pointBackgroundColor: 'white',

            }]
        };

        var yLabels = {
            10: 'Test',
            2: 'Java',
            14: 'Javascript',
            6: 'bootcamp',
            18: 'Oracle',
            10: 'mid-level',
            12: 'senior-dev',
            4: 'full-stack-dev',
            16: 'famous-speaker',
            8: 'SQL',
            20: 'harambe'
        }

        new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: {

                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: '#F5F7FD',
                        titleColor: '#2E293E',
                        padding: 10,
                        bodyColor: '#2E293E',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,

                        ticks: {
                            color: resolvedTheme === 'dark' ? '#D1D1D1' : '#584E69'
                        }
                    },
                    x: {
                        ticks: {
                            color: resolvedTheme === 'dark' ? '#D1D1D1' : '#584E69'
                        }
                    }
                }
            }
        });
    }, []);

    return <canvas ref={chartRef} />;
};

export default LineChart;
