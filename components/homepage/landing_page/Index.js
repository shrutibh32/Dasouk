"use client";
import Rectangles from "@/components/homepage/landing_page/Rectangles";
import styles from "./Index.module.css";
import Circles from "@/components/homepage/landing_page/Circles";
import Store from "@/components/homepage/landing_page/Store";
import Girl from "./Girl";
import OrangeCircles from "./OrangeCircles";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.taglines}>
        <h1>
          Your premier partner for top-notch digital services and solutions.
        </h1>
        <h4>
          Launch your own digital store within a minute and trust us to be
          you are reliable partner in creating your online presence to life.
        </h4>
      </div>
      {!isMobile && (
        <>
          <Circles />
          <Girl />
          <Store />
          <Rectangles />
          <OrangeCircles />
        </>
      )}
    </div>
  );
};

export default LandingPage;
