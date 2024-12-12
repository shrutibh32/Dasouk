import React from "react";
import styles from "./BillingInformation.module.css";
import Prod from "./Prod";

const getCategories = async (id) => {
  try {
    const res = await fetch(
      "http://localhost:3000/api/mongodb/category/categorylist/" + id,
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

const CategoryInformation = async (promp) => {
  const { categories } = await getCategories(promp.shopid);
  console.log(
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    categories
  );

  return (
    <div className={styles.billingInformation}>
      <h2>Categories</h2>
      <a
        href={"/dashboard/shop/" + promp.shopid + "/addcategory/"}
        className={styles.loginBtn}
      >
        ADD Category
      </a>
      {categories.map((prod) => (
        // eslint-disable-next-line react/jsx-key
        <Prod product={prod} />
      ))}
    </div>
  );
};

export default CategoryInformation;
