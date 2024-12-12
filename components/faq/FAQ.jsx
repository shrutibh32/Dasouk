"use client";
import React, { useState } from "react";
import styles from "./FAQ.module.css";
import Accordion from "./Accordion";
import FaqData from "./FAQ.json";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.container}>
      {FaqData.map((faq, index) => (
        <Accordion
          key={index}
          index={index}
          question={faq.question}
          answer={faq.answer}
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </div>
  );
};

export default FAQ;
