"use client";
import React, { useState } from "react";
import styles from "./Card.module.css";
import Link from "next/link";
import HorizontalSwitch from "./Switch";

const Card = ({ plan }) => {
  const [type, setType] = useState("monthly");

  const handleToggle = () => {
    setType((prevType) => (prevType === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <div
      className={`${styles.card} ${
        styles[
          plan.name === "STANDARD"
            ? "standard"
            : plan.name === "PREMIUM" && "premium"
        ]
      }`}
    >
      <h2>{plan.name.toUpperCase()}</h2>
      <h2>₹ {plan.price[type]}</h2>
      <p>{plan.description}</p>
      <div className={styles.switch}>
        <h4>Monthly</h4>
        <HorizontalSwitch handleToggle={handleToggle} />
        <h4>Yearly</h4>
      </div>
      <Link href={"#"} className={styles.button}>
        Get Started
      </Link>
      <hr className={styles.line} />
      <div className={styles.features}>
        {plan.features.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>
      <div className={styles.plugin}>{plan.plugin}</div>
    </div>
  );
};

export default Card;
