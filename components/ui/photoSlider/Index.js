"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Index.module.css";
import "./carosuel.css";

const Carousel = ({ images, height, slides, type }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    width: "80%",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageContainer}>
          <img
            src={image.src}
            alt={`Slide ${index}`}
            style={
              type === "business"
                ? {
                    backgroundColor: "white",
                    borderRadius: "10px",
                    maxHeight: height,
                    boxShadow: "4px 4px 6px 0px #FF7B00",
                  }
                : { maxHeight: height }
            }
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
