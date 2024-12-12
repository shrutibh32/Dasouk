import ProdForm from "@/components/dashboard/forms/addproduct/Index";
import React from "react";


const ProfilePage = async ({ params }) => {
  const { sid } = params;

  return <>
    <ProdForm shopid={sid}></ProdForm>
  </>;
};

export default ProfilePage;
