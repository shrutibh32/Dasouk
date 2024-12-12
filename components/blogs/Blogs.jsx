import React from "react";
import styles from "./Blogs.module.css";
import BlogCard from "../ui/blog/BlogCard";
import blog1 from "@/public/images/blogs/blog1/YellowWhiteIllustratedBusinessInTheDigitalAgeBlogBanner.png";
import blog2 from "@/public/images/blogs/blog2/ModernDigitalMarketingBlog2Thumbnail.png";
import blog3 from "@/public/images/blogs/blog3/RedFactsYouTubeThumbnailBlog4.png";
import blog4 from "@/public/images/blogs/blog4/GraphicDesignBlogHeaderBlog3Thumbnail.png";
import blog5 from "@/public/images/blogs/blog5/Blog5Thumbnail.jpg";

const Blogs = () => {
  return (
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
        link={"/blogs/dropshipping"}
        image={blog4}
        title={"Dropship like a pro! A comprehensive guide to success"}
        description={
          "Imagine this scenario: You're browsing your favorite online store, adding items to your cart, and marveling at the convenience of modern e-commerce."
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
      <BlogCard
        link={"/blogs/the-ecommerce-enigma"}
        image={blog5}
        title={"The Ecommerce Enigma"}
        description={
          "Welcome to the digital wonderland of ecommerce, where every click holds the potential for magic, and every pixel tells a story."
        }
        date={"October 16, 2023"}
      />
    </div>
  );
};

export default Blogs;
