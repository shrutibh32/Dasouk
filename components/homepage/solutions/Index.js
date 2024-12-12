import React from "react";
import styles from "./Index.module.css";
import Link from "next/link";

const Solutions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.taglines}>
        <h1>SPECIALIZE.PERSONALIZE.CUSTOMIZE.</h1>
        <h3>Creative Ecommerce solutions for all kinds of Business.</h3>
      </div>
      <div className={styles.solutions}>
        <Link href="/products/b2b">
          <div className={styles.b2b}>
            <h2>Wholesale and B2B Redifined</h2>
            <p>
              Enhance your wholesale and B2B businesses for ecommerce with
              specialized features
            </p>
          </div>
        </Link>
        <Link href="/products/dropshipping">
          <div className={styles.dropshipping}>
            <h2>Seamless Dropshipping</h2>
            <p>
              Create a seamless online platform for harnessing the power of
              dropshipping with us
            </p>
          </div>
        </Link>
        <Link href="/products/b2c">
          <div className={styles.b2c}>
            <h2>Ecommerce Under One Roof</h2>
            <p>
              Create a fullfleged online platform to empower multiple vendors to
              boost their business
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Solutions;
