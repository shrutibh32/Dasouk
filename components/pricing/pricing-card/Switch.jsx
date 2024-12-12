import React, { useState } from "react";
import styles from "./Switch.module.css";

const HorizontalSwitch = ({ handleToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
    handleToggle();
  };

  return (
    <div
      className={`${styles.horizontalSwitch} ${isOn ? styles.on : styles.off}`}
      onClick={toggleSwitch}
    >
      <div className={styles.switchHandle}></div>
    </div>
  );
};

export default HorizontalSwitch;
