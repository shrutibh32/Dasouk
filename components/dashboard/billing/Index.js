import React from "react";
import styles from "./Index.module.css";
import PaymentMethod from "./payment/PaymentMethod";
import Invoices from "./invoices/Invoices";
import BillingInformation from "./billingInformation/BillingInformation";
import Transaction from "./transaction/Transaction";

const BillingSection = () => {
  return (
    <div className={styles.billingSection}>
      <div className={styles.payment}>
        <PaymentMethod />
        <BillingInformation />
      </div>
      <div className={styles.transaction}>
        <Invoices />
        <Transaction />
      </div>
    </div>
  );
};

export default BillingSection;
