import React from "react";
import styles from "./Index.module.css";
import ContactPageLogo from "@/public/svg/contact-us/Logo";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h2>Get in touch with us at no cost - we are eager to hear from you!</h2>
        <ContactPageLogo />
      </div>
      <h4>
        We are happy to answer your questions. <br />
        Fill out the form and we will be in touch in no time.
      </h4>
      <ContactForm />
      <ContactDetails />
    </main>
  );
};

export default Contact;
