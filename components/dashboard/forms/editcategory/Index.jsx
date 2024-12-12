"use client"; // Ensures that the component is a Client Component

import React, { useState, useEffect } from "react";
import "./Index.css"; // Ensure your CSS file is correctly linked

const Index = ({ initialData, onClose, onUpdate }) => {
  const [categoryName, setCategoryName] = useState("");

  // Set the initial category name when the component mounts or initialData changes
  useEffect(() => {
    if (initialData) {
      setCategoryName(initialData.category_name || "");
    }
  }, [initialData]);

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!initialData || !initialData._id || !initialData.sid) {
      alert("Error: Category data is not available.");
      return;
    }

    const payload = JSON.stringify({
      _id: initialData._id,
      sid: initialData.sid, // Include both _id and sid
      category_name: categoryName,
    });

    try {
      const response = await fetch("/api/mongodb/category", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });

      if (response.ok) {
        const updatedCategory = await response.json();
        onUpdate(updatedCategory); // Notify the parent component of the update
        onClose(); // Close the modal after a successful update
      } else {
        alert("Error updating category");
      }
    } catch (e) {
      alert("Error updating category: " + e.message);
    }
  };

  return (
    <div className="modal__container" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">Edit Category</h2>

        <form className="form" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="category_name">Category Name</label>
            <input
              id="category_name"
              className="input"
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter Category Name"
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
