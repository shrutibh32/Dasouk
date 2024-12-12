import React from "react";
import styles from "./PageNotFound.module.css";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>Page not found!</h1>
        <p>
          Uh oh, we can not seem to find the page you are looking for.
          <br /> Try going back to the previous page or visit our home page.
        </p>
      </div>
      <button type="button">
        <Link href={"/"}>HOMEPAGE</Link>
      </button>
    </main>
  );
};

export default PageNotFound;
