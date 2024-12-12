import BrandInformation from "@/components/dashboard/brands/BrandInformation";
import React from "react";


const ProfilePage = async ({ params }) => {
  const { sid } = params;

  return <>
    <BrandInformation shopid={sid}></BrandInformation>
  </>;
};

export default ProfilePage;
