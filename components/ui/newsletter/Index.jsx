import React from "react";
import styles from "./Index.module.css";
import { AiOutlineMail } from "react-icons/ai";

const Newsletter = () => {
  return (
    <main className={styles.main}>
      <h1>JOIN OUR NEWSLETTER</h1>
      <p>Sign up for deals, new products and promotions.</p>
      <form>
        <AiOutlineMail />
        <input
          type="email"
          name="newsletter"
          id="newsletter"
          placeholder="Enter your email address"
        />
        <button type="submit">Signup</button>
      </form>
    </main>
  );
};

export default Newsletter;
