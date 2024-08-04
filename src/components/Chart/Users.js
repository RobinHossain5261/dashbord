"use client";
import { useTheme } from "next-themes";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";

const Users = () => {
  const { resolvedTheme } = useTheme();
  const gradient = ({ chart: { ctx } }) => {
    const bg = ctx.createLinearGradient(0, 0, 0, 400);
    bg.addColorStop(0, "rgba(79, 69, 182, 0.8)");
    bg.addColorStop(1, "rgba(79, 69, 182, 0.1)");
    return bg;
  };
  const gradient1 = ({ chart: { ctx } }) => {
    const bg = ctx.createLinearGradient(0, 0, 0, 400);
    bg.addColorStop(0, "rgba(100, 196, 247, 0.9)");
    bg.addColorStop(1, "rgba(100, 196, 247, 0.3)");
    return bg;
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "My Dataset",
        data: [25, 30, 28, 29, 32, 31, 40, 33, 34, 38],
        fill: true,
        backgroundColor: resolvedTheme === "dark" ? gradient1 : gradient,
        borderColor: resolvedTheme === "dark" ? "#64C4F7" : "#4538D3",
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
        bottom: -8,
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
        display: false,
      },
      x: {
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Users;
