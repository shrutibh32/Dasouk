import Statusbar from "@/components/dashboard/dashboard/statusbar/Statusbar";
import Users from "@/components/dashboard/dashboard/users/Index";
import Shop from "@/components/dashboard/dashboard/shop/Index";
import React from "react";

const page = () => {
  return (
    <>
      <Statusbar />
      <Users />
      <Shop />
    </>
  );
};

export default page;
