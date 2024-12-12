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
            DaSouk streamlines your entrepreneurial journey with the Ecommerce
            Under One Roof concept, manage your online store effortlessly.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.iconContainer}>
            <SolutionFeatures />
          </div>
          <p className={styles.space}>
            Seamlessly manage your online store, dropshipping, B2B and D2C
            interactions in one unified platform.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.iconContainer}>
            <SolutionFeatures />
          </div>
          <p>
            DaSouk&apos;s Ecommerce Under One Roof model. Simplify complex
            processes, enhance collaboration, and drive growth
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
