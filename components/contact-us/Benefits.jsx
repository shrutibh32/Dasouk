import React from "react";
import styles from "./Benefits.module.css";
import Truck from "@/public/svg/contact-us/Truck";
import Money from "@/public/svg/contact-us/Money";
import Payment from "@/public/svg/contact-us/Payment";
import Support from "@/public/svg/contact-us/Support";

const Benefits = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <Truck />
        <div>
          <h4>Free Shipping</h4>
          <p>Across India</p>
        </div>
      </div>
      <div className={styles.card}>
        <Money />
        <div>
          <h4>Money-Back</h4>
          <p>30 days guarantee</p>
        </div>
      </div>
      <div className={styles.card}>
        <Payment />
        <div>
          <h4>Secure Payments</h4>
          <p>Secured by razorpay</p>
        </div>
      </div>
      <div className={styles.card}>
        <Support />
        <div>
          <h4>24/7 Support</h4>
          <p>Phone and email suppoort</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
