"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SignUps = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(245, 136, 105, 0.5)"); // Start color
    gradient.addColorStop(1, "rgba(245, 136, 105, 0.1)"); // End color

    const chartData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
      datasets: [
        {
          label: "My Dataset",
          data: [28, 40, 30, 32, 33, 20, 38],
          fill: true,
          backgroundColor: gradient,
          borderColor: "#FFA5A5",
          pointRadius: 0,
          borderWidth: 5,
          tension: 0.4,
        },
      ],
    };

    new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        layout: {
          padding: {
            left: -8,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              display: false,
            },
          },
          x: {
            display: false,
          },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default SignUps;
