"use client";
import React, { useState } from "react";
import "./Index.css";

const Index = (props) => {
  // Initialize state with empty/default values
  const [formData, setFormData] = useState({
    showGoogleMap: false, // Default to false
    locationGoogle: "", // Empty by default
    locationText: "", // Empty by default
    phoneNo: "", // Empty by default
    email: "", // Empty by default
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);

    const data = JSON.stringify({
      _id: props.customize._id,
      sid: props.shopid,
      shop: props.customize.shop,
      brand: props.customize.brand,
      contactUs: formData,
    });

    alert(data);

    try {
      const res = await fetch("/api/mongodb/customize/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      console.log(res);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="form-container">
      <h1>Contact Us Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Google Map Display Checkbox */}
        <div className="inputGroup">
          <label htmlFor="showGoogleMap">Show Google Map</label>
          <input
            type="checkbox"
            id="showGoogleMap"
            name="showGoogleMap"
            checked={formData.showGoogleMap}
            onChange={handleChange}
          />
        </div>

        {/* Google Maps Embed Code */}
        <div className="inputGroup">
          <label htmlFor="locationGoogle">
            Google Maps Embed Code (Optional)
          </label>
          <textarea
            id="locationGoogle"
            name="locationGoogle"
            placeholder="Paste the embed code from Google Maps"
            rows="6"
            value={formData.locationGoogle}
            onChange={handleChange}
          />
        </div>

        {/* Contact Address */}
        <div className="inputGroup">
          <label htmlFor="locationText">Contact Address</label>
          <textarea
            id="locationText"
            name="locationText"
            placeholder="Enter your contact address"
            value={formData.locationText}
            onChange={handleChange}
          />
        </div>

        {/* Phone Number */}
        <div className="inputGroup">
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            type="tel"
            id="phoneNo"
            name="phoneNo"
            placeholder="Enter your phone number"
            value={formData.phoneNo}
            onChange={handleChange}
            pattern="[0-9]*" // Ensures only numbers are allowed
          />
        </div>

        {/* Email Address */}
        <div className="inputGroup">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Index;
