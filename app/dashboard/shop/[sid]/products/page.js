import ProductsInformation from "@/components/dashboard/products/ProductsInformation";
import React from "react";


const ProfilePage = async ({ params }) => {
  const { sid } = params;

  return <>
    <ProductsInformation shopid={sid}></ProductsInformation>
  </>;
};

export default ProfilePage;
