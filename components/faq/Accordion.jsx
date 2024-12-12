import React from "react";
import styles from "./Accordion.module.css";

const Accordion = ({
  question,
  answer,
  index,
  activeIndex,
  toggleAccordion,
}) => {
  return (
    <div key={index} className={styles.accordion}>
      <button
        className={`${styles.accordion_button} ${
          activeIndex === index && styles.active
        }`}
        onClick={() => toggleAccordion(index)}
      >
        <span className={styles.title}>{question}</span>
        <svg
          className={`${
            activeIndex === index ? styles.rotate_180 : styles.rotate_0
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {activeIndex === index && (
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
