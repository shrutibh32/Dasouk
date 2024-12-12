import React from "react";
import styles from "./Shop.module.css";
import Image from "next/image";
import image from "@/public/images/profile.png";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <div className={styles.shopName}>
        <Image src={image} alt="icon" width={40} height={40} />
        <p>DaSouk</p>
      </div>
      <p>₹ 50,000</p>
      <p>20,000</p>
      <p>4.8</p>
    </div>
  );
};

export default Shop;
