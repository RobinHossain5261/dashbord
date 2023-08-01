"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useTheme } from 'next-themes';

const TotalSeles = () => {
    const chartRef = useRef(null);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(79, 69, 182, 0.8)'); //start color
        gradient.addColorStop(1, 'rgba(79, 69, 182, 0.1)'); //end color

        const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(0, 'rgba(100, 196, 247, 0.9)');
        gradient1.addColorStop(1, 'rgba(100, 196, 247, 0.3)');

        const chartData = {
            labels: ['Sep1', 'Sep5', 'Sep10', 'Sep15', 'Sep20', 'Sep25', 'Sep30'],
            datasets: [{
                label: 'My Dataset',
                data: [110, 250, 200, 270, 220, 256, 300],
                fill: true,
                backgroundColor: resolvedTheme === 'dark' ? gradient1 : gradient,
                borderColor: resolvedTheme === 'dark' ? '#64C4F7' : '#4538D3',
                borderWidth: 2,
                pointRadius: 7,
                pointBackgroundColor: 'white',

            }]
        };

        new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: {

                responsive: true,
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
                        beginAtZero: true,
                        ticks: {
                            color: resolvedTheme === 'dark' ? '#D1D1D1' : '#584E69',
                            callback: function (value, index, values) {
                                return value + 'k'
                            },
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

export default TotalSeles;
