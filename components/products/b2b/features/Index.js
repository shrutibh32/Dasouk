import React from "react";
import styles from "./Index.module.css";
import SolutionFeatures from "@/public/svg/homepage/features/SolutionFeatures";

const Features = () => {
  return (
    <div className={styles.featuresContainer}>
      <h2>FEATURES</h2>
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.iconContainer}>
            <SolutionFeatures />
          </div>
          <p>
            DaSouk B2B seamlessly connects businesses, fostering a digital ecosystem where collaboration meets innovation.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.iconContainer}>
            <SolutionFeatures />
          </div>
          <p className={styles.space}>
            DaSouk facilitates secure transactions, expedites decision-making, and cultivates lasting partnerships,ensuring your business thrives in the digital age.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.iconContainer}>
            <SolutionFeatures />
          </div>
          <p>
            Elevate your B2B experience with DaSouk, where precision meets simplicity, From hassle-free procurement to strategic partnerships, our platform provides a robust foundation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
