import React from "react";
import styles from "./GreetingCard.module.css";
import Link from "next/link";
import Logo from "@/public/svg/dashboard/navbar/Logo";
import { FaRightLong } from "react-icons/fa6";

const GreetingCard = () => {
  return (
    <div className={styles.info}>
      <div className={styles.content}>
        <div className={styles.username}>
          <p>Welcome back</p>
          <h2>RAHIL</h2>
        </div>
        <div className={styles.profileButton}>
          <Link href="/dashboard/profile">
            Profile <FaRightLong />
          </Link>
        </div>
      </div>
      <div className={styles.companyLogo}>
        <Logo />
      </div>
    </div>
  );
};

export default GreetingCard;
