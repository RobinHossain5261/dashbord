"use client";
import { useTheme } from "next-themes";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const SignUps = () => {
  const { resolvedTheme } = useTheme();
  const gradient = ({ chart: { ctx } }) => {
    const bg = ctx.createLinearGradient(0, 0, 0, 400);
    bg.addColorStop(0, "rgba(245, 136, 105, 0.5)");
    bg.addColorStop(1, "rgba(245, 136, 105, 0.1)");
    return bg;
  };

  const data = {
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
  const options = {
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
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default SignUps;
