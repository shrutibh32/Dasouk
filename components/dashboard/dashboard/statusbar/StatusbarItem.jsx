import React from "react";
import styles from "./StatusbarItem.module.css";
import Wallet from "@/public/svg/dashboard/dashboard/Wallet";
import Web from "@/public/svg/dashboard/dashboard/Web";
import Document from "@/public/svg/dashboard/dashboard/Document";
import Cart from "@/public/svg/dashboard/dashboard/Cart";

const StatusbarItem = ({ title, type, price, percent }) => {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <p>{title}</p>
        <h2>
          {type === "users" ? (
            <>
              {price}
              <span className={percent > 0 ? styles.green : styles.red}>
                {percent > 0 && "+"}
                {percent}
              </span>
            </>
          ) : (
            <>
              ₹ {price}{" "}
              <span className={percent > 0 ? styles.green : styles.red}>
                {percent > 0 && "+"}
                {percent}%
              </span>
            </>
          )}
        </h2>
      </div>
      <div className={styles.icon}>{getIcon(type)}</div>
    </div>
  );
};

export default StatusbarItem;

const getIcon = (iconType) => {
  switch (iconType) {
    case "money":
      return <Wallet />;
    case "users":
      return <Web />;
    case "clients":
      return <Document />;
    case "sales":
      return <Cart />;
    default:
      return <Web />;
  }
};
