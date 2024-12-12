import EditBrandForm from "@/components/dashboard/forms/editbrand/Index";
import React from "react";


const ProfilePage = async ({ params }) => {
  const { sid } = params;

  return <>
    <EditBrandForm shopid={sid}></EditBrandForm>
  </>;
};

export default ProfilePage;
