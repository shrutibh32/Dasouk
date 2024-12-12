import React from "react";
import styles from "./Index.module.css";
import Sales from "./sales/Sales";
import Shops from "./shops-list/Shops";

const Index = () => {
  return (
    <div className={styles.shop}>
      <Sales />
      <Shops />
    </div>
  );
};

export default Index;
