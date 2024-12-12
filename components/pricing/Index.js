import React from "react";
import styles from "./Index.module.css";
import PricingCards from "./pricing-card/Index";
import Newsletter from "../ui/newsletter/Index";

const PricingPage = () => {
  return (
    <main className={styles.main}>
      <h1>
        Find the ideal pricing option for all your digital needs, <br />
        conveniently tailored just for you, all in one place.
      </h1>
      <PricingCards />
      <Newsletter />
    </main>
  );
};

export default PricingPage;
