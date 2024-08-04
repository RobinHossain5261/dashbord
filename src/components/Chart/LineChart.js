"use client";
import { useTheme } from "next-themes";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const LineChart = () => {
  const { resolvedTheme } = useTheme();
  const bgColor = ({ chart: { ctx } }) => {
    const bg = ctx.createLinearGradient(0, 0, 0, 400);
    bg.addColorStop(0, "rgba(79, 69, 182, 0.8)");
    bg.addColorStop(1, "rgba(79, 69, 182, 0.1)");
    return bg;
  };
  const bgColor1 = ({ chart: { ctx } }) => {
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
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "My Dataset",
        data: [100, 200, 180, 270, 220, 256, 300, 280, 350, 330, 370, 430],
        fill: true,
        backgroundColor: resolvedTheme === "dark" ? bgColor : bgColor1,
        borderColor: resolvedTheme === "dark" ? "#64C4F7" : "#4538D3",
        borderWidth: 2,
        pointRadius: 7,
        pointBackgroundColor: "white",
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#F5F7FD",
        titleColor: "#2E293E",
        padding: 10,
        bodyColor: "#2E293E",
      },
    },
    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          color: resolvedTheme === "dark" ? "#D1D1D1" : "#584E69",
          callback: function (value, index, values) {
            return value + "k";
          },
        },
      },
      x: {
        ticks: {
          color: resolvedTheme === "dark" ? "#D1D1D1" : "#584E69",
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
