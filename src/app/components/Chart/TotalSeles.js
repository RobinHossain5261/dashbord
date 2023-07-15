"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TotalSeles = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(79, 69, 182, 0.8)');   // Start color
        gradient.addColorStop(1, 'rgba(79, 69, 182, 0.1)');   // End color

        const chartData = {
            labels: ['Sep1','Sep5','Sep10','Sep15','Sep20','Sep25','Sep30'],
            datasets: [{
                label: 'My Dataset',
                data: [11000, 25000, 20000, 27000, 22000, 25600, 30000],
                fill: true,
                backgroundColor: gradient,
                borderColor: '#4538D3',
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
                        beginAtZero: true
                    }
                }
            }
        });
    }, []);

    return <canvas ref={chartRef} />;
};

export default TotalSeles;
