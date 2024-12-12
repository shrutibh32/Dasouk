import C1 from "@/components/dashboard/forms/customization/c1/Index";
import C2 from "@/components/dashboard/forms/customization/c2/Index";
import C3 from "@/components/dashboard/forms/customization/c3/Index";
import C4 from "@/components/dashboard/forms/customization/c4/Index";
import React from "react";

const getCustom = async (id) => {
  try {
      
    const res = await fetch("http://localhost:3000/api/mongodb/customize/shop/"+id, {
      cache: "no-store",method: "GET",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }
    
    console.log(res)
    return await res.json();
  } catch (error) {
    console.log("Error loading Shops: ", error);
    return JSON({});
  }
};

const ProfilePage = async ({ params }) => {
  const { sid } = params;
  let { item } = await getCustom(sid)

  console.log("HGAJDBWBDFBUWBFIHFHJWBFHWBHBFBFIBWABFHJKBHJFWHJFHJHJAWEVFVHHJAVWHJVWHJKVJHAVWHJFVHJVAWHJFVHJWAVHJFVJH", item[0])
  return <>
    <C1 customize={item[0]}/>
    <br/>
    <C2 customize={item[0]}/>
    <br/>
    <C3 customize={item[0]}/>
    <br/>
    <C4 customize={item[0]}/>
  </>;
};

export default ProfilePage;
