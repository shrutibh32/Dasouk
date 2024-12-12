import React from "react";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h3>DaSouk B2B: Where Business Synergy Meets Digital Excellence</h3>
        <h5>Launching Your go to Dropshipping store: Effortless Setup, Streamlined Efficiency, and Essential Tools.</h5>
        <div className={styles.actions}>
          <button >Try now!</button>
          <button >Get Demo</button>
        </div>
      </div>
      <iframe
        className={styles.video}
        width="100%"
        height="280"
        src="https://www.youtube.com/embed/PEM0Vs8jf1w?si=BBIf6q6kL6xXRj8L"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default LandingPage;
