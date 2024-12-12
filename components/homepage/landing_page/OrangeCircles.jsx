import React from "react";
import styles from "./OrangeCircles.module.css";
import BigCircle from "@/public/svg/homepage/landing-page/backgroundObjects/BigCircle";
import SmallCircle from "@/public/svg/homepage/landing-page/backgroundObjects/SmallCircle";

const OrangeCircles = () => {
  return (
    <>
      <div className={styles.circle1}>
        <BigCircle />
      </div>
      <div className={styles.circle2}>
        <BigCircle />
      </div>
      <div className={styles.circle3}>
        <SmallCircle />
      </div>
      <div className={styles.circle4}>
        <SmallCircle />
      </div>
    </>
  );
};

export default OrangeCircles;
