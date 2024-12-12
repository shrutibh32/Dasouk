import React from "react";
import styles from "./Bill.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Bill = () => {
  return (
    <div className={styles.bill}>
      <div className={styles.content}>
        <h4>Oliver Liam</h4>
        <div className={styles.companyInfo}>
          <p>Company name: Vikings</p>
          <p>Email: Vikings@gmail.com</p>
          <p>GST No.: AKJNFANDLSKAND</p>
        </div>
      </div>
      <div className={styles.actions}>
        <AiFillDelete className={styles.delete} />
        <AiFillEdit className={styles.edit} />
      </div>
    </div>
  );
};

export default Bill;
