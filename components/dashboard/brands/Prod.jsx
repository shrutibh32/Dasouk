"use client"; // Mark this component as a Client Component

import React, { useState } from "react"; // Import React and useState
import styles from "./Bill.module.css"; // Ensure path is correct
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Delete from "./Delete"; // Ensure path is correct
import Index from "../forms/editbrand/Index"; // Ensure path is correct

const Prod = (props) => {
  const [isEditMode, setIsEditMode] = useState(false); // State to toggle edit mode
  const [product, setProduct] = useState(props.product); // State for product data

  const handleEditClick = () => {
    setIsEditMode(true); // Open the modal
  };

  const handleCloseEdit = () => {
    setIsEditMode(false); // Close the modal
  };

  const handleProductUpdate = (updatedProduct) => {
    setProduct(updatedProduct); // Update product state with new data
    setIsEditMode(false); // Close the modal
  };

  return (
    <div className={styles.bill}>
      <div className={styles.content}>
        <img width={100} src={product.image_url} alt={product.brand_name} />
        <h4>{product.brand_name}</h4>
      </div>
      <div className={styles.actions}>
        {/* Delete Component */}
        <Delete id={product._id} />
        {/* Edit button to trigger modal */}
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
