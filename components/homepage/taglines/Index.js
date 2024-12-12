"use client";
import React, { useState, useEffect } from "react";
import styles from "./Index.module.css";

const taglines = [
  "Did you know? The dropshipping industry is expected to reach $1,253.79 billion by 2030, registering a CAGR of 23.4% over the forecast period.",

  "Did you know? The global dropshipping market will reach $196.78 billion in 2022, and it will continue to grow, reaching $476.1 billion by 2026.",
  
  "Did you know? Online stores with at least one social media account (Facebook and/or Twitter) have, on average, 32% more sales than those not using these social media channels.",
  
  "Did you know? Influencer marketing is gaining more and more popularity.",
  
  "Did you know? Around 27% of online retailers are now using the dropshipping business model as their primary method to fulfill orders from customers.",
  
  "Did you know? In 2021, there were over 2.14 billion people worldwide who wanted to buy goods and services online.",
  
  "Did you know? Ecommerce dropshipping is not a get-rich-quick scheme and requires hard work and dedication to succeed.",
  
  "Did you know? Apparel and accessories sales are the fastest growing sector in ecommerce, thanks to women's love for shopping!",
  
  "Did you know? The largest number of online purchases in the world is from Asia & some part of South Korea.",
  
  "Did you know? More than 67% of people love to purchase through their mobile rather than laptop & other systems.",
  
  "Did you know? 40% of worldwide internet users have bought products or goods online via desktop, mobile, tablet or other online devices.",
  
  "Did you know? By 2017, mobile commerce accounted for 24% of the global ecommerce market.",
];

const TaglineSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <div className={styles.taglineslider}>
      <p>{taglines[currentIndex]}</p>
    </div>
  );
};

export default TaglineSlider;
