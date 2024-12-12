import React from "react";
import styles from "./BillingInformation.module.css";
import Prod from "./Prod";

const getProducts = async (id) => {
  try {
      
    const res = await fetch("http://localhost:3000/api/mongodb/products/productlist/"+id, {
      cache: "no-store",method: "GET",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }
    
    console.log(res)
    return await res.json();
  } catch (error) {
    console.log("Error loading Shops: ", error);
  }
};

const ProductsInformation = async (promp) => {
  const {products} = await getProducts(promp.shopid)
  console.log("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",products)

  return (
    <div className={styles.billingInformation}>
      <h2>Products</h2>
      <a href={"/dashboard/shop/"+promp.shopid+"/addproduct/"} className={styles.loginBtn}>
          ADD Product
      </a>
      {products.map((prod) => (
      // eslint-disable-next-line react/jsx-key
      <Prod product={prod}/>
      ))}
    </div>
  );
};

export default ProductsInformation;
