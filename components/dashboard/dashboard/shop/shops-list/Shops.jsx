import React from "react";
import styles from "./Shops.module.css";
import ShopListTable from "./ShopListTable";

const Shops = () => {
  return (
    <div className={styles.shopsContainer}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Orders</h2>
         
        </div>
        <ShopListTable />
      </div>
    </div>
  );
};

export default Shops;
