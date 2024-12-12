import React from "react";
import styles from "./Sales.module.css";
import SalesChart from "./SalesChart";

const Sales = () => {
  return (
    <div className={styles.salesContainer}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Sales Overview</h2>
          <p>
            <span className={+4 > 0 ? styles.green : styles.red}>+10%</span>{" "}
            more sales this week
          </p>
        </div>
      </div>
      <SalesChart />
    </div>
  );
};

export default Sales;

