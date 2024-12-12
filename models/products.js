import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  sid: { type: String, required: true },
  name: String,
  description: String,
  category_id: String,
  brand_id: String,
  price: Number,
  currency: String,
  stock_level: Number,
  image_url: String,
  additional_images: { type: [String] }, // Array of strings for additional image URLs
},
{ timestamps: true });

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
