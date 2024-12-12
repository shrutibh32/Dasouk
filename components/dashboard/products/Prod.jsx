"use client"; // Add this directive at the top
import React, { useState, useEffect } from "react";
import styles from "./Bill.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Delete from "./Delete";
import Index from "../forms/editproduct/Index"; // Import the EditForm component

const Prod = (props) => {
  const [isEditMode, setIsEditMode] = useState(false); // State to toggle edit mode
  const [product, setProduct] = useState(props.product); // State for product data

  // Function to handle opening the edit mode
  const handleEditClick = () => {
    setIsEditMode(true);
  };

  // Function to handle closing the edit mode
  const handleCloseEdit = () => {
    setIsEditMode(false);
  };

  // Function to handle updating the product data
  const handleProductUpdate = (updatedProduct) => {
    setProduct(updatedProduct);
    setIsEditMode(false);
  };

  return (
    <div className={styles.bill}>
      <div className={styles.content}>
        <img width={100} src={product.image_url} alt={product.name} />
        <h4>{product.name}</h4>
        <div className={styles.companyInfo}>
          <p>$ {product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <Delete id={product._id} />
        <AiFillEdit className={styles.edit} onClick={handleEditClick} />
      </div>

      {/* Render the edit form in a modal */}
      {isEditMode && (
        <div className={styles.modal__container} onClick={handleCloseEdit}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <Index
              initialData={product} // Pass the product data to pre-fill the form
              onClose={handleCloseEdit} // Function to close the modal
              onUpdate={handleProductUpdate} // Callback to handle product updates
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Prod;
