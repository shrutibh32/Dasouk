import React, { useEffect, useState } from "react";
import styles from "./Input.module.css";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import { IoCloseCircleSharp } from "react-icons/io5";

const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  handleChange,
  size,
  rows,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(innerWidth < 500);
  }, []);

  const handleInputChange = (e) => {
    if (type === "file") {
      if (name === "images") {
        const files = Array.from(e.target.files);
        handleChange(name, [...value, ...files]);
      } else {
        const files = Array.from(e.target.files);
        handleChange(name, files);
      }
    } else {
      handleChange(name, e.target.value);
    }
  };

  const handleDelteImage = (index) => {
    value.splice(index, 1);
    handleChange(name, value);
  };

  if (type === "file" && (name === "images" || name === "image")) {
    return (
      <div
        className={`${styles.inputGroup}`}
        style={
          isMobile
            ? { width: "100%" }
            : { width: size === "half" ? "50%" : "100%" }
        }
      >
        <label htmlFor={name}>{label}</label>
        <input
          style={isMobile ? { width: "100%" } : { width: "50%" }}
          type="file"
          name={name}
          placeholder={placeholder}
          multiple={name === "image" ? false : true}
          onChange={handleInputChange}
          className={`${styles.input} ${
            type === "file" ? styles.fileInput : ""
          }`}
        />
        <div className={styles.multipleImages}>
          {value && value.length > 0 && Array.isArray(value) ? (
            value.map((image, index) => (
              <div key={index} className={styles.imageContainer}>
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`Image ${index + 1}`}
                  width={150}
                  height={150}
                />
                <IoCloseCircleSharp
                  className={styles.closeIcon}
                  size={20}
                  onClick={(e) => handleDelteImage(index)}
                />
              </div>
            ))
          ) : (
            <p>No images selected</p>
          )}
        </div>
      </div>
    );
  }

  if (type === "file" && name === "profile") {
    return (
      <div
        className={`${styles.fileGroup}`}
        style={
          isMobile
            ? { width: "100%" }
            : { width: size === "half" ? "50%" : "100%" }
        }
      >
        <label htmlFor={name}>{label}</label>
        <div>
          {value && value.length > 0 ? (
            <Image
              src={URL.createObjectURL(value[0])}
              alt="Profile"
              width={120}
              height={120}
              className={styles.profile}
            />
          ) : (
            <RxAvatar size={120} />
          )}
        </div>
        <input
          type="file"
          name={name}
          accept="image/*"
          onChange={handleInputChange}
          className={`${styles.input} ${
            type === "file" ? styles.fileInput : ""
          }`}
        />
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div
        className={`${styles.inputGroup}`}
        style={
          isMobile
            ? { width: "100%" }
            : { width: size === "half" ? "50%" : "100%" }
        }
      >
        <label htmlFor={name}>{label}</label>
        <textarea
          rows={rows}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className={`${styles.input} ${
            type === "file" ? styles.fileInput : ""
          }`}
        />
      </div>
    );
  }

  return (
    <div
      className={`${styles.inputGroup}`}
      style={
        isMobile
          ? { width: "100%" }
          : { width: size === "half" ? "50%" : "100%" }
      }
    >
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className={`${styles.input} ${type === "file" ? styles.fileInput : ""}`}
      />
    </div>
  );
};

export default Input;
