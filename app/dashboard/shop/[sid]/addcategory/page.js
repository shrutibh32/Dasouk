import AddCategoryForm from "@/components/dashboard/forms/addcategory/Index";
import React from "react";


const ProfilePage = async ({ params }) => {
  const { sid } = params;

  return <>
    <AddCategoryForm shopid={sid}></AddCategoryForm>
  </>;
};

export default ProfilePage;
