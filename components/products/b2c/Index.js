import React from "react";
import styles from "./Index.module.css";
import LandingPage from "./LandingPage";
import Companies from "./companies/Index";
import Features from "./features/Index";
import OtherService from "./OtherService/Index";
import Newsletter from "../../ui/newsletter/Index";
import Tabs from "../b2b/tabs/Index";
import Review from "../b2b/reviews/Index";

const B2C = () => {
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

export default B2C;