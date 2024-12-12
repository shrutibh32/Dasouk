import React from "react";
import styles from "./Index.module.css";
import Shop from "./Shop";

const ShopsPage = () => {
  return (
    <div className={styles.shops}>
      <div className={styles.header}>
        <h3>Name</h3>
        <h3>Profit</h3>
        <h3>Users</h3>
        <h3>Reviews</h3>
      </div>
      <Shop />
      <Shop />
      <Shop />
    </div>
  );
};

export default ShopsPage;
