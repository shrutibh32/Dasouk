import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.main}>
      <form className={styles.form}>
        <div className={styles.input}>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            required
            rows={6}
            placeholder="Please type your message here"
          ></textarea>
        </div>
        <div className={styles.btn}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61399.73423771064!2d74.5109427!3d15.8837268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf612484c4078b%3A0xd3c617241f62ef12!2sONE%20DAY%20RESIDENCY!5e0!3m2!1sen!2sin!4v1705937030695!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowfullscreen={false}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
