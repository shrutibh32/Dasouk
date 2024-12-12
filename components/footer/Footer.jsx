"use client";
import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../public/svg/footer/Logo";
import SendArrow from "@/public/svg/footer/SendArrow";
import { usePathname } from "next/navigation";
import Shop from "@/public/svg/contact-us/Shop";
import Phone from "@/public/svg/contact-us/Phone";
import Email from "@/public/svg/contact-us/Email";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/auth") {
    return;
  }

  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.newsletter}>
          <Logo />
          <h2>Subscribe</h2>
          <form className={styles.newsletterForm} action="#" method="POST">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <div className={styles.sendIcon}>
              <button type="submit">
                <SendArrow />
              </button>
            </div>
          </form>
        </div>
        <div className={styles.support}>
          <h2>Support</h2>
          <ul>
            <li>
              <Shop color={"#ffffff"} />
              <p>Plot 183, 4th cross Azam Nagar, Belgaum - 590010</p>
            </li>
            <li>
              <Phone color={"#ffffff"} />
              <p>+91 951 308 1525</p>
            </li>
            <li>
              <Email color={"#ffffff"} />
              <p>indiadasouk@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className={styles.account}>
          <h2>Account</h2>
          <ul>
            <li>
              <Link href={"/dashboard/profile"}>Profile</Link>
            </li>
            <li>
              <Link href={"/dashboard/billing"}>Billing</Link>
            </li>
            <li>
              <Link href={"/dashboard/shops"}>Shop</Link>
            </li>
            <li>
              <Link href={"/dashboard/plugin"}>Plugin</Link>
            </li>
          </ul>
        </div>
        <div className={styles.quickLinks}>
          <h2>Quick Links</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>© Copyright 2024. All right reserved.</p>
    </footer>
  );
};

export default Footer;
