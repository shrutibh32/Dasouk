"use client";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import styles from "./NewUsersChart.module.css";

const NewBarChart = () => {
  const chartRef = useRef(null);
  const [countsByDay, setCountsByDay] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/users/newusers/'); // Adjust the endpoint as necessary
        const data = await response.json();

        // Debugging: Check the fetched data
        console.log('Fetched data:', data);

        // Ensure data has the expected structure
        if (data.countsByDay) {
          setCountsByDay(data.countsByDay);
        } else {
          console.error('Invalid data structure:', data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy existing chart instance if it exists
      if (ctx.chartInstance) {
        ctx.chartInstance.destroy();
      }

      // Create a new chart instance
      const newChartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"], // Adjust labels if needed
          datasets: [
            {
              data: countsByDay,
              backgroundColor: "white",
              barThickness: 10,
              borderRadius: 20,
            },
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
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      // Attach chart instance to the canvas context for proper cleanup
      ctx.chartInstance = newChartInstance;
    }

    return () => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, [countsByDay]);

  return (
    <div className={styles.chartContainer}>
      <canvas ref={chartRef} width="1400" height="500" />
    </div>
  );
};

export default NewBarChart;
