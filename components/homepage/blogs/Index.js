import React from "react";
import styles from "./Index.module.css";
import BlogCard from "@/components/ui/blog/BlogCard";
import blog1 from "@/public/images/blogs/blog1/YellowWhiteIllustratedBusinessInTheDigitalAgeBlogBanner.png";
import blog2 from "@/public/images/blogs/blog2/ModernDigitalMarketingBlog2Thumbnail.png";
import blog3 from "@/public/images/blogs/blog3/RedFactsYouTubeThumbnailBlog4.png";

const HomeBlogs = () => {
  return (
    <div className={styles.container}>
      <h1>Transform your online store with DaSouk's go-to resource</h1>
      <div className={styles.blogs}>
        <BlogCard
          link={"/blogs/secret-ingredient-to-dasouk"}
          image={blog1}
          title={"Secret ingredient to Dasouk"}
          description={
            "Hey there, aspiring entrepreneurs and digital dreamers! Are you ready to turn your ideas into reality and"
          }
          date={"October 16, 2023"}
        />
        <BlogCard
          link={"/blogs/diy-platforms"}
          image={blog2}
          title={"Navigating the E-Commerce Frontier"}
          description={
            "Step into the vibrant world of e-commerce, where every click holds the promise of discovery and every transaction marks a step towards digital empowerment."
          }
          date={"October 16, 2023"}
        />
        <BlogCard
          link={"/blogs/online-store-2-mins"}
          image={blog3}
          title={"How do you create your dream ecommerce store on Dasouk"}
          description={
            "Are you ready to turn your passion into a thriving online business? Look no further than Dasouk - your one-stop destination for creating"
          }
          date={"October 16, 2023"}
        />
      </div>
    </div>
  );
};

export default HomeBlogs;
