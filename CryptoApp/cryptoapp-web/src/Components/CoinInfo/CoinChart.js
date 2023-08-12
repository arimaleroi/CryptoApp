import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

const CoinChart = ({ coinId, timeRange }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchChartData = async (coinId, days) => {
      try {
        const response = await fetch(
          `https://localhost:44330/api/coincontroller/marketchart?id=${coinId}&days=${days}`
        );
        if (!response.ok) {
          throw new Error("Ошибка при получении данных с API");
        }

        const data = await response.json();
        setChartData({
          labels: data.prices.map((priceData) =>
            new Date(priceData[0]).toISOString()
          ),
          datasets: [
            {
              label: `Price (${timeRange} days)`,
              data: data.prices.map((priceData) => ({
                x: new Date(priceData[0]),
                y: priceData[1],
              })),
              borderColor: "#007BFF",
              backgroundColor: "rgba(0, 123, 255, 0.1)",
              pointRadius: 0,
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error("Ошибка при получении данных для графика", error);
        setChartData(null);
      }
    };

    fetchChartData(coinId, timeRange);
  }, [coinId, timeRange]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
        ticks: {
          maxTicksLimit: 6,
        },
      },
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value) => "$" + value,
        },
      },
    },
  };

  const chartContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    width: "1000px",
    height: "400px",
  };

  if (!chartData) {
    return <div>Loading chart data...</div>;
  }

  return (
    <div className="coin-chart" style={chartContainerStyles}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default CoinChart;
