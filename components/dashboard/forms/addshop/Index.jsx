"use client";
import React, { useEffect, useState } from "react";
import Form from "@/components/ui/dashboard/form/Form"; // Assuming this is the correct path for the new Form component
import { useRouter } from "next/navigation";

const Index = (props) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    shopname: "",
    shopport: "",
    website_url: "",
    shopdescription: "",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("HAHAHAHHAHAHAHAHAHAHAHAH", formData);

    let a = await JSON.stringify({
      uid: props.userid,
      shopname: formData.shopname,
      shopport: formData.shopport,
      website_url: formData.website_url,
      shopdescription: formData.shopdescription,
    });

    alert(a);

    try {
      const res = await fetch("/api/mongodb/shops/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: a,
      });

      await res.json().then(async (data) => {
        await alert(data.result._id);

        let a1 = await JSON.stringify({
          sid: data.result._id,
          shop: {
            bannerTitle: "String",
            bannerSubTitle: "String",
            bannerDescription: "String",
            bannerImage: "String",
            showCategories: false,
            showTopProducts: false,
            showSale: false,
            showBestSellers: false,
            sale: {
              title: "String",
              description: "String",
              image: "String",
            },
          },
          brand: {
            mission: "String",
            logo: "String",
            primaryColor: "String",
            secondaryColor: "String",
            tertiaryColor: "String",
            textColor: "String",
          },
          contactUs: {
            showGoogleMap: false,
            locationGoogle: "String",
            locationText: "String",
            phoneNo: "String",
            email: "String",
          },
        });

        alert(a1.sid);

        try {
          const res1 = await fetch("/api/mongodb/customize/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: a1,
          });

          alert("DONE Database!!!!!!!!!!!");

          let a2 = await JSON.stringify({
            shopid: data.result._id,
            websitename: "",
            portno: data.result.shopport,
          });

          alert(a2.shopid);
          console.log(a2);

          try {
            const res3 = await fetch("/api/shelljs/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: a2,
            });

            alert("DONE http://127.0.0.1:3020/createSite/ !!!!!!!!!!!");

            router.refresh();
          } catch (e) {
            alert(e);
            console.log(e);
          }

          alert("DONE FINISHED!!!!!!!!!!!");

          router.refresh();
        } catch (e) {
          alert(e);
        }
      });
      router.refresh();
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Form
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Index;

