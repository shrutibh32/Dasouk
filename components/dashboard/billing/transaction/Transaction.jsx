import React from "react";
import styles from "./Transaction.module.css";
import SingleTransaction from "./SingleTransaction";

const Transaction = () => {
  return (
    <div className={styles.transaction}>
      <h2>Your Transactions</h2>
      <SingleTransaction />
      <SingleTransaction />
      <SingleTransaction />
      <SingleTransaction />
      <SingleTransaction />
    </div>
  );
};

export default Transaction;
