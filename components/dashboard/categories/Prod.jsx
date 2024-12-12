"use client"; // Ensures that the component is a Client Component

import React, { useState } from "react";
import styles from "./Bill.module.css";
import { AiFillEdit } from "react-icons/ai"; // Import the edit icon
import Delete from "./Delete";
import Index from "../forms/editcategory/Index"; // Import the EditCategory component

const Product = (props) => {
  // State to manage modal visibility and initial category data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to handle opening the modal
  const handleEditClick = (category) => {
    setSelectedCategory(category); // Set the selected category data
    setIsModalOpen(true); // Open the modal
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedCategory(null); // Clear the selected category data
  };

  // Function to handle the update after editing
  const handleUpdateCategory = (updatedCategory) => {
    // Update the parent component or state after successful update
    console.log("Updated Category:", updatedCategory);
    handleCloseModal(); // Close the modal after update
  };

  return (
    <div className={styles.bill}>
      <div className={styles.content}>
        <img width={100} src={props.product.image_url} alt="Product" />
        <h4>{props.product.category_name}</h4> {/* Display the category name */}
      </div>
      <div className={styles.actions}>
        {/* Delete component */}
        <Delete id={props.product._id} />

        {/* Edit icon that triggers the modal */}
        <AiFillEdit
          className={styles.edit} // Apply CSS for styling
          onClick={() => handleEditClick(props.product)} // Call the function to open the modal
        />
      </div>

      {/* Render the EditCategory modal */}
      {isModalOpen && selectedCategory && (
        <Index
          initialData={selectedCategory}
          onClose={handleCloseModal}
          onUpdate={handleUpdateCategory}
        />
      )}
    </div>
  );
};

export default Product;
