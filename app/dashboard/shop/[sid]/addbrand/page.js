import AddBrandForm from "@/components/dashboard/forms/addbrand/Index";
import React from "react";


const ProfilePage = async ({ params }) => {
  const { sid } = params;

  return <>
    <AddBrandForm shopid={sid}></AddBrandForm>
  </>;
};

export default ProfilePage;
