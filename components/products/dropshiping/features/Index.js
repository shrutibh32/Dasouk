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
          DaSouk Dropshipping redefines commerce, enabling businesses to thrive without the burden of inventory management.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.iconContainer}>
            <SolutionFeatures />
          </div>
          <p className={styles.space}>
          Our platform connects you to a network of reliable suppliers, ensuring your customers receive quality products without the operational headaches.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.iconContainer}>
            <SolutionFeatures />
          </div>
          <p>
          With a curated network of suppliers, we handle logistics, allowing you to prioritize customer satisfaction and business expansion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
