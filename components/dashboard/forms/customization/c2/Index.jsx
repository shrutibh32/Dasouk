"use client";
import React, { useState } from "react";
import "./Index.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Index = (props) => {
  const placeholderImage = "https://via.placeholder.com/150"; // Placeholder image URL

  const [formData, setFormData] = useState({
    title: props.customize.shop.sale.title,
    description: props.customize.shop.sale.description,
    image: "",
  });

  const [brandData, setBrandData] = useState({
    mission: props.customize.brand.mission || "",
    logo: "",
    primaryColor: props.customize.brand.primaryColor || "#ffffff",
    secondaryColor: props.customize.brand.secondaryColor || "#ffffff",
    tertiaryColor: props.customize.brand.tertiaryColor || "#ffffff",
    textColor: props.customize.brand.textColor || "#000000",
    favicon: "",
  });

  const [imagePreviews, setImagePreviews] = useState({
    saleImagePreview: placeholderImage,
    logoPreview: placeholderImage,
    faviconPreview: placeholderImage,
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleBrandChange = (e) => {
    const { name, value } = e.target;
    setBrandData({ ...brandData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const files = e.target.files;

    if (files.length > 0) {
      const file = files[0];
      if (file) {
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
          const result = event.target.result;

          if (name === "image") {
            setFormData((prevState) => ({ ...prevState, image: result }));
            setImagePreviews((prevPreviews) => ({
              ...prevPreviews,
              saleImagePreview: result,
            }));
          } else {
            setBrandData((prevState) => ({ ...prevState, [name]: result }));
            setImagePreviews((prevPreviews) => ({
              ...prevPreviews,
              [`${name}Preview`]: result,
            }));
          }
        };
        fileReader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
    console.log("Submitting brand data:", brandData);

    let data = await JSON.stringify({
      _id: props.customize._id,
      sid: props.shopid,
      shop: {
        bannerTitle: props.customize.shop.bannerTitle,
        bannerSubTitle: props.customize.shop.bannerSubTitle,
        bannerDescription: props.customize.shop.bannerDescription,
        bannerImage: props.customize.shop.bannerImage,
        showCategories: props.customize.shop.showCategories,
        showTopProducts: props.customize.shop.showTopProducts,
        showSale: props.customize.shop.showSale,
        showBestSellers: props.customize.shop.showBestSellers,
        sale: formData,
      },
      brand: brandData,
      contactUs: props.customize.contactUs,
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
      <h1>Brand and Sale Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Sale Section */}
        <div className="inputGroup">
          <label htmlFor="title">Sale Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Sale Title"
            value={formData.title}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="description">Sale Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter Sale Description"
            rows="4"
            value={formData.description}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="image">Sale Banner Image</label>
          <div className="image-upload-container">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
            <PhotoProvider>
              <PhotoView src={imagePreviews.saleImagePreview}>
                <img
                  src={imagePreviews.saleImagePreview}
                  alt="Sale Banner Preview"
                  className="image-preview"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </div>

        {/* Brand Section */}
        <div className="inputGroup">
          <label htmlFor="mission">Mission</label>
          <textarea
            id="mission"
            name="mission"
            placeholder="Enter the brand's mission"
            value={brandData.mission}
            onChange={handleBrandChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="logo">Logo</label>
          <div className="image-upload-container">
            <input
              type="file"
              id="logo"
              name="logo"
              accept="image/*"
              onChange={handleFileChange}
            />
            <PhotoProvider>
              <PhotoView src={imagePreviews.logoPreview}>
                <img
                  src={imagePreviews.logoPreview}
                  alt="Logo Preview"
                  className="image-preview"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </div>
        {/* Color Picker Section */}
        <div className="colorPickerContainer">
          <div className="colorPickerWrapper padding1">
            <label htmlFor="primaryColor">Primary Color</label>
            <input
              type="color"
              id="primaryColor"
              name="primaryColor"
              value={brandData.primaryColor}
              onChange={handleBrandChange}
            />
          </div>

          <div className="colorPickerWrapper">
            <label htmlFor="secondaryColor">Secondary Color</label>
            <input
              type="color"
              id="secondaryColor"
              name="secondaryColor"
              value={brandData.secondaryColor}
              onChange={handleBrandChange}
            />
          </div>

          <div className="colorPickerWrapper padding2">
            <label htmlFor="tertiaryColor">Tertiary Color</label>
            <input
              type="color"
              id="tertiaryColor"
              name="tertiaryColor"
              value={brandData.tertiaryColor}
              onChange={handleBrandChange}
            />
          </div>

          <div className="colorPickerWrapper padding3">
            <label htmlFor="textColor">Text Color</label>
            <input
              type="color"
              id="textColor"
              name="textColor"
              value={brandData.textColor}
              onChange={handleBrandChange}
            />
          </div>
        </div>

        <div className="inputGroup">
          <label htmlFor="favicon">Favicon</label>
          <div className="image-upload-container">
            <input
              type="file"
              id="favicon"
              name="favicon"
              accept="image/*"
              onChange={handleFileChange}
            />
            <PhotoProvider>
              <PhotoView src={imagePreviews.faviconPreview}>
                <img
                  src={imagePreviews.faviconPreview}
                  alt="Favicon Preview"
                  className="image-preview"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
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
