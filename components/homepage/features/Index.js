import React from "react";
import styles from "./Index.module.css";
import Calendar from "@/public/svg/homepage/features/Calendar";
import F1 from "@/public/svg/homepage/features/1.png";
import F2 from "@/public/svg/homepage/features/2.png";
import F3 from "@/public/svg/homepage/features/3.png";
import Image from "next/image";

const Index = () => {
  return (
    <div className={styles.featuresContainer}>
      <h2>Find our B-C-D features here for your online store</h2>
      <div className={styles.features}>
        <div className={`${styles.feature} ${styles.feature1}`}>
          <Image src={F1.src} alt={""} width={70} height={70} />

          <h4>
            Quick website with simplicity and speed all just in 60 seconds
          </h4>
          <p>
            Create you're website with our fast and user friendly platform
            designed to fuel innovation that provides you with a personalized
            digital space making fast and easy selection converting your ideas
            into reality.
          </p>
        </div>
        <div className={`${styles.feature} ${styles.feature2}`}>
          <Image src={F2.src} alt={""} width={70} height={70} />

          <h4>All in one featured tool kit for you're digital store</h4>
          <p>
            Expand you're operations with our robust features including Api's,
            customizable themes, domains, payment gateways, and logistics
            managment with no hassle just, effortless expansion.
          </p>
        </div>
        <div className={`${styles.feature} ${styles.feature3}`}>
          <Image src={F3.src} alt={""} width={70} height={70} />

          <h4>
            Data driven business, marketing and analytical features at one place
          </h4>
          <p>
            Engage your business in our all in one feature. Grow your business
            effortlessly with marketing tools and cutting edge analytics for a
            powerful experience like never before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
