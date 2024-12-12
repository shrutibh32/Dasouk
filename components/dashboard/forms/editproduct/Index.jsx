"use client";

import React, { useState, useEffect } from "react";
import "./Index.css"; // Import the CSS module

const Index = ({ initialData, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    sid: "",
    name: "",
    description: "",
    category_id: "",
    brand_id: "",
    price: 0,
    currency: "INR",
    stock_level: 0,
    image_url: "",
    additional_images: [],
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        sid: initialData.sid || "",
        name: initialData.name || "",
        description: initialData.description || "",
        category_id: initialData.category_id || "",
        brand_id: initialData.brand_id || "",
        price: initialData.price || 0,
        currency: initialData.currency || "INR",
        stock_level: initialData.stock_level || 0,
        image_url: initialData.image_url || "",
        additional_images: initialData.additional_images || [],
      });
    }
  }, [initialData]);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = JSON.stringify({
      _id: initialData._id,
      sid: formData.sid,
      name: formData.name,
      description: formData.description,
      category_id: formData.category_id,
      brand_id: formData.brand_id,
      price: formData.price,
      currency: formData.currency,
      stock_level: formData.stock_level,
      image_url: formData.image_url,
      additional_images: formData.additional_images,
    });

    try {
      const response = await fetch("/api/mongodb/products/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });

      if (response.ok) {
        const updatedProduct = await response.json();
        onUpdate(updatedProduct); // Notify parent component of the update
      } else {
        alert("Error updating product");
      }
    } catch (e) {
      alert("Error updating product: " + e.message);
    }
  };

  return (
    <div className="modal__container" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">Edit Product</h2>

        <form className="form" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="sid">Shop ID</label>
            <input
              id="sid"
              className="input"
              type="text"
              value={formData.sid}
              onChange={(e) => handleChange("sid", e.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="name">Product Name</label>
            <input
              id="name"
              className="input"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="input"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="category_id">Category ID</label>
            <input
              id="category_id"
              className="input"
              type="text"
              value={formData.category_id}
              onChange={(e) => handleChange("category_id", e.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="brand_id">Brand ID</label>
            <input
              id="brand_id"
              className="input"
              type="text"
              value={formData.brand_id}
              onChange={(e) => handleChange("brand_id", e.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              className="input"
              type="number"
              value={formData.price}
              onChange={(e) => handleChange("price", e.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="currency">Currency</label>
            <input
              id="currency"
              className="input"
              type="text"
              value={formData.currency}
              onChange={(e) => handleChange("currency", e.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="stock_level">Stock Level</label>
            <input
              id="stock_level"
              className="input"
              type="number"
              value={formData.stock_level}
              onChange={(e) => handleChange("stock_level", e.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="image_url">Image URL</label>
            <input
              id="image_url"
              className="input"
              type="text"
              value={formData.image_url}
              onChange={(e) => handleChange("image_url", e.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="additional_images">Additional Images</label>
            <textarea
              id="additional_images"
              className="input"
              value={formData.additional_images.join(", ")}
              onChange={(e) =>
                handleChange(
                  "additional_images",
                  e.target.value.split(",").map((url) => url.trim())
                )
              }
            />
          </div>

          <div className="submitGroup">
            <button type="submit" className="submit">
              Update
            </button>
            <span className="padding"></span>
            <button type="button" className="submit" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
