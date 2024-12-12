"use client";
import React from "react";
import styles from "./Info.module.css";
import GreetingCard from "./GreetingCard";
import Satisfactory from "./Satisfactory";

const Info = () => {
  return (
    <div className={styles.infoContainer}>
      <GreetingCard />
      <Satisfactory />
    </div>
  );
};

export default Info;
