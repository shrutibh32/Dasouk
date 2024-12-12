import React from "react";
import styles from "./PaymentMethod.module.css";
import { AiFillCreditCard, AiFillMobile, AiFillEdit } from "react-icons/ai";

const PaymentMethod = () => {
  return (
    <div className={styles.payment}>
      <div className={styles.header}>
        <h2>Payment Method</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <AiFillCreditCard />
          <input type="text" />
          <AiFillEdit className={styles.editBtn} />
        </div>
        <div className={styles.upi}>
          <AiFillMobile />
          <input type="text" />
          <AiFillEdit className={styles.editBtn} />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
