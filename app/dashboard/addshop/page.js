import Profile from "@/components/dashboard/profile/Index";
import AddShopForm from "@/components/dashboard/forms/addshop/Index"
import React from "react";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions)
  return <AddShopForm userid={session.user.id}></AddShopForm>;
};

export default ProfilePage;
