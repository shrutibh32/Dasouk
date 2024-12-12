"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./Index.css";

const Index = (props) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    sid: props.shopid || "",
    category_name: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const requestBody = JSON.stringify({
      sid: props.shopid,
      category_name: formData.category_name,
    });

    try {
      const res = await fetch("/api/mongodb/category/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });

      if (res.ok) {
        setModalMessage("Category added successfully!");
        setIsModalOpen(true);
        setTimeout(() => {
          setIsModalOpen(false);
          router.replace("/dashboard/shop/" + props.shopid + "/categories/");
        }, 3000);
      } else {
        throw new Error("Failed to add category");
      }
    } catch (e) {
      setModalMessage("Error: " + e.message);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="form-container">
      <h1>ADD CATEGORY</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="sid">SID</label>
          <input
            id="sid"
            type="text"
            value={formData.sid || ""}
            onChange={(e) => handleChange("sid", e.target.value)}
            className="input"
            placeholder="Enter SID"
            disabled
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="category_name">Category Name</label>
          <input
            id="category_name"
            type="text"
            value={formData.category_name || ""}
            onChange={(e) => handleChange("category_name", e.target.value)}
            className="input"
            placeholder="Enter Category Name"
          />
        </div>

        <div className="submitGroup">
          <button type="submit" className="submit">
            Submit Form
          </button>
        </div>
      </form>

      {isModalOpen && (
        <div className="modal__container" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal__title">Notification</h2>
            <div className="modal__details">
              <p>{modalMessage}</p>
            </div>
            <div className="button" onClick={closeModal}>
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
