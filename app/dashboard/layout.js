import Layout from "@/components/ui/dashboard/Layout";
import React from "react";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const getShops = async (uid) => {
  try {
      
    const res = await fetch("http://localhost:3000/api/mongodb/shops/user/"+uid, {
      cache: "no-store",method: "GET",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }
    
    console.log(res)
    return await res.json();
  } catch (error) {
    console.log("Error loading Shops: ", error);
  }
};

const layout = async ({ children }) => {
  const session = await getServerSession(authOptions)
  const {shops} = await getShops(session.user.id)

  return <Layout  shops={shops} user={session.user}>{children}</Layout>;
};

export default layout;
