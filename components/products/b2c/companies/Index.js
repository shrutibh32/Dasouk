import React from "react";
import styles from "./Index.module.css";
import Apple from "@/public/svg/homepage/companies/Apple";
import Adobe from "@/public/svg/homepage/companies/Adobe";
import Slack from "@/public/svg/homepage/companies/Slack";
import Spotify from "@/public/svg/homepage/companies/Spotify";
import Google from "@/public/svg/homepage/companies/Google";

const Companies = () => {
  return (
    <div className={styles.logosContainer}>
      <Apple />
      <Adobe />
      <Slack />
      <Spotify />
      <Google />
    </div>
  );
};

export default Companies;
