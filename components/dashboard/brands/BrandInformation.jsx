import React from "react";
import styles from "./BillingInformation.module.css";
import Prod from "./Prod";

const getBrands = async (id) => {
  try {
    const res = await fetch(
      "http://localhost:3000/api/mongodb/brand/brandlist/" + id,
      {
        cache: "no-store",
        method: "GET",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }

    console.log(res);
    return await res.json();
  } catch (error) {
    console.log("Error loading Shops: ", error);
  }
};

const BrandInformation = async (promp) => {
  const { brands } = await getBrands(promp.shopid);
  console.log(
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    brands
  );

  return (
    <div className={styles.billingInformation}>
      <h2>Brands</h2>
      <a
        href={"/dashboard/shop/65e1ac3131917db0e641f262/addbrand/"}
        className={styles.loginBtn}
      >
        ADD Brand
      </a>
      {brands.map((prod) => (
        // eslint-disable-next-line react/jsx-key
        <Prod product={prod} />
      ))}
    </div>
  );
};

export default BrandInformation;
