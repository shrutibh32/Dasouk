"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./Index.css"; // Import the regular CSS file

const Index = (props) => {
  const router = useRouter();


  const [formData, setFormData] = useState({
    sid: props.shopid || "",
    name: "",
    description: "",
    category_id: "", // Category ID will be dynamically selected
    brand_id: "", // Brand ID will be dynamically selected
    price: 0,
    currency: "INR",
    stock_level: 0,
    image_url: null,
    additional_images: [],
  });

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Fetch categories and brands when component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `/api/mongodb/categories?shopId=${props.shopid}`
        );
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        setCategories(data.categories); // Ensure categories are stored correctly
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    if (props.shopid) {
      fetchCategories();
    }
  }, [props.shopid]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch(`/api/mongodb/brands?shopId=${props.shopid}`);
        if (!res.ok) throw new Error("Failed to fetch brands");
        const data = await res.json();
        setBrands(data.brands); // Ensure brands are stored correctly
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    if (props.shopid) {
      fetchBrands();
    }
  }, [props.shopid]);

  const handleChange = (name, value) => {
    console.log(name,value);
    if (name == "image_url")
      {
        const imageURL = URL.createObjectURL(value);
        setFormData({ ...formData, [name]: imageURL });
      }
      else {
        setFormData({ ...formData, [name]: value });
      }
    
  };
  const [file, setFile] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    console.log("Form Data:", formData);
<<<<<<< HEAD
  
    // Create FormData object for file upload
    const data = new FormData();
    data.append('file', file);
    data.append('sid', formData.sid);
  
    // Upload the file
    const result = await fetch('/api/fileupload/', {
      method: "POST",
      body: data,
    });
  
    // Check if the file upload was successful
    if (result.status === 200) {
      const uploadResponse = await result.json(); // Parse the response as JSON
  
      // Ensure the response contains the 'uploadedFilePath'
      if (uploadResponse.success) {
        const payload = JSON.stringify({
          sid: formData.sid,
          name: formData.name,
          description: formData.description,
          category_id: formData.category_id,
          brand_id: formData.brand_id,
          price: formData.price,
          currency: formData.currency,
          stock_level: formData.stock_level,
          image_url: uploadResponse.uploadedFilePath.substring(8), // Use the uploaded file path from the response
          additional_images: formData.additional_images,
        });
  
        try {
          const res = await fetch("/api/mongodb/products/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: payload,
          });
  
          // Redirect to the products page after successful submission
          router.replace("/dashboard/shop/" + props.shopid + "/products/");
        } catch (e) {
          alert(e);
        }
      } else {
        alert("File upload failed: " + uploadResponse.message);
      }
    } else {
      alert("File upload failed with status: " + result.status);
    }
  };
  
=======

    const payload = JSON.stringify(formData);

    try {
      const res = await fetch("/api/mongodb/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });

      setIsModalOpen(true); // Open the modal on successful submission
    } catch (e) {
      alert(e);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.replace("/dashboard/shop/" + props.shopid + "/products/");
  };

>>>>>>> b3212ba76537b4a4ce70a4bdce1d4852464558de
  return (
    <div className="form-container">
      <div className="formGroup">
        <h1>ADD PRODUCT</h1>
        <form className="form" onSubmit={handleSubmit}>
<<<<<<< HEAD
          {/* SID */}
=======
          {/* Form fields */}
>>>>>>> b3212ba76537b4a4ce70a4bdce1d4852464558de
          <div className="inputGroup">
            <label htmlFor="sid">Shop ID</label>
            <input
              id="sid"
              type="text"
              value={formData.sid || ""}
              onChange={(e) => handleChange("sid", e.target.value)}
              className="input"
              placeholder="Enter Shop ID"
<<<<<<< HEAD
            />
          </div>

          {/* Name */}
=======
              disabled // Since Shop ID is constant
            />
          </div>

>>>>>>> b3212ba76537b4a4ce70a4bdce1d4852464558de
          <div className="inputGroup">
            <label htmlFor="name">Product Name</label>
            <input
              id="name"
              type="text"
              value={formData.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
              className="input"
              placeholder="Enter Product Name"
            />
          </div>

<<<<<<< HEAD
          {/* Description */}
=======
>>>>>>> b3212ba76537b4a4ce70a4bdce1d4852464558de
          <div className="inputGroup">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={formData.description || ""}
              onChange={(e) => handleChange("description", e.target.value)}
              className="input"
              placeholder="Enter Description"
            />
          </div>

<<<<<<< HEAD
          {/* Category ID */}
          <div className="inputGroup">
            <label htmlFor="category_id">Category ID</label>
            <input
              id="category_id"
              type="text"
              value={formData.category_id || ""}
              onChange={(e) => handleChange("category_id", e.target.value)}
              className="input"
              placeholder="Enter Category ID"
            />
          </div>

          {/* Brand ID */}
          <div className="inputGroup">
            <label htmlFor="brand_id">Brand ID</label>
            <input
              id="brand_id"
              type="text"
              value={formData.brand_id || ""}
              onChange={(e) => handleChange("brand_id", e.target.value)}
              className="input"
              placeholder="Enter Brand ID"
            />
          </div>

          {/* Price */}
=======
          {/* Category Drop-Down */}
          <div className="inputGroup">
            <label htmlFor="category_id">Category</label>
            <select
              id="category_id"
              value={formData.category_id || ""}
              onChange={(e) => handleChange("category_id", e.target.value)}
              className="input"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Drop-Down */}
          <div className="inputGroup">
            <label htmlFor="brand_id">Brand</label>
            <select
              id="brand_id"
              value={formData.brand_id || ""}
              onChange={(e) => handleChange("brand_id", e.target.value)}
              className="input"
            >
              <option value="">Select Brand</option>
              {brands.map((brand) => (
                <option key={brand._id} value={brand._id}>
                  {brand.brand_name}
                </option>
              ))}
            </select>
          </div>

>>>>>>> b3212ba76537b4a4ce70a4bdce1d4852464558de
          <div className="inputGroup">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              value={formData.price || ""}
              onChange={(e) => handleChange("price", e.target.value)}
              className="input"
              placeholder="Enter Price"
            />
          </div>

<<<<<<< HEAD
          {/* Currency */}
=======
>>>>>>> b3212ba76537b4a4ce70a4bdce1d4852464558de
          <div className="inputGroup">
            <label htmlFor="currency">Currency</label>
            <input
              id="currency"
              type="text"
              value={formData.currency || ""}
              onChange={(e) => handleChange("currency", e.target.value)}
              className="input"
              placeholder="Enter Currency"
            />
          </div>

<<<<<<< HEAD
          {/* Stock Level */}
=======
>>>>>>> b3212ba76537b4a4ce70a4bdce1d4852464558de
          <div className="inputGroup">
            <label htmlFor="stock_level">Stock Level</label>
            <input
              id="stock_level"
              type="number"
              value={formData.stock_level || ""}
              onChange={(e) => handleChange("stock_level", e.target.value)}
              className="input"
              placeholder="Enter Stock Level"
            />
          </div>

<<<<<<< HEAD
          {/* Image URL */}
          <div className="inputGroup">
          <label htmlFor="image_url">Image URL</label>
            <input
              id="image_url"
            type="file"
            onChange={(e) => setFile(e.target.files?.[0])}
              className="input"
            placeholder="Enter Image URL"
            />
          </div>

          {/* Additional Images */}
=======
          <div className="inputGroup">
            <label htmlFor="image_url">Image URL</label>
            <input
              id="image_url"
              type="text"
              value={formData.image_url || ""}
              onChange={(e) => handleChange("image_url", e.target.value)}
              className="input"
              placeholder="Enter Image URL"
            />
          </div>

>>>>>>> b3212ba76537b4a4ce70a4bdce1d4852464558de
          <div className="inputGroup">
            <label htmlFor="additional_images">Additional Images</label>
            <textarea
              id="additional_images"
              value={formData.additional_images?.join(", ") || ""}
              onChange={(e) =>
                handleChange(
                  "additional_images",
                  e.target.value.split(",").map((url) => url.trim())
                )
              }
              className="input"
              placeholder="Enter Additional Image URLs (comma separated)"
            />
          </div>

          {/* Submit Button */}
          <div className="submitGroup">
            <button type="submit" className="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
<<<<<<< HEAD
=======

      {/* Modal Structure */}
      {isModalOpen && (
        <div className="modal__container">
          <div className="modal">
            <div className="modal__content">
              <h1 className="modal__title">Product Details</h1>
              <div className="modal__details">
                <p>
                  <strong>Shop ID:</strong> {formData.sid}
                </p>
                <p>
                  <strong>Product Name:</strong> {formData.name}
                </p>
                <p>
                  <strong>Description:</strong> {formData.description}
                </p>
                <p>
                  <strong>Category ID:</strong> {formData.category_id}
                </p>
                <p>
                  <strong>Brand ID:</strong> {formData.brand_id}
                </p>
                <p>
                  <strong>Price:</strong> {formData.price} {formData.currency}
                </p>
                <p>
                  <strong>Stock Level:</strong> {formData.stock_level}
                </p>
              </div>
              <div className="modal__image-container">
                <img
                  src={formData.image_url}
                  alt="Product"
                  className="modal__image"
                />
              </div>
              <button className="button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
>>>>>>> b3212ba76537b4a4ce70a4bdce1d4852464558de
    </div>
  );
};

<<<<<<< HEAD
export default Index;
=======
export default Index;
>>>>>>> b3212ba76537b4a4ce70a4bdce1d4852464558de
