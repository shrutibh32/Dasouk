import React from "react";
import styles from "./Index.module.css";
import LandingPage from "./LandingPage";
import Companies from "./companies/Index";
import Features from "./features/Index";
import OtherService from "./OtherService/Index";
import Newsletter from "../../ui/newsletter/Index";
import Tabs from "./tabs/Index";
import Review from "./reviews/Index";

const B2B = () => {
  return (
    <main className={styles.main}>
      <LandingPage />
      <Companies />
      <Features />
      <Tabs />
      <OtherService />
      <Newsletter />
      <Review />
    </main>
  );
};

export default B2B;
