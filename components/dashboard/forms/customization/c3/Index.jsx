"use client";
import React, { useEffect, useState } from "react";
import Form from "@/components/ui/dashboard/form/Form";

const Index = (props) => {
  const [formData, setFormData] = useState({
    mission: props.customize.brand.mission,
    logo: props.customize.brand.logo,
    primaryColor: props.customize.brand.primaryColor,
    secondaryColor: props.customize.brand.secondaryColor,
    tertiaryColor: props.customize.brand.tertiaryColor,
    textColor: props.customize.brand.textColor,
  });

  const handleChange = (name, value) => {
    // if (name === "images") {
    //   setFormData({ ...formData, [name]: value });
    // } else {
    //   setFormData({ ...formData, [name]: value });
    // }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("HAHAHAHHAHAHAHAHAHAHAHAH", formData);

    let a = await JSON.stringify({
      _id: props.customize._id,
      sid: props.shopid,
      shop: props.customize.shop,
      brand: formData,
      contactUs: props.customize.contactUs,
    });

    alert(a);
    // console.log(props.customize)

    try {
      const res = await fetch("/api/mongodb/customize/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: a,
      });
      console.log(res);
      // router.refresh();
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Form
      formData={formData}
      formTitle={"BRAND"}
      size="half"
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      inputAttributes={{
        mission: {
          type: "textarea",
          label: "Brand Mission",
          placeholder: "Enter your brand mission statement",
          size: "full",
          rows: 4, // Adjust rows as needed for your content
        },
        logo: {
          type: "text",
          label: "Brand Logo",
          placeholder: "Upload your brand logo",
          size: "full",
        },
        primaryColor: {
          type: "color",
          label: "Primary Color",
          placeholder: "Select Primary Color",
          size: "half",
        },
        secondaryColor: {
          type: "color",
          label: "Secondary Color",
          placeholder: "Select Secondary Color",
          size: "half",
        },
        tertiaryColor: {
          type: "color",
          label: "Tertiary Color",
          placeholder: "Select Tertiary Color",
          size: "half",
        },
        textColor: {
          type: "color",
          label: "Text Color",
          placeholder: "Select Text Color",
          size: "half",
        },
      }}
    />
  );
};

export default Index;
