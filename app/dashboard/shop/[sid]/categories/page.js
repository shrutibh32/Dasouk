import CategoryInformation from "@/components/dashboard/categories/CategoryInformation";
import React from "react";


const ProfilePage = async ({ params }) => {
  const { sid } = params;

  return <>
    <CategoryInformation shopid={sid}></CategoryInformation>
  </>;
};

export default ProfilePage;
