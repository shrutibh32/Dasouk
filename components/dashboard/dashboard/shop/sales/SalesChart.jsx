"use client";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import styles from "./SalesChart.module.css";

const SalesChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);
  let chartInstance = null;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/orders/");
      const data = await res.json();
      setChartData(data.weeklySales || []);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef && chartRef.current && chartData.length > 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              label: "Orders",
              data: chartData,
              borderColor: "#4CAF50",
              fill: false,
              tension: 0.4,
            }
          ],
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
              },
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false, // Turn off the legend
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartData]);

  return (
    <div className={styles.chartContainer}>
      <canvas ref={chartRef} width="1400" height="500" />
    </div>
  );
};

export default SalesChart;
