import React from "react";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h3>Seamless Commerce Starts Here: DaSouk, Everything Under One Roof.</h3>
        <h5>Navigating the Complexity: Streamlining and Simplifying B2B Solutions for the Ever-Evolving Business Landscape</h5>
        <div className={styles.actions}>
          <button>Try now!</button>
          <button>Get Demo</button>
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
