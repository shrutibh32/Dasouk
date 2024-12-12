import React from "react";
import Link from "next/link";
import styles from "./ShopNavList.module.css";
import { usePathname } from "next/navigation";

const ShopNavList = ({ shopId }) => {
  const pathname = usePathname();

  return (
    <ul className={styles.shopNavList}>
      <Link
        href={`/dashboard/shop/${shopId}/products`}
        className={styles.shopLinks}
      >
        <li
          className={
            pathname === `/dashboard/shop/${shopId}/products` ? styles.active : null
          }
        >
          products
        </li>
      </Link>
      <Link
        href={`/dashboard/shop/${shopId}/brands`}
        className={styles.shopLinks}
      >
        <li
          className={
            pathname === `/dashboard/shop/${shopId}/brands` ? styles.active : null
          }
        >
          brands
        </li>
      </Link>
      <Link
        href={`/dashboard/shop/${shopId}/categories`}
        className={styles.shopLinks}
      >
        <li
          className={
            pathname === `/dashboard/shop/${shopId}/categories` ? styles.active : null
          }
        >
          categories
        </li>
      </Link>
      <Link
        href={`/dashboard/shop/${shopId}/customization`}
        className={styles.shopLinks}
      >
        <li
          className={
            pathname === `/dashboard/shop/${shopId}/customization` ? styles.active : null
          }
        >
          Customization
        </li>
      </Link>
      <Link
        href={`/dashboard/shop/${shopId}/orders`}
        className={styles.shopLinks}
      >
        <li
          className={
            pathname === `/dashboard/shop/${shopId}/orders` ? styles.active : null
          }
        >
          orders
        </li>
      </Link>
    </ul>
  );
};

export default ShopNavList;
