import React from "react";
import styles from "./Index.module.css";
import { BsSearch } from "react-icons/bs";
import Blogs from "./Blogs";

const BlogsPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.landingPage}>
        <div className={styles.title}>
          <h2>Our Blog</h2>
          <p>
            Ideas and Design inspiration <br /> Need to change title
          </p>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter a keyword"
          />
          <BsSearch />
        </div>
      </div>
      <Blogs />
    </main>
  );
};

export default BlogsPage;
