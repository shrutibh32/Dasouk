import React from "react";
import styles from "./ContactDetails.module.css";
import Shop from "@/public/svg/contact-us/Shop";
import Phone from "@/public/svg/contact-us/Phone";
import Email from "@/public/svg/contact-us/Email";

const ContactDetails = () => {
  return (
    <div className={styles.main}>
      <h2>24 x 7 Support</h2>
      <div className={styles.contactCardsContainer}>
        <div className={styles.shop}>
          <div className={styles.contactCard}>
            <Shop />
            <h4>Visit us at</h4>
            <p>Plot 183, 4th cross Azam Nagar, Belgaum - 590010</p>
          </div>
        </div>
        <div className={styles.phoneEmail}>
          <div className={styles.contactCard}>
            <Phone />
            <h4>Call us at</h4>
            <p>+91 951 308 1525</p>
          </div>
          <div className={styles.contactCard}>
            <Email />
            <h4>Write us at</h4>
            <p>indiadasouk@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
