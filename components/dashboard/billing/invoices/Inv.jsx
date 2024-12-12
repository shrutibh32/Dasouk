import React from "react";
import styles from "./Inv.module.css";
import { AiFillFile } from "react-icons/ai";

const Inv = () => {
  return (
    <div className={styles.invoice}>
      <div className={styles.details}>
        <h4>#425-3423</h4>
        <p>March 20, 2024</p>
      </div>
      <div className={styles.actions}>
        <p>₹ 180</p>
        <div>
          <AiFillFile />
          <p>PDF</p>
        </div>
      </div>
    </div>
  );
};

export default Inv;
