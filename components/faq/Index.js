import React from "react";
import styles from "./Index.module.css";
import FAQ from "./FAQ";

const FAQPage = () => {
  return (
    <main className={styles.main}>
      <h1>Quick Q's, Smart A's: Your FAQs Unwrapped!</h1>
      <h4>FAQs Unleashed: Your top questions answered in a nutshell!</h4>
      <FAQ />
    </main>
  );
};

export default FAQPage;
