import React from "react";
import styles from "./BlogCard.module.css";
import Link from "next/link";

const BlogCard = ({ link, image, title, description, date }) => {
  return (
    <Link href={link}>
      <div className={styles.blog}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image.src})` }}
        ></div>
        <div className={styles.blogContent}>
          <h4>{title}</h4>
          <p className={styles.description}>{description}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
