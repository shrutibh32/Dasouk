import React from "react";
import styles from "./Index.module.css";
import Card from "./Card";

const pricingData = [
  {
    name: "BASIC",
    description: "Small enterprises and budding entreprenuers.",
    plugin: "30+ plugins",
    features: [
      "1 online store",
      "3.99% transaction fees",
      "1 staff account",
      "5+ themes",
      "Manual payment",
    ],
    price: {
      monthly: "699",
      yearly: "5999",
    },
  },
  {
    name: "STANDARD",
    description: "For medium size and growing businesses.",
    plugin: "50+ plugins",
    features: [
      "1 online store",
      "2.5% transaction fees",
      "3 staff account",
      "8+ themes",
      "Custom domain",
      "CRM",
      "Blogs",
    ],
    price: {
      monthly: "1299",
      yearly: "12499",
    },
  },
  {
    name: "PREMIUM",
    description: "Upgrade and scale your growth with our premium pricing plan.",
    plugin: "60+ plugins",
    features: [
      "2 online store",
      "0.99% transaction fees",
      "5 staff account",
      "15+ themes",
      "Custom domain",
      "CRM, Analytics, Marketing",
      "Blogs",
      "Management tools",
    ],
    price: {
      monthly: "2799",
      yearly: "29999",
    },
  },
];

const PricingCards = () => {
  return (
    <div className={styles.pricing}>
      {pricingData.map((item, index) => (
        <Card plan={item} key={index} />
      ))}
    </div>
  );
};

export default PricingCards;
