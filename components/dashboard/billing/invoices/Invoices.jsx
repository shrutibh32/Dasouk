import React from "react";
import styles from "./Invoices.module.css";
import Invoice from "./Inv";

const Invoices = () => {
  return (
    <div className={styles.invoices}>
      <h2>Invoices</h2>
      <Invoice />
      <Invoice />
      <Invoice />
    </div>
  );
};

export default Invoices;
