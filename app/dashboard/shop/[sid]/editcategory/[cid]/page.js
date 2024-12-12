import EditCategoryForm from "@/components/dashboard/forms/editcategory/Index";
import React from "react";


const ProfilePage = async ({ params }) => {
  const { sid, cid } = params;

  return <>
    <EditCategoryForm shopid={sid} cid={cid}></EditCategoryForm>
  </>;
};

export default ProfilePage;
