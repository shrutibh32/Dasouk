"use client";
import React, { useEffect, useState } from "react";
import "./Index.css";

const Index = (props) => {
  const [formData, setFormData] = useState({
    bannerTitle: props.customize.shop.bannerTitle,
    bannerSubTitle: props.customize.shop.bannerSubTitle,
    bannerDescription: props.customize.shop.bannerDescription,
    bannerImage: props.customize.shop.bannerImage,
    showCategories: props.customize.shop.showCategories,
    showTopProducts: props.customize.shop.showTopProducts,
    showSale: props.customize.shop.showSale,
    showBestSellers: props.customize.shop.showBestSellers,
    sale: props.customize.shop.sale,
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);

    let data = await JSON.stringify({
      _id: props.customize._id,
      sid: props.shopid,
      shop: formData,
      brand: props.customize.brand,
      contactUs: props.customize.contactUs,
    });

    try {
      const res = await fetch("/api/mongodb/customize/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      console.log(res);
      // Refresh the page or provide feedback
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="form-container">
      <h1>SHOP</h1>
      <form className="form" onSubmit={handleSubmit}>
        {/* Banner Title Input */}
        <div className="inputGroup">
          <label htmlFor="bannerTitle">Banner Title</label>
          <input
            id="bannerTitle"
            type="text"
            value={formData.bannerTitle}
            onChange={(e) => handleChange("bannerTitle", e.target.value)}
            placeholder={props.customize.shop.bannerTitle}
            className="input"
          />
        </div>

        {/* Banner Subtitle Input */}
        <div className="inputGroup">
          <label htmlFor="bannerSubTitle">Banner Subtitle</label>
          <input
            id="bannerSubTitle"
            type="text"
            value={formData.bannerSubTitle}
            onChange={(e) => handleChange("bannerSubTitle", e.target.value)}
            placeholder="Enter Banner Subtitle"
            className="input"
          />
        </div>

        {/* Banner Description Input */}
        <div className="inputGroup">
          <label htmlFor="bannerDescription">Banner Description</label>
          <textarea
            id="bannerDescription"
            value={formData.bannerDescription}
            onChange={(e) => handleChange("bannerDescription", e.target.value)}
            placeholder={props.customize.shop.bannerDescription}
            rows="4"
            className="input"
          />
        </div>

        {/* Banner Image Input */}
        <div className="inputGroup">
          <label htmlFor="bannerImage">Banner Image</label>
          <input
            id="bannerImage"
            type="text"
            value={formData.bannerImage}
            onChange={(e) => handleChange("bannerImage", e.target.value)}
            placeholder="Image URL"
            className="input"
          />
        </div>

        {/* Show Categories Checkbox */}
        <div className="inputGroup">
          <label>Show Options</label>
          <div className="checkbox-group">
            <div>
              <input
                type="checkbox"
                id="showCategories"
                name="showCategories"
                checked={formData.showCategories || false}
                onChange={(e) =>
                  handleChange("showCategories", e.target.checked)
                }
              />
              <label htmlFor="showCategories">Show Categories</label>
            </div>

            {/* Show Top Products Checkbox */}
            <div>
              <input
                type="checkbox"
                id="showTopProducts"
                name="showTopProducts"
                checked={formData.showTopProducts || false}
                onChange={(e) =>
                  handleChange("showTopProducts", e.target.checked)
                }
              />
              <label htmlFor="showTopProducts">Show Top Products</label>
            </div>

            {/* Show Sale Banner Checkbox */}
            <div>
              <input
                type="checkbox"
                id="showSale"
                name="showSale"
                checked={formData.showSale || false}
                onChange={(e) => handleChange("showSale", e.target.checked)}
              />
              <label htmlFor="showSale">Show Sale Banner</label>
            </div>

            {/* Show Best Sellers Checkbox */}
            <div>
              <input
                type="checkbox"
                id="showBestSellers"
                name="showBestSellers"
                checked={formData.showBestSellers || false}
                onChange={(e) =>
                  handleChange("showBestSellers", e.target.checked)
                }
              />
              <label htmlFor="showBestSellers">Show Best Sellers</label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="submitGroup">
          <button type="submit" className="submit">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Index;
