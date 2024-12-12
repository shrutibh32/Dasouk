"use client";

import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import styles from "./InputField.module.css";

const InputField = React.forwardRef(
  ({ type, placeholder, errorMessage }, ref) => {
    const [displayPassword, setDisplayPassword] = useState({
      password: false,
      confirmpassword: false,
    });

    const toggleDisplayPassword = (field) => {
      setDisplayPassword((prev) => ({
        ...prev,
        [field]: !prev[field],
      }));
    };

    // Determine the input type based on the field type and whether password visibility is toggled
    const inputType =
      type === "password" || type === "confirmpassword"
        ? displayPassword[type]
          ? "text"
          : "password"
        : type;

    return (
      <div className={styles.controls}>
        <input
          className={styles.text}
          type={inputType}
          name={type}
          placeholder={placeholder}
          ref={ref}
          required
        />
        <p className={styles.errorMessage}>{errorMessage}</p>
        {(type === "password" || type === "confirmpassword") && (
          <div className={styles.eyeIcon} onClick={() => toggleDisplayPassword(type)}>
            {displayPassword[type] ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </div>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
