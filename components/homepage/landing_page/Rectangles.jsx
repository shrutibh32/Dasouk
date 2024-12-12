import React from "react";
import styles from "./Rectangles.module.css";

const Rectangles = () => {
  return (
    <>
      <div className={styles.lightRect}></div>
      <div className={styles.mediumDarkRect}></div>
      <div className={styles.darkRect}></div>
    </>
  );
};

export default Rectangles;
