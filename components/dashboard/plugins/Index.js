import React from "react";
import styles from "./Index.module.css";
import Link from "next/link";
import Plugin from "./Plugin";

const Plugins = () => {
  return (
    <div className={styles.pluginsContainer}>
      <div className={styles.subnavbar}>
        <input
          type="text"
          className={styles.search}
          placeholder="Search plugin....."
        />
        <div className={styles.navItems}>
          <Link href="#">Marketing</Link>
          <Link href="#">Customer</Link>
          <Link href="#">Shipping</Link>
          <Link href="#">Store</Link>
        </div>
      </div>
      <div className={styles.plugins}>
        <Plugin />
        <Plugin />
      </div>
    </div>
  );
};

export default Plugins;
