"use client";

import React, { useState, useEffect } from "react";
import "./Index.css"; // Make sure you have the correct CSS file for styling

const Index = ({ initialData, onClose, onUpdate }) => {
  const [brandName, setBrandName] = useState("");

  // Set the initial brand name when the component mounts or initialData changes
  useEffect(() => {
    if (initialData) {
      setBrandName(initialData.brand_name || "");
    }
  }, [initialData]);

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for necessary data
    if (!initialData || !initialData._id || !initialData.sid) {
      alert("Error: Required data is not available.");
      return;
    }

    // Create the payload including both _id and sid
    const payload = JSON.stringify({
      _id: initialData._id,
      sid: initialData.sid, // Ensure sid is included in the payload
      brand_name: brandName,
    });

    try {
      // Make the PUT request with the updated payload
      const response = await fetch("/api/mongodb/brand", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });

      if (response.ok) {
        const updatedBrand = await response.json();
        onUpdate(updatedBrand); // Notify parent component of the update
        onClose(); // Close the modal after successful update
      } else {
        alert("Error updating brand");
      }
    } catch (e) {
      alert("Error updating brand: " + e.message);
    }
  };

  return (
    <div className="modal__container" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">Edit Brand</h2>

        <form className="form" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="brand_name">Brand Name</label>
            <input
              id="brand_name"
              className="input"
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
          </div>

          <div className="submitGroup">
            <button type="submit" className="submit">
              Update
            </button>
            <span className="padding"></span>
            {/* Ensure this button calls the onClose function */}
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
