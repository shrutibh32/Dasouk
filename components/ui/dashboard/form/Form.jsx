import React, { useState } from "react";
import "./Form.css";

const Form = ({ formData, handleChange, handleSubmit }) => {
  if (!formData) return null;

  const [tooltipVisible, setTooltipVisible] = useState({
    range1: false,
    range3: false,
  });



  return (
    <div className="form-container">
      <h1>Shop Form</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="shopname">Shop Name</label>
          <input
            id="shopname"
            type="text"
            value={formData.shopname || ""}
            onChange={(e) => handleChange("shopname", e.target.value)}
            className="input"
            placeholder="Enter shop name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="shopport">Shop Port</label>
          <input
            id="shopport"
            type="number"
            value={formData.shopport || ""}
            onChange={(e) => handleChange("shopport", e.target.value)}
            className="input"
            placeholder="Enter shop port"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="website_url">Website URL</label>
          <input
            id="website_url"
            type="text"
            value={formData.website_url || ""}
            onChange={(e) => handleChange("website_url", e.target.value)}
            className="input"
            placeholder="Enter website URL"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="shopdescription">Shop Description</label>
          <textarea
            id="shopdescription"
            value={formData.shopdescription || ""}
            onChange={(e) => handleChange("shopdescription", e.target.value)}
            className="input"
            placeholder="Enter shop description"
          ></textarea>
        </div>

        <div className="submitGroup">
          <button type="submit" className="submit">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
