import React from "react";
import styles from "./BillingInformation.module.css";
import Bill from "./Bill";

const BillingInformation = () => {
  return (
    <div className={styles.billingInformation}>
      <h2>Billing Information</h2>
      <Bill />
      <Bill />
      <Bill />
      <Bill />
    </div>
  );
};

export default BillingInformation;
