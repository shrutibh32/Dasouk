"use client";
import React, { useEffect, useState } from "react";
import Form from "@/components/ui/dashboard/form/Form";

const Index = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    profile: "",
    phone: "",
    description: "",
    images: [],
    image: "",
  });

  const handleChange = (name, value) => {
    if (name === "images") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Form
      formData={formData}
      formTitle={"User Profile"}
      size="half"
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      inputAttributes={{
        profile: {
          type: "file",
          label: "Profile Photo",
          placeholder: "Upload your profile photo",
          size: "full",
        },
        username: {
          type: "text",
          label: "Username",
          placeholder: "Enter your username",
          size: "half",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "Enter your password",
          size: "half",
        },
        firstname: {
          type: "text",
          label: "First Name",
          placeholder: "Enter your first name",
          size: "half",
        },
        lastname: {
          type: "text",
          label: "Last Name",
          placeholder: "Enter your last name",
          size: "half",
        },
        email: {
          type: "email",
          label: "Email",
          placeholder: "Enter your email address",
          size: "half",
        },
        phone: {
          type: "tel",
          label: "Phone",
          placeholder: "Enter your phone number",
          size: "half",
        },
        description: {
          type: "textarea",
          label: "Description",
          placeholder: "Description",
          size: "full",
          rows: 6,
        },
        images: {
          type: "file",
          label: "Images",
          placeholder: "Upload multiple images",
          size: "full",
        },
        image: {
          type: "file",
          label: "Image",
          placeholder: "Upload single images",
          size: "full",
        },
      }}
    />
  );
};

export default Index;
