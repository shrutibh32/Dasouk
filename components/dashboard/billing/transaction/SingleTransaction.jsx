import React from "react";
import styles from "./SingleTransaction.module.css";

const SingleTransaction = () => {
  return (
    <div className={styles.transaction}>
      <div className={styles.content}>
        <h3>Vikings</h3>
        <p>March 20, 2024</p>
      </div>
      <h3 className={styles.price}>₹ 5000</h3>
    </div>
  );
};

export default SingleTransaction;
