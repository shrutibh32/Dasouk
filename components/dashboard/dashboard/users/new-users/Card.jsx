import React from "react";
import styles from "./Card.module.css";
import Wallet from "@/public/svg/dashboard/dashboard/Wallet";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <Wallet /> Users
      </div>
      <h3>32,984</h3>
    </div>
  );
};

export default Card;
