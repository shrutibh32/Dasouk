import React from "react";
import styles from "./Authentication.module.css";
import AuthForm from "./authForm";

const Authentication = () => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.logoContainer}>
        <h1>Welcome back, old friend. Let's pick up where we left off</h1>
      </div>
      <div className={styles.formContainer}>
        <AuthForm />
      </div>
    </div>
  );
};

export default Authentication;
